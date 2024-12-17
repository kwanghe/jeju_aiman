import { Mentor } from '../types';

export const mentors: Mentor[] = [
  {
    name: '로버트 고다드',
    code: '우주환경',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
    title: '현대 로켓공학의 아버지',
    description: '액체 연료 로켓의 선구자이자 현대 우주 과학의 기초를 다진 과학자입니다.',
    expertise: ['로켓 추진 시스템', '우주 환경 연구', '대기권 연구'],
    achievements: ['최초의 액체 연료 로켓 발사 성공', '다단식 로켓 특허 획득'],
    mentoringMission: [
      {
        title: '미션1. 베르너 폰 브라운과 만나보기',
        description: '베르너 폰 브라운과의 첫 만남',
        path: '/mentoring/우주의복'
      },
      {
        title: '미션2. 우주복 지식을 공부하기',
        description: '베르너 폰 브라운에게 듣는 우주복 미니특강',
        path: '/mentoring/우주의복1'
      },
    ],
    feedbackMission: [
      {
        title: '미션1. ㅇㅇㄴ',
        description: '제니박과대화',
        path: '/mentoring/우주의복2'       
      },
      {
        title: '미션2. 시재품 만들어보기',
        description: '제니박과대화',
        path: '/mentoring/우주의복3'
      },
    ],
  },
  {
    name: '베르너 폰 브라운',
    code: '우주의복',
    image: 'http://aiapi.aixstudio.kr/Image/vonbraun/0.webp',
    title: 'NASA 우주 프로그램의 선구자',
    description: 'NASA의 아폴로 프로그램을 이끈 핵심 과학자이자 우주 탐사의 선구자입니다.',
    expertise: ['우주선 설계', '우주복 개발', '로켓 시스템'],
    achievements: ['아폴로 프로그램 성공', 'Saturn V 로켓 개발'],
    mentoringMission: [
      {
        title: '미션1. 베르너 폰 브라운과 만나보기',
        description: '베르너 폰 브라운과의 첫 만남',
        path: '/mentoring/우주의복'
      },
      {
        title: '미션2. 우주복 지식을 공부하기',
        description: '베르너 폰 브라운에게 듣는 우주복 미니특강',
        path: '/mentoring/우주의복1'
      },
    ],
    feedbackMission: [
      {
        title: '미션3. Jenny의 제품개발 멘토링 ',
        description: '제니의 우주복 개발 스토리',
        path: '/mentoring/우주의복2'       
      },
      {
        title: '미션4. Jenny와 우주복 디자인',
        description: '내가 생각하는 우주복 그리기',
        path: '/mentoring/우주의복3'
      },
    ],
  },
  {
    name: '세르게이 코를로프',
    code: '우주인건축',
    image: 'https://images.unsplash.com/photo-1457364559154-aa2644600ebb',
    title: '소련 우주 프로그램의 수석 설계자',
    description: '최초의 인공위성과 유인 우주선을 설계한 우주 건축의 대가입니다.',
    expertise: ['우주 정거장 설계', '우주인 거주 시설', '우주선 구조'],
    achievements: ['스푸트니크 1호 발사 성공', '보스토크 프로그램 성공'],
    mentoringMission: [
      {
        title: '미션1. 베르너 폰 브라운과 만나보기',
        description: '베르너 폰 브라운과의 첫 만남',
        path: '/mentoring/우주의복'
      },
      {
        title: '미션2. 우주복 지식을 공부하기',
        description: '베르너 폰 브라운에게 듣는 우주복 미니특강',
        path: '/mentoring/우주의복1'
      },
    ],
    feedbackMission: [
      {
        title: '미션1. ㅇㅇ',
        description: '제니박과대화',
        path: '/mentoring/우주의복3'       
      },
      {
        title: '미션2. 시재품 만들어보기',
        description: '제니박과대화',
        path: '/mentoring/우주의복4'
      },
    ],
  },
  {
    name: '마가렛 해밀턴',
    code: '우주인교통',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
    title: 'NASA 소프트웨어 공학 선구자',
    description: '아폴로 프로그램의 온보드 비행 소프트웨어를 개발한 소프트웨어 공학의 선구자입니다.',
    expertise: ['우주선 내비게이션', '비행 소프트웨어', '실시간 시스템'],
    achievements: ['아폴로 유도 컴퓨터 개발', '소프트웨어 공학 분야 개척'],
    mentoringMission: [
      {
        title: '미션1. 베르너 폰 브라운과 만나보기',
        description: '베르너 폰 브라운과의 첫 만남',
        path: '/mentoring/우주의복'
      },
      {
        title: '미션2. 우주복 지식을 공부하기',
        description: '베르너 폰 브라운에게 듣는 우주복 미니특강',
        path: '/mentoring/우주의복1'
      },
    ],
    feedbackMission: [
      {
        title: '미션1. ㅇㅇ',
        description: '제니박과대화',
        path: '/mentoring/우주의복3'       
      },
      {
        title: '미션2. 시재품 만들어보기',
        description: '제니박과대화',
        path: '/mentoring/우주의복4'
      },
    ],
  },
  {
    name: '일론 머스크',
    code: '우주식품',
    image: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2',
    title: 'SpaceX 설립자',
    description: '민간 우주 탐사의 새로운 시대를 연 혁신가이자 기업가입니다.',
    expertise: ['우주 식품 시스템', '화성 거주 계획', '우주 운송'],
    achievements: ['재사용 가능한 로켓 개발', '민간 우주정거장 보급 성공'],
    mentoringMission: [
      {
        title: '미션1. 베르너 폰 브라운과 만나보기',
        description: '베르너 폰 브라운과의 첫 만남',
        path: '/mentoring/우주의복'
      },
      {
        title: '미션2. 우주복 지식을 공부하기',
        description: '베르너 폰 브라운에게 듣는 우주복 미니특강',
        path: '/mentoring/우주의복1'
      },
    ],
    feedbackMission: [
      {
        title: '미션1. ㅇㅇ',
        description: '제니박과대화',
        path: '/mentoring/우주의복3'       
      },
      {
        title: '미션2. 시재품 만들어보기',
        description: '제니박과대화',
        path: '/mentoring/우주의복4'
      },
    ],
  }
];