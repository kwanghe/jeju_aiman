import { MentorCode } from '../types';

export interface ChatOption {
  text: string;
  nextId: string;
}

export interface ChatMessageOption {
  text: string;
  nextId: string;
}

export interface ChatMessage {
  id: string;
  message: string;
  image?: string;
  options?: ChatMessageOption[];
  allowInput?: boolean;
  type?: 'cardNews'| 'game'| 'name'| 'drawing';
  cardNewsCode?: MentorCode,
  gameCode?: string
  mentorImage?: string;  // 추가
  mentorName?: string;   // 추가
}

export interface ChatHistory {
  messageId: string;
  selectedOption: string;
  timestamp: number;
  isUserInput?: boolean;
}