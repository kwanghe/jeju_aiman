import React, { useRef, useState, useEffect } from 'react';
import { Download, Eraser, MousePointer2, Wand2 } from 'lucide-react';

interface GenerationResponse {
  content: Blob;
  headers: {
    'finish-reason': string;
    seed: string;
  };
}

const DrawingCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isEraser, setIsEraser] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);

  const STABILITY_KEY = 'sk-wkfW6oIfGPZMI6qG3h4EYUDAe0H9mQuOWwAztMUKlVHpx4CK'; // 실제 사용시 환경변수로 관리

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set canvas size to match container size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const context = canvas.getContext('2d');
    if (!context) return;

    context.lineCap = 'round';
    context.strokeStyle = 'black';
    context.lineWidth = 2;
    contextRef.current = context;
  }, []);

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    const context = contextRef.current;
    if (!canvas || !context) return;

    const rect = canvas.getBoundingClientRect();
    const x =
      'touches' in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y =
      'touches' in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;

    context.beginPath();
    context.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    const context = contextRef.current;
    if (!canvas || !context) return;

    const rect = canvas.getBoundingClientRect();
    const x =
      'touches' in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y =
      'touches' in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;

    context.strokeStyle = isEraser ? 'white' : 'black';
    context.lineTo(x, y);
    context.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    const context = contextRef.current;
    if (!context) return;
    context.closePath();
  };

  const saveImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Create temporary link element
    const link = document.createElement('a');
    link.download = 'drawing.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  const toggleEraser = () => {
    setIsEraser(!isEraser);
  };

  const canvasToFile = async (canvas: HTMLCanvasElement): Promise<File> => {
    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        if (blob) {
          const file = new File([blob], 'sketch.png', { type: 'image/png' });
          resolve(file);
        }
      }, 'image/png');
    });
  };

  const sendGenerationRequest = async (
    host: string,
    params: any,
    imageFile: File
  ): Promise<GenerationResponse> => {
    const formData = new FormData();

    // Add image file
    formData.append('image', imageFile);

    // Add other parameters
    Object.keys(params).forEach((key) => {
      if (key !== 'image') {
        formData.append(key, params[key]);
      }
    });

    const response = await fetch(host, {
      method: 'POST',
      headers: {
        Accept: 'image/*',
        Authorization: `Bearer ${STABILITY_KEY}`,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${await response.text()}`);
    }

    const content = await response.blob();
    return {
      content,
      headers: {
        'finish-reason': response.headers.get('finish-reason') || '',
        seed: response.headers.get('seed') || '',
      },
    };
  };

  const handleGenerate = async () => {
    if (!canvasRef.current || !prompt.trim()) return;

    setIsGenerating(true);
    try {
      const imageFile = await canvasToFile(canvasRef.current);

      const host =
        'https://api.stability.ai/v2beta/stable-image/control/sketch';
      const params = {
        control_strength: 0.7,
        seed: 0,
        output_format: 'webp',
        prompt: prompt,
        negative_prompt: '',
      };

      const response = await sendGenerationRequest(host, params, imageFile);

      // Check for NSFW classification
      if (response.headers['finish-reason'] === 'CONTENT_FILTERED') {
        throw new Error('Generation failed NSFW classifier');
      }

      // Create and display the result image
      const resultUrl = URL.createObjectURL(response.content);

      // 결과 이미지를 표시하거나 다운로드
      const link = document.createElement('a');
      link.href = resultUrl;
      link.download = `generated_${response.headers.seed}.webp`;
      link.click();

      // Clean up
      URL.revokeObjectURL(resultUrl);
    } catch (error) {
      console.error('Failed to generate image:', error);
      alert('이미지 생성에 실패했습니다.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-4 mb-4">
        <button
          onClick={toggleEraser}
          className={`p-2 rounded-lg ${
            isEraser ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          title={isEraser ? 'Switch to Pen' : 'Switch to Eraser'}
        >
          {isEraser ? <MousePointer2 size={24} /> : <Eraser size={24} />}
        </button>
        <button
          onClick={saveImage}
          className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition-colors"
          title="Save as PNG"
        >
          <Download size={24} />
        </button>
      </div>

      <canvas
        ref={canvasRef}
        className="border-2 border-gray-300 rounded-lg bg-white cursor-crosshair touch-none"
        style={{ width: '600px', height: '400px' }}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        onTouchStart={startDrawing}
        onTouchMove={draw}
        onTouchEnd={stopDrawing}
      />

      {/* 프롬프트 입력 및 생성 섹션 */}
      <div className="w-full max-w-[600px] mt-4 space-y-2">
        <div className="flex gap-2">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="그림에 대한 설명을 입력하세요..."
            className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
          />
          <button
            onClick={handleGenerate}
            disabled={isGenerating || !prompt.trim()}
            className={`px-6 py-2 rounded-lg flex items-center gap-2 ${
              isGenerating || !prompt.trim()
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-blue-500 hover:bg-blue-600'
            } text-white transition-colors`}
          >
            <Wand2 size={20} />
            {isGenerating ? '생성 중...' : '생성하기'}
          </button>
        </div>
        <p className="text-sm text-gray-500">
          * 그린 그림을 바탕으로 AI가 새로운 이미지를 생성합니다.
        </p>
      </div>
    </div>
  );
};

export default DrawingCanvas;
