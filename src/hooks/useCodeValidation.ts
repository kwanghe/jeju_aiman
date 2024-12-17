import { mentors } from '../data/mentors';

export const useCodeValidation = () => {
  const validateCode = (code: string): boolean => {
    return mentors.some(mentor => mentor.code === code);
  };

  const getErrorMessage = (code: string): string => {
    if (!code.trim()) {
      return '참가 코드를 입력해주세요.';
    }
    if (!validateCode(code)) {
      return '올바르지 않은 참가 코드입니다. 다시 확인해주세요.';
    }
    return '';
  };

  return {
    validateCode,
    getErrorMessage,
  };
};