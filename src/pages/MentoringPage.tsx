import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { ChatWindow } from '../components/ChatWindow';
import { useMentor } from '../hooks/useMentor';
import { useChat } from '../hooks/useChat';
import { getChatDialog } from '../data/chatDialogs';
import { RotateCcwIcon } from 'lucide-react';
import { MentorCode } from '../types';

export const MentoringPage = () => {
  const navigate = useNavigate();
  const { mentorCode } = useParams<{ mentorCode: string }>();
  const mentor = useMentor();
  
  if (!mentor) {
    navigate('/');
    return null;
  }

  if (!mentorCode) {
    navigate('/select');
    return null;
  }

  const chatDialog = getChatDialog(mentorCode as MentorCode);
  const mentorImage = chatDialog[3]?.mentorImage;
  const mentorName = chatDialog[0]?.mentorName;
  
  const { 
    history, 
    currentMessageId, 
    setCurrentMessageId, 
    addToHistory, 
    resetChat 
  } = useChat(mentorCode || '');

  const currentMessage = chatDialog.find(msg => msg.id === currentMessageId);

  // Show card news when chat ends or user inputs a message
  useEffect(() => {
    const lastMessage = history[history.length - 1];
    if (lastMessage && (lastMessage.isUserInput || currentMessage?.options?.length === 0)) {
    }
  }, [history, currentMessage]);

  // 마지막 히스토리 메시지의 다음 메시지 ID 찾기
  const getInitialMessageId = () => {
    if (history.length === 0) return '1';
    
    const lastHistoryMessage = history[history.length - 1];
    const currentMessage = chatDialog.find(m => m.id === lastHistoryMessage.messageId);
    
    return currentMessage?.options?.find(
      opt => opt.text === lastHistoryMessage.selectedOption
    )?.nextId || '1';
  };

  // 초기 메시지 ID 설정
  useEffect(() => {
    const initialMessageId = getInitialMessageId();
    setCurrentMessageId(initialMessageId);
  }, []);

  const handleOptionSelect = (option: string, nextId: string) => {
    addToHistory(currentMessageId, option);
    setCurrentMessageId(nextId);
  };

  const handleUserInput = (message: string) => {
    addToHistory(currentMessageId, message, true);
    setCurrentMessageId('end');
  };

  const handleResetChat = () => {
    resetChat();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="h-[calc(100vh-16rem)] flex gap-8">
            {/* Mentor Image Section */}
            <div className="w-1/3 bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-full relative">
                <img 
                  src={mentorImage}
                  alt={mentor.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <h2 className="text-white text-xl font-bold">{mentorName}</h2>
                  <p className="text-gray-200 text-sm">{mentor.title}</p>
                </div>
              </div>
            </div>

            {/* Chat Section */}
            <div className="w-2/3 bg-white rounded-xl shadow-lg flex flex-col">
              <div className="p-4 border-b flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  우주인 롤모델 맨토링
                </h3>
                <button
                  onClick={handleResetChat}
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
                >
                  <RotateCcwIcon className="w-4 h-4" />
                  대화 다시 시작하기
                </button>
              </div>
              
              <ChatWindow
                messages={chatDialog}
                history={history}
                onOptionSelect={handleOptionSelect}
                onUserInput={handleUserInput}
                currentMessage={currentMessage}
                mentorImage={mentor.image}
                mentorName={mentor.name}
              />
            </div>
          </div>

          
        </div>
      </main>
    </div>
  );
};