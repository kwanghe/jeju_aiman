import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { UserIcon, MessageSquareIcon } from 'lucide-react';
import { useMentor } from '../hooks/useMentor';

export const SelectPage = () => {
  const navigate = useNavigate();
  const mentor = useMentor();

  if (!mentor) {
    navigate('/');
    return null;
  }

  const handleMentoring = () => {
    navigate('/selectpage2', { state: { mission: mentor.mentoringMission } });
  };

  const handleFeedback = () => {
    navigate('/selectpage2', { state: { mission: mentor.feedbackMission } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div 
            onClick={handleMentoring}
            className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform"
          >
            <div className="h-120 bg-indigo-900 relative">
              <img 
                src={mentor.image}
                alt={mentor.name}
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <UserIcon className="w-16 h-16 text-white" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-2">우주인 롤모델 멘토링</h3>
              <p className="text-gray-600">{mentor.name}과의 만남</p>
            </div>
          </div>

          <div 
            onClick={handleFeedback}
            className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform"
          >
            <div className="h-120 bg-indigo-900 relative">
              <img 
                src={mentor.image}
                alt={mentor.name}
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <MessageSquareIcon className="w-16 h-16 text-white" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-2">롤모델 피드백</h3>
              <p className="text-gray-600">{mentor.name}의 조언</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};