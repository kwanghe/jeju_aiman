import { useLocalStorage } from './useLocalStorage';
import { mentors } from '../data/mentors';
import type { UserSettings} from '../types';

export const useMentor = () => {
  const [settings] = useLocalStorage<UserSettings>('userSettings', {
    code: '',
    level: 'elementary'
  });

  const currentMentor = mentors.find(mentor => mentor.code === settings.code);

  return currentMentor || null;
};