import { useState, useEffect } from 'react';
import { ChatHistory } from '../types/chat';

export const useChat = (mentorCode: string) => {
  const storageKey = `chat_history_${mentorCode}`;

  // localStorage에서 초기 히스토리 로드
  const loadInitialHistory = () => {
    const savedHistory = localStorage.getItem(storageKey);
    return savedHistory ? JSON.parse(savedHistory) : [];
  };

  const [history, setHistory] = useState<ChatHistory[]>(loadInitialHistory());
  const [currentMessageId, setCurrentMessageId] = useState<string>('1');

  // 히스토리 변경 시 localStorage에 저장
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(history));
  }, [history, storageKey]);

  const addToHistory = (
    messageId: string, 
    selectedOption: string, 
    isUserInput: boolean = false
  ) => {
    const newHistoryItem: ChatHistory = {
      messageId,
      selectedOption,
      timestamp: Date.now(),
      isUserInput
    };

    setHistory(prevHistory => [...prevHistory, newHistoryItem]);
  };

  const resetChat = () => {
    setHistory([]);
    setCurrentMessageId('1');
    localStorage.removeItem(storageKey);
  };

  return {
    history,
    currentMessageId,
    setCurrentMessageId,
    addToHistory,
    resetChat
  };
};