import React, { useEffect, useRef, useState } from 'react';
import { ChatMessage } from './ChatMessage';
import { CardNews } from './CardNews';
import { ChatMessage as ChatMessageType, ChatHistory } from '../types/chat';
import { getCardNews } from '../data/cardNews';
import { MentorCode } from '../types';

interface ChatWindowProps {
  messages: ChatMessageType[];
  history: ChatHistory[];
  onOptionSelect: (option: string, nextId: string) => void;
  onUserInput: (message: string) => void;
  currentMessage?: ChatMessageType;
  mentorImage?: string;
  mentorName?: string;
}

export const ChatWindow: React.FC<ChatWindowProps> = ({
  messages,
  history,
  onOptionSelect,
  mentorImage,
  mentorName,
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [selectedCardNews, setSelectedCardNews] = useState<string | null>(null);
  const [isNewMessage, setIsNewMessage] = useState(false);
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [showOptions, setShowOptions] = useState(false);
  const [nameInput, setNameInput] = useState('');

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const historyIndices = Array.from({ length: history.length }, (_, i) => i);
    setVisibleMessages(historyIndices);
    scrollToBottom();
  }, [history]);

  useEffect(() => {
    const scrollMessages = async () => {
      console.log('Scroll interval started');
      const scrollInterval = setInterval(() => {
        scrollToBottom();
        // console.log('Scrolling to bottom...');
      }, 100);
      
      const scrollDuration = 5500; // 5초
      await new Promise(resolve => setTimeout(resolve, scrollDuration)); // 5초 대기
      clearInterval(scrollInterval);
      // console.log('Scroll interval cleared');
    };

    if (isNewMessage) {
      const initialMessage = getNextMessage();
      if (initialMessage) {
        setShowOptions(false);
        // 메시지의 총 길이에 따라 딜레이 계산
        const messageLength = initialMessage.message.split(/[.!?]+/).length;
        const totalDelay = messageLength * 1000;

        setTimeout(() => {
          setShowOptions(true);
          scrollToBottom();
        }, totalDelay);
      }

      scrollMessages(); // 비동기 스크롤 함수 호출

      return () => {
        console.log('Cleanup: Scroll interval cleared');
      };
    }
  }, [messages, history, isNewMessage]);

  const handleOptionSelect = (option: string, nextId: string, message?: ChatMessageType) => {
    if (message?.type === 'name') {
      // 이름 입력 완료 시, 다음 ID로 이동
      const userName = localStorage.getItem('userName');
      console.log(`User name saved: ${userName}`); // 이름 저장 확인 로그
    }
    console.log('option', option);
    console.log('nextId', nextId);
    onOptionSelect(option, nextId); // 기존의 옵션 선택 처리
    setTimeout(scrollToBottom, 100); // 스크롤을 아래로 이동
  };

  const handleCardNewsView = (cardNewsCode: string) => {
    setSelectedCardNews(cardNewsCode);
  };

  const handleCloseCardNews = () => {
    setSelectedCardNews(null);
  };

  const getNextMessage = () => {
    if (history.length === 0) {
      return messages.find(m => m.id === '1'); // 첫 번째 메시지
    }
    
    const lastHistoryMessage = history[history.length - 1];
    
    // 마지막 히스토리 메시지의 다음 메시지를 직접 찾음
    if (lastHistoryMessage.messageId === 'end') {
      return messages.find(m => m.id === '1'); // 대화 종료 시 첫 메시지로
    }
    
    // 마지막 히스토리 메시지 기반으로 다음 메시지 찾기
    const currentMessage = messages.find(m => m.id === lastHistoryMessage.messageId);
    
    if (currentMessage) {
      // 현재 메시지의 옵션 중 선택된 옵션의 nextId 찾기
      const nextMessageId = currentMessage.options?.find(
        opt => opt.text === lastHistoryMessage.selectedOption
      )?.nextId;
      
      return messages.find(m => m.id === nextMessageId) || 
             messages.find(m => m.id === '1');
    }
    
    return messages.find(m => m.id === '1');
  };

  const initialMessage = getNextMessage();

  // useEffect(() => {
  //   console.log('History:', history);
  //   console.log('Initial Message:', initialMessage);
  // }, [history, initialMessage]);

  useEffect(() => {
    setIsNewMessage(true);
    const timer = setTimeout(() => {
      setIsNewMessage(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [initialMessage]);

  return (
    <>
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#BACEE0]">
        {history.map((item, index) => {
          const message = messages.find(m => m.id === item.messageId);
          if (!message || !visibleMessages.includes(index)) return null;
          
          return (
            <React.Fragment key={index}>
              <ChatMessage 
                message={{...message, options: []}}
                onOptionSelect={handleOptionSelect}
                onCardNewsView={handleCardNewsView}
                isNewMessage={false}
              />
              {item.selectedOption && (
                <ChatMessage
                  message={{ 
                    id: 'user', 
                    message: item.selectedOption,
                    options: []
                  }}
                  isUser
                  isNewMessage={false}
                />
              )}
            </React.Fragment>
          );
        })}
        
        {initialMessage && !history.find(h => h.messageId === initialMessage.id) && (
          <ChatMessage 
            message={{...initialMessage, options: []}}
            onOptionSelect={handleOptionSelect}
            onCardNewsView={handleCardNewsView}
            isNewMessage={true}
          />
        )}
        <div ref={messagesEndRef} />
      </div>
      {(initialMessage && initialMessage.options && initialMessage.options.length > 0 && showOptions) && (
        <div className={`p-4 border-t bg-white ${isNewMessage ? 'animate-fade-in' : ''}`}>
          <div className="flex flex-col gap-2">
            {initialMessage.type === 'name' ? (
              <>
                <input
                  type="text"
                  placeholder="이름을 입력하세요"
                  className="border border-gray-300 rounded-lg p-2 mb-2"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                />
                <button
                  onClick={() => {
                    localStorage.setItem('userName', nameInput);
                    if (initialMessage.options && initialMessage.options.length > 0) {
                      handleOptionSelect(initialMessage.options[0].text, initialMessage.options[0].nextId, initialMessage);
                    } else {
                      console.error('No options available for the nextId');
                    }
                  }}
                  className="w-full text-left px-4 py-3 rounded-xl hover:bg-opacity-90 transition-colors text-sm font-medium bg-[#FFEB33] text-gray-800">
                  완료
                </button>
              </>
            ) : (
              initialMessage.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(option.text, option.nextId, initialMessage)}
                  className={`w-full text-left px-4 py-3 rounded-xl hover:bg-opacity-90 transition-colors text-sm font-medium bg-[#FFEB33] text-gray-800`}>
                  {option.text}                
                </button>
              ))
            )}
          </div>
        </div>
      )}
      
      {/* Card News Modal */}
      {selectedCardNews && (
        <CardNews 
          cardNews={getCardNews(selectedCardNews as MentorCode)!} 
          onClose={handleCloseCardNews}
        />
      )}
    </>
  );
};