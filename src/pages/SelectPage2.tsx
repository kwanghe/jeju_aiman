import { useLocation, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';

export const SelectPage2 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { mission } = location.state || { mission: [] };

  const handleMissionStart = (path: string) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-4">미션 선택</h2>
        <div className="space-y-4">
          {mission.map((m: { title: string; description: string; path: string }, index: number) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold">{m.title}</h3>
              <p>{m.description}</p>
              <button 
                onClick={() => handleMissionStart(m.path)}
                className="mt-2 bg-blue-500 text-white rounded px-4 py-2"
              >
                미션 시작
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 