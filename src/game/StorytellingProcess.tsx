import React, { useState } from 'react';
import { Search, Lightbulb, Target, Palette, Box } from 'lucide-react';

interface StorytellingProcessProps {
  onClose: () => void;
}

const StorytellingProcess: React.FC<StorytellingProcessProps> = ({ onClose }) => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      number: 1,
      title: "문제 발견",
      icon: <Search className="w-6 h-6" />,
      story: "우주는 공기도 없고, 중력도 없어서 꾸꾸가 겪을 문제들을 조사해 봤어. \"꾸꾸가 우주라는 낯선 환경에서 불안하거나 무서워하지 않을까?\" 이게 내가 처음 제일 많이 고민했던 부분이야.",
      points: [
        "꾸꾸는 숨을 쉴 수 없을 거야. 💨",
        "몸이 둥둥 떠다니면 불편하겠지. 🪐",
        "낯선 환경에서 불안해할 수도 있겠어. 👀"
      ],
      conclusion: "이렇게 문제가 뭔지 알게 된 다음, 다음 단계로 넘어갔어!"
    },
    {
      number: 2,
      title: "문제 탐구",
      icon: <Lightbulb className="w-6 h-6" />,
      story: "문제를 해결하려면 꾸꾸가 우주에서 어떤 도움이 필요한지 더 자세히 알아봐야 했어. 자료를 찾아보면서 이런 질문들을 해봤어:",
      points: [
        "꾸꾸가 숨을 잘 쉬려면 어떤 장치가 필요할까?",
        "우주의 온도 변화에 꾸꾸를 어떻게 보호할 수 있을까?",
        "심리적으로 꾸꾸를 안정시키려면 어떤 기능이 필요할까?"
      ],
      conclusion: "조사를 해보니, 꾸꾸에게는 산소 공급, 온도 조절, 심리적 안정이 꼭 필요하다는 걸 알게 됐어!"
    },
    {
      number: 3,
      title: "해결 방안 도출",
      icon: <Target className="w-6 h-6" />,
      story: "꾸꾸를 위한 우주복의 필수 조건을 이렇게 정리했어:",
      points: [
        "1️⃣ 산소를 꾸준히 공급하는 장치: 꾸꾸가 숨을 편하게 쉴 수 있어야 해.",
        "2️⃣ 온도를 조절하는 단열 시스템: 너무 춥거나 덥지 않게 보호해야겠지.",
        "3️⃣ 심리적 안정감을 주는 기능: 꾸꾸가 낯선 환경에서도 편안함을 느낄 수 있어야 해."
      ],
      conclusion: "이제 이 조건들을 충족하는 우주복을 어떻게 만들지 고민하기 시작했어."
    },
    {
      number: 4,
      title: "해결 아이디어 기획",
      icon: <Palette className="w-6 h-6" />,
      story: "내가 떠올린 아이디어는 이런 것들이었어:",
      points: [
        "산소 공급 튜브와 작은 산소탱크: 꾸꾸가 숨을 잘 쉴 수 있도록! 💨",
        "단열 기능이 있는 재질: 온도 변화로부터 꾸꾸를 보호할 수 있는 천을 사용하기로 했어. ❄️🔥",
        "테미의 목소리를 들려주는 소리 재생 장치: 꾸꾸가 불안하지 않도록 테미가 함께 있는 느낌을 줄 수 있어. 🎵",
        "부드럽고 가벼운 재질의 옷: 꼬리와 다리 부분을 유연하게 만들어 꾸꾸가 자유롭게 움직일 수 있도록 했어. 🐕"
      ]
    },
    {
      number: 5,
      title: "시제품 만들기",
      icon: <Box className="w-6 h-6" />,
      story: "아이디어를 바탕으로 실제로 우주복을 만들어 봤어! ✂️",
      points: [
        "가벼운 천과 튼튼한 재료를 사용해서 꾸꾸의 크기에 맞게 재단했어.",
        "작은 산소탱크와 튜브를 연결해서 꾸꾸가 숨을 쉴 수 있게 했고, ❄️🔥",
        "단열층을 추가해서 우주의 극한 온도에도 꾸꾸를 보호할 수 있게 만들었어.",
        "마지막으로 꾸꾸가 안정감을 느낄 수 있도록 테미의 목소리를 재생하는 작은 스피커를 우주복에 달았어! 🎵"
      ]
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">스토리텔링 프로세스</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-between mb-8 bg-gray-50 p-4 rounded-lg">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center">
              <div
                className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${
                  activeStep >= step.number ? 'opacity-100' : 'opacity-50'
                }`}
                onClick={() => setActiveStep(step.number)}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-colors ${
                    activeStep >= step.number 
                      ? 'bg-indigo-600 text-white shadow-md' 
                      : 'bg-gray-200'
                  }`}
                >
                  {step.icon}
                </div>
                <span className="text-sm font-medium text-center max-w-[100px]">{step.title}</span>
              </div>
              {index < steps.length - 1 && (
                <div className="w-12 h-0.5 mx-2 bg-gray-200"/>
              )}
            </div>
          ))}
        </div>

        {/* Story Content */}
        <div className="bg-white rounded-lg p-6">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center mr-4">
              {steps[activeStep - 1].icon}
            </div>
            <h2 className="text-2xl font-bold text-indigo-600">
              {steps[activeStep - 1].title}
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed">{steps[activeStep - 1].story}</p>
            
            <div className="space-y-4 bg-gray-50 p-6 rounded-xl">
              {steps[activeStep - 1].points.map((point, index) => (
                <div key={index} className="flex items-start group">
                  <div className="w-2 h-2 rounded-full bg-indigo-600 mt-2.5 mr-3 group-hover:scale-125 transition-transform"></div>
                  <p className="text-lg leading-relaxed">{point}</p>
                </div>
              ))}
            </div>

            {steps[activeStep - 1].conclusion && (
              <p className="text-lg font-medium text-indigo-600 pt-2">
                {steps[activeStep - 1].conclusion}
              </p>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-6">
          <button
            className={`px-6 py-3 rounded-lg transition-all duration-300 ${
              activeStep > 1
                ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
            onClick={() => activeStep > 1 && setActiveStep(activeStep - 1)}
            disabled={activeStep === 1}
          >
            이전 단계
          </button>
          <button
            className={`px-6 py-3 rounded-lg transition-all duration-300 ${
              activeStep < 5
                ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
            onClick={() => activeStep < 5 && setActiveStep(activeStep + 1)}
            disabled={activeStep === 5}
          >
            다음 단계
          </button>
        </div>
      </div>
    </div>
  );
};

export default StorytellingProcess;