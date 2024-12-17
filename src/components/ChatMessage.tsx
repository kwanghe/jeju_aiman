import React, { useState, useEffect } from 'react';
import { ChatMessage as ChatMessageType } from '../types/chat';
import { UserCircle2, NewspaperIcon } from 'lucide-react';
import GameModal from './GameModal';
import DrawingCanvas from '../components/DrawingCanvas';

interface ChatMessageProps {
  message: ChatMessageType;
  isUser?: boolean;
  isNewMessage?: boolean;
  onOptionSelect?: (option: string, nextId: string, message?: ChatMessageType) => void;
  onCardNewsView?: (cardNewsCode: string) => void;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  isUser = false,
  isNewMessage = false,
  onOptionSelect,
  onCardNewsView,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [showOptions, setShowOptions] = useState(false);
  const [showGame, setShowGame] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [showCardNews, setShowCardNews] = useState(false);
  const [showDrawing, setShowDrawing] = useState(false);

  const handleGameStart = () => {
    setIsModalOpen(true);
  };

  const handleDrawingStart = () => {
    setIsModalOpen(true);
  };

  // Split message by periods and commas, but keep the punctuation
  const splitMessages = message.message
    .split(/([.!?]+)/)
    .reduce((acc: string[], part, i) => {
      if (part) {
        if (/^[.!?]+$/.test(part) && i > 0) {
          acc[acc.length - 1] += part;
        } else {
          acc.push(part);
        }
      }
      return acc;
    }, [])
    .filter((msg) => msg.trim());

  useEffect(() => {
    if (isNewMessage) {
      // 메시지를 순차적으로 표시
      setVisibleMessages([]);
      setShowOptions(false);
      setShowGame(false);
      setShowImage(false);
      setShowCardNews(false);
      setShowDrawing(false);
      
      splitMessages.forEach((_, index) => {
        setTimeout(() => {
          setVisibleMessages(prev => [...prev, index]);
          
          // 마지막 메시지가 표시된 후 추가 요소들을 순차적으로 표시
          if (index === splitMessages.length - 1) {
            // 게임 버튼
            if (message.type === 'game') {
              setTimeout(() => setShowGame(true), 500);
            }
            // 이미지
            if (message.image) {
              setTimeout(() => setShowImage(true), 1000);
            }
            // 카드뉴스
            if (message.cardNewsCode) {
              setTimeout(() => setShowCardNews(true), 1500);
            }
            // 그림 그리기
            if (message.type === 'drawing') {
              setTimeout(() => setShowDrawing(true), 1000);
            }
            // 옵션들
            setTimeout(() => setShowOptions(true), 2000);
          }
        }, index * 1000);
      });
    } else {
      // 이전 메시지는 모두 표시
      setVisibleMessages(splitMessages.map((_, i) => i));
      setShowOptions(true);
      setShowGame(true);
      setShowImage(true);
      setShowCardNews(true);
      setShowDrawing(true);
    }
  }, [isNewMessage, splitMessages.length, message.type, message.image, message.cardNewsCode]);

  return (
    <div
      className={`flex ${
        isUser ? 'justify-end' : 'justify-start'
      } mb-4 items-end gap-2`}
    >
      {!isUser && (
        <div className="flex-shrink-0">
          {message.mentorImage ? (
            <img
              src={message.mentorImage}
              alt={message.mentorName}
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <UserCircle2 className="w-10 h-10 text-gray-400" />
          )}
        </div>
      )}

      <div className={`max-w-[70%] ${isUser ? 'order-1' : 'order-2'}`}>
        {!isUser && message.mentorName && (
          <div className="text-sm text-gray-500 mb-1 ml-1">{message.mentorName}</div>
        )}

        <div className="space-y-2">
          {splitMessages.map((msg, index) => (
            visibleMessages.includes(index) && (
              <div
                key={index}
                className={`rounded-2xl px-4 py-2 ${
                  isUser
                    ? 'bg-[#FFEB33] text-gray-800 rounded-br-none'
                    : 'bg-white text-gray-800 rounded-bl-none'
                } ${isNewMessage ? 'animate-fade-in' : ''}`}
              >
                <p className="text-sm whitespace-pre-wrap">{msg.trim()}</p>
              </div>
            )
          ))}
        </div>

        {showOptions && (
          <>
            {message.type === 'game' && showGame && (
              <button
                onClick={handleGameStart}
                className={`mt-2 w-full text-left px-4 py-2 rounded-xl bg-blue-50 border border-blue-100 text-blue-800 hover:bg-blue-100 transition-colors text-sm flex items-center gap-2 ${isNewMessage ? 'animate-fade-in' : ''}`}
              >
                게임하기
              </button>
            )}

            {message.image && showImage && (
              <div className={`mt-2 ${isNewMessage ? 'animate-fade-in' : ''}`}>
                <img
                  src={message.image}
                  alt="Chat message image"
                  className="max-w-full rounded-lg shadow-sm mb-2 object-cover"
                />
              </div>
            )}

            {!isUser && message.cardNewsCode && showCardNews && (
              <button
                onClick={() => onCardNewsView?.(message.cardNewsCode!)}
                className={`mt-2 w-full text-left px-4 py-2 rounded-xl bg-blue-50 border border-blue-100 text-blue-800 hover:bg-blue-100 transition-colors text-sm flex items-center gap-2 ${isNewMessage ? 'animate-fade-in' : ''}`}
              >
                <NewspaperIcon className="w-4 h-4" />
                카드 뉴스 보기
              </button>
            )}

            {message.type === 'drawing' && showDrawing && (
              <button
                onClick={handleDrawingStart}
                className={`mt-2 w-full text-left px-4 py-2 rounded-xl bg-blue-50 border border-blue-100 text-blue-800 hover:bg-blue-100 transition-colors text-sm flex items-center gap-2 ${isNewMessage ? 'animate-fade-in' : ''}`}
              >
                그림 그리기
              </button>
            )}

            {!isUser && message.options && message.options.length > 0 && (
              <div className="mt-3 space-y-2">
                {message.options.map((option) => (
                  <button
                    key={option.text}
                    onClick={() =>
                      onOptionSelect?.(option.text, option.nextId, message)
                    }
                    className={`w-full text-left px-4 py-2 rounded-xl bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 transition-colors text-sm ${isNewMessage ? 'animate-fade-in' : ''}`}
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {message.gameCode && (
        <GameModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          gameCode={message.gameCode}
        />
      )}

      {isModalOpen && message.type === 'drawing' && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">그림 그리기</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <DrawingCanvas />
          </div>
        </div>
      )}
    </div>
  );
};
