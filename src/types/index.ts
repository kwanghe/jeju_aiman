export type UserLevel = 'elementary' | 'middle';

export interface UserSettings {
  code: string;
  level: UserLevel;
}

export interface Mentor {
  name: string;
  code: MentorCode;
  image: string;
  title: string;
  description: string;
  expertise: string[];
  achievements: string[];
  mentoringMission: {
    title: string;
    description: string;
    path: string;
  }[];
  feedbackMission: {
    title: string;
    description: string;
    path: string;
  }[];
}

export type MentorCode = '우주환경' | '우주의복' | '우주인건축' | '우주인교통' | '우주식품' | '우주의복1'| '우주의복2'| '우주의복3';