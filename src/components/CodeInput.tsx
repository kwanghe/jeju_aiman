import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { UserLevel, UserSettings } from '../types';

export const CodeInput = () => {
  const [settings, setSettings] = useLocalStorage<UserSettings>('userSettings', {
    code: localStorage.getItem('participationCode') || '',
    level: (localStorage.getItem('userLevel') as UserLevel) || 'elementary',
  });

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCode = e.target.value;
    localStorage.setItem('participationCode', newCode);
    setSettings({ ...settings, code: newCode });
  };

  const handleLevelChange = (level: UserLevel) => {
    localStorage.setItem('userLevel', level);
    setSettings({ ...settings, level });
  };

  React.useEffect(() => {
    localStorage.setItem('participationCode', settings.code);
    localStorage.setItem('userLevel', settings.level);
  }, [settings]);

  return (
    <div className="space-y-6 w-full max-w-md mx-auto flex flex-col items-center">
      <div className="space-y-2 w-full">
        <label htmlFor="code" className="block text-sm font-medium text-gray-700">
          참가 코드
        </label>
        <input
          type="text"
          id="code"
          value={settings.code}
          onChange={handleCodeChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
          placeholder="코드를 입력하세요"
        />
      </div>

      <div className="space-y-2 w-full">
        <label className="block text-sm font-medium text-gray-700">학교 과정</label>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => handleLevelChange('elementary')}
            className={`px-4 py-2 rounded-md ${
              settings.level === 'elementary'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            초등학교
          </button>
          <button
            onClick={() => handleLevelChange('middle')}
            className={`px-4 py-2 rounded-md ${
              settings.level === 'middle'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            중학교
          </button>
        </div>
      </div>
    </div>
  );
};
