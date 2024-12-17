import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { CodeInput } from '../components/CodeInput';
import { Alert } from '../components/Alert';
import { RocketIcon } from 'lucide-react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useCodeValidation } from '../hooks/useCodeValidation';
import type { UserSettings } from '../types';

export const Home = () => {
  const navigate = useNavigate();
  const [settings, setSettings] = useLocalStorage<UserSettings>('userSettings', {
    code: localStorage.getItem('participationCode') || '',
    level: 'elementary'
  });
  const { getErrorMessage } = useCodeValidation();
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    const participationCode = localStorage.getItem('participationCode');
    const userLevel = localStorage.getItem('userLevel');
    
    if (participationCode !== settings.code || userLevel !== settings.level) {
      setSettings({
        code: participationCode || '',
        level: userLevel as any || 'elementary'
      });
    }
  }, []);

  const handleStart = () => {
    const currentCode = localStorage.getItem('participationCode');
    const errorMessage = getErrorMessage(currentCode || '');
    
    if (errorMessage) {
      setAlertMessage(errorMessage);
      setShowAlert(true);
    } else {
      navigate('/select');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-indigo-900">
              우주산업 아이디어 경진대회
            </h2>
            <p className="text-lg text-gray-600">
              미래의 우주 과학자들을 위한 특별한 여행이 시작됩니다.
              여러분의 창의적인 아이디어로 우주의 미래를 그려보세요.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg space-y-6">
            <CodeInput />
            
            <button 
              onClick={handleStart}
              className="w-full max-w-md px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
            >
              <RocketIcon className="w-5 h-5" />
              <span className="font-medium">시작하기</span>
            </button>
          </div>
        </div>
      </main>

      {showAlert && (
        <Alert 
          message={alertMessage} 
          onClose={() => setShowAlert(false)} 
        />
      )}
    </div>
  );
};