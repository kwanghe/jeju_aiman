import React, { useState, useEffect } from 'react';
import { Rocket } from 'lucide-react';

interface SpaceSuitGameProps {
  onClose: () => void;
}

const SpaceSuitGame: React.FC<SpaceSuitGameProps> = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);
  const [isGameActive, setIsGameActive] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [feedbackImage, setFeedbackImage] = useState<string | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const challenges = [
    {
      title: '긴급! 온도 경고',
      description: '경고! 우주인의 체온이 위험 수준으로 상승중입니다. 즉시 조치하세요!',
      image: 'http://aiapi.aixstudio.kr/Image/SpaceSuitGame/1.webp',
      answer: '냉각',
      options: ['냉각', '가열', '유지'],
      feedback: '냉각 시스템 가동 완료! 체온이 안정화되고 있습니다.'
    },
    {
      title: '산소 부족 경보',
      description: '위험! 산소량 30% 미만! 즉각적인 조치가 필요합니다!',
      image: 'http://aiapi.aixstudio.kr/Image/SpaceSuitGame/2.webp',
      answer: '산소 주입',
      options: ['산소 주입', '산소 절약', '통풍 가동'],
      feedback: '산소 주입 성공! 산소량이 정상으로 회복되었습니다!'
    },
    {
      title: '통신 시스템 이상',
      description: '긴급! 우주정거장에서 중요한 메시지가 수신중입니다!',
      image: 'http://aiapi.aixstudio.kr/Image/SpaceSuitGame/3.webp',
      answer: '수신 버튼',
      options: ['수신 버튼', '전원 끄기', '볼륨 낮추기'],
      feedback: '통신 연결 완료! 메시지 수신을 시작합니다.'
    },
    {
      title: '장비 이동 경보',
      description: '주의! 중요 장비 이동이 필요합니다. 신속히 조치하세요!',
      image: 'http://aiapi.aixstudio.kr/Image/SpaceSuitGame/4.webp',
      answer: '파워 부스트',
      options: ['파워 부스트', '절전 모드', '대기 모드'],
      feedback: '파워 부스트 활성화! 안전하게 장비를 이동했습니다!'
    },
    {
      title: '배터리 위험',
      description: '경고! 배터리 잔량 30% 미만! 즉시 전력 관리가 필요합니다!',
      image: 'http://aiapi.aixstudio.kr/Image/SpaceSuitGame/5.webp',
      answer: '절전 모드',
      options: ['최대 출력', '절전 모드', '재부팅'],
      feedback: '절전 모드 전환 성공! 전력을 안정적으로 유지합니다.'
    }
  ];

  const feedbackImages = [
    'http://aiapi.aixstudio.kr/Image/SpaceSuitGame/6.webp',
    'http://aiapi.aixstudio.kr/Image/SpaceSuitGame/7.webp',
  ];

  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = [
        ...challenges.map(challenge => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = challenge.image;
            img.onload = () => resolve(true);
          });
        }),
        ...feedbackImages.map(image => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = image;
            img.onload = () => resolve(true);
          });
        }),
      ];

      await Promise.all(imagePromises);
      setImagesLoaded(true);
    };

    if (!imagesLoaded) {
      loadImages();
    }
  }, [challenges, feedbackImages, imagesLoaded]);

  useEffect(() => {
    let timer: number;
    if (isGameActive && timeLeft > 0) {
      timer = window.setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isGameActive) {
      setIsGameActive(false);
    }
    return () => clearInterval(timer);
  }, [timeLeft, isGameActive]);

  const startGame = () => {
    if (!imagesLoaded) {
      alert('이미지를 로드 중입니다. 잠시 기다려 주세요.');
      return;
    }
    setShowIntro(false);
    setIsGameActive(true);
    setTimeLeft(15);
    setCurrentStep(0);
    setScore(0);
  };

  const handleAnswer = (answer: string) => {
    if (!isGameActive) return;
    
    const isAnswerCorrect = answer === challenges[currentStep].answer;
    setIsCorrect(isAnswerCorrect);
    setShowFeedback(true);
    
    if (isAnswerCorrect) {
      setFeedbackImage(feedbackImages[0]);
      setScore(prev => prev + 20);
    } else {
      setFeedbackImage(feedbackImages[1]);
    }

    setTimeout(() => {
      setShowFeedback(false);
      setFeedbackImage(null);
      if (currentStep < challenges.length - 1) {
        setCurrentStep(prev => prev + 1);
      } else {
        setIsGameActive(false);
      }
    }, 1500);
  };

  const resetGame = () => {
    setCurrentStep(0);
    setScore(0);
    setTimeLeft(15);
    setShowIntro(true);
    setIsGameActive(false);
    setShowFeedback(false);
  };

  const getScoreMessage = () => {
    if (score === 100) return { text: '완벽해요! 우주인의 생명을 구했습니다! 🚀', color: 'text-green-500' };
    if (score >= 60) return { text: '잘했어요! 하지만 더 빠른 대처가 필요합니다! 🌟', color: 'text-blue-500' };
    return { text: '위험합니다! 다시 도전하세요! 💪', color: 'text-yellow-500' };
  };

  const getFeedbackDetails = (score: number) => {
    if (score === 100) {
      return [
        "완벽한 대처! 모든 긴급 상황을 성공적으로 해결했습니다.",
        "온도 조절, 산소 공급, 통신, 장비 이동, 배터리 관리 모두 완벽했어요.",
        "당신은 최고의 우주복 관리자입니다!"
      ];
    } else if (score >= 60) {
      return [
        "대체로 잘 대처했지만, 몇 가지 실수가 있었네요.",
        "긴급 상황에서의 빠른 판단력이 중요합니다.",
        "다시 한번 도전해서 완벽한 점수를 노려보세요!"
      ];
    } else {
      return [
        "우주복 시스템에 대한 더 많은 학습이 필요합니다.",
        "각 시스템의 기능과 사용 시점을 정확히 파악하는 것이 중요해요.",
        "천천히 다시 도전해보세요!"
      ];
    }
  };

  if (showIntro) {
    return (
      <div className="w-full max-w-lg mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 border-b">
          <div className="flex items-center justify-center gap-2">
            <Rocket className="w-6 h-6" />
            <h2 className="text-xl font-bold text-gray-900">긴급 우주복 관리 시스템</h2>
          </div>
        </div>
        <div className="p-6 space-y-6">
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2 text-red-600">긴급 상황 발생!</h3>
            <p>우주인의 생명이 당신의 손에 달렸습니다. 신속한 판단이 필요합니다!</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold">미션 규칙</h3>
            <ul className="list-disc pl-5">
              <li>5개의 위험 상황 발생</li>
              <li>제한 시간 15초</li>
              <li>각 성공마다 20점 획득</li>
            </ul>
          </div>
          <div className="flex items-center justify-center mb-4">
            <img src="https://aiapi.aixstudio.kr/Image/SpaceSuitGame/0.webp" alt="Mission Rules" className="w-48 h-48" />
          </div>
          <button 
            onClick={startGame}
            className="w-full bg-red-500 hover:bg-red-600 text-white rounded-lg py-4 px-8 text-lg font-medium transition-colors"
          >
            긴급 미션 시작
          </button>
        </div>
      </div>
    );
  }

  if (!isGameActive && !showIntro) {
    const feedbackDetails = getFeedbackDetails(score);
    return (
      <div className="w-full max-w-lg mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 border-b">
          <h2 className="text-xl font-bold text-center">미션 종료!</h2>
        </div>
        <div className="p-6 space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-xl font-bold">최종 점수: {score}점</h3>
            <p className={getScoreMessage().color}>
              {getScoreMessage().text}
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg space-y-2">
            <h4 className="font-bold">상세 피드백</h4>
            {feedbackDetails.map((feedback, index) => (
              <p key={index} className="text-gray-700">{feedback}</p>
            ))}
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-bold mb-2">우주복 시스템 핵심 포인트</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>온도 조절은 우주인의 생존에 직결됩니다</li>
              <li>산소 공급은 즉각적으로 이루어져야 합니다</li>
              <li>통신 시스템은 항상 정상 작동해야 합니다</li>
              <li>장비 이동시 안전이 최우선입니다</li>
              <li>배터리 관리는 모든 시스템의 기본입니다</li>
            </ul>
          </div>

          <div className="flex space-x-2">
            <button 
              onClick={resetGame} 
              className="w-full bg-red-500 hover:bg-red-600 text-white rounded-lg py-3 font-medium transition-colors"
            >
              미션 재도전
            </button>
            <button 
              onClick={onClose}
              className="w-full bg-gray-500 hover:bg-gray-600 text-white rounded-lg py-3 font-medium transition-colors"
            >
              나가기
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-lg mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 border-b">
        <h2 className="text-xl font-bold text-center">
          긴급 상황 대처
          <div className="flex justify-between items-center mt-2 text-sm">
            <div className="font-normal">현재 점수: {score}점</div>
            <div className={`font-bold ${timeLeft <= 5 ? 'text-red-500 animate-pulse' : ''}`}>
              남은 시간: {timeLeft}초
            </div>
          </div>
        </h2>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-center mb-4">
            {showFeedback && feedbackImage ? (
              <img src={feedbackImage} alt="Feedback" className="w-48 h-48" />
            ) : (
              <img src={challenges[currentStep].image} alt={challenges[currentStep].title} className="w-48 h-48" />
            )}
          </div>
          <h3 className="text-lg font-semibold text-center mb-2 text-red-600">
            {challenges[currentStep].title}
          </h3>
          <p className="text-center mb-4 font-bold">
            {challenges[currentStep].description}
          </p>
          {showFeedback ? (
            <div className={`text-center p-4 rounded-lg ${isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {challenges[currentStep].feedback}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-2">
              {challenges[currentStep].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 transition-colors"
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpaceSuitGame;