import { ChatMessage } from '../types/chat';
import { MentorCode } from '../types';

const spaceEnvironmentDialog: ChatMessage[] = [
  {
    id: `1`,
    message: `안녕하세요! 저는 로버트 고다드입니다. 우주 환경에 대해 깊이 연구해온 과학자죠. 우주 환경에 대해 어떤 것이 궁금하신가요?`,
    options: [
      {
        text: `우주 방사선은 어떤 영향을 미치나요?`,
        nextId: `2a`
      },
      {
        text: `우주에서의 온도 변화는 어떤가요?`,
        nextId: `2b`
      },
      {
        text: `무중력 환경은 인체에 어떤 영향을 주나요?`,
        nextId: `2c`
      }
    ]
  },
  // ... (previous spaceEnvironmentDialog messages remain the same)
];

const spaceSuitDialog: ChatMessage[] = [
  {
    id: `1`,
    message: `안녕하세요? 난 아폴로 우주선을 설계한 폰 브라운이에요!`,
    mentorImage:"http://aiapi.aixstudio.kr/Image/vonbraun/0.webp",
    mentorName:"베르너 폰 브라운",
    options: [
      {
        text: `안녕하세요! 반갑습니다.`,
        nextId: `2a`
      },
      {
        text: `안녕하세요!`,
        nextId: `2a`
      }
    ]
  },
  {
    id: `2a`,
    message: `반가워요!. 우주로 수학여행을 가서 입을 단체복을 기획한다고 들었어요.흥미로운 주제네요!.`,
    mentorImage:"http://aiapi.aixstudio.kr/Image/vonbraun/0.webp",
    mentorName:"베르너 폰 브라운",
    options: [
      {
        text: `네. 감사합니다. 많은 도움이 필요해요! `,
        nextId: `2b`
      }
    ]
  },
  {
    id: `2b`,
    message: `좋아요! 그전에 친구 이름이 뭔가요?`,
    mentorImage:"http://aiapi.aixstudio.kr/Image/vonbraun/0.webp",
    mentorName:"베르너 폰 브라운",
    type: 'name',
    options: [
      {
        text:`${localStorage.getItem('userName') || '이름'}`,
        nextId:`3`,
      }
    ]
  },
  {
    id: `3`,
    message: `좋아요! 내 소개를 하죠.난 인류 최초로 달 착륙을 시킨 아폴로 프로젝트를 이끈 우주과학자에요! 자세한 내용은 아래 자료를 봐주세요.`,
    mentorImage:"http://aiapi.aixstudio.kr/Image/vonbraun/0.webp",
    mentorName:"베르너 폰 브라운",
    type: 'cardNews',
    image: `http://aiapi.aixstudio.kr/Image/vonbraun/0.webp`,
    cardNewsCode: '우주의복',
    options: [
      {
        text: `산소 공급 시스템에 대해 자세히 알고 싶어요`,
        nextId: `3c`
      },
      {
        text: `체온 조절은 어떻게 하나요?`,
        nextId: `3c`
      }
    ]
  },
  {
    id: `3c`,
    message: `미래의 우주복은 더욱 가볍고 유연하면서도 더 많은 기능을 갖추게 될 거예요. 특히 화성 탐사를 위한 새로운 우주복 개발이 진행 중이죠.`,
    mentorImage:"http://aiapi.aixstudio.kr/Image/vonbraun/0.webp",
    mentorName:"베르너 폰 브라운",
    options: [
      {
        text: `화성 우주복의 특별한 점은 무엇인가요?`,
        nextId: `3e`
      },
      {
        text: `스마트 우주복 기술에 대해 알고 싶어요`,
        nextId: `3f`
      }
    ]
  },
  {
    id: `3e`,
    message: `화성 우주복은 더 강한 방사선 차단, 먼지 차단, 더 긴 사용 시간을 위한 설계가 필요해요. 또한 자가 수리 기능도 포함될 예정이죠. 어떤 부분이 가장 흥미로우신가요?`,
    mentorImage:"http://aiapi.aixstudio.kr/Image/vonbraun/0.webp",
    mentorName:"베르너 폰 브라운",
    options: [ ],
    allowInput: true
  },
  {
    id: `3f`,
    message: `스마트 우주복은 생체신호 모니터링, 증강현실 디스플레이, 자가 진단 시스템 등을 갖추게 될 거예요. 이런 기술들이 우주 탐사를 어떻게 변화시킬지 궁금하신가요?`,
    mentorImage:"http://aiapi.aixstudio.kr/Image/vonbraun/0.webp",
    mentorName:"베르너 폰 브라운",
    options: [ ],
    allowInput: true
  }
];

const spaceSuitDialog1: ChatMessage[] = [
  {
    id: `1`,
    message: ` `,
    mentorImage:"http://aiapi.aixstudio.kr/Image/vonbraun/0.webp",
    mentorName:"베르너 폰 브라운",
    options: [
      {
        text: `${localStorage.getItem('userName') || '이름'}님 안녕하세요, 베르너 선생님! 저는 우주 수학여행을 위한 우주복 디자인 아이디어 대회에 참가하고 있어요. 우주복을 만들려면 어떤 걸 알아야 할까요?`,
        nextId: `2a`
      }
    ]
  },
  {
    id: `2a`,
    message: `안녕하세요, ${localStorage.getItem('userName') || '이름'}! 먼저 우주 환경을 이해해야 해요. 우주는 진공 상태라 공기가 없고 기압도 매우 낮아요. 그래서 우주복은 몸을 보호하고, 산소를 공급하며, 온도를 조절하는 역할을 하죠.`,
    mentorImage:"http://aiapi.aixstudio.kr/Image/vonbraun/0.webp",
    mentorName:"베르너 폰 브라운",
    options: [
    {
      text:`온도 조절이라니 중요한 기능이네요! 우주에서는 온도가 어떤가요?`,
      nextId:`3a`
    }
    ]
  },
  {
    id: `3a`,
    message: `우주는 태양빛이 닿으면 120도 이상, 그늘에서는 -150도까지 내려가요. 그래서 우주복은 몸을 적정 온도로 유지하기 위해 온도 조절 시스템이 필수랍니다.`,
    mentorImage:"http://aiapi.aixstudio.kr/Image/vonbraun/0.webp",
    mentorName:"베르너 폰 브라운",
    options: [
    {
      text:`산소는 어떻게 공급하나요?`,
      nextId:`4a`
    }
    ]
  },
  {
    id: `4a`,
    message: `우주복에는 산소를 저장하는 탱크가 있어요. 탱크에서 산소를 공급하고, 이산화탄소를 제거하는 시스템이 있어서 우주에서도 숨을 쉴 수 있게 해줍니다.`,
    mentorImage:"http://aiapi.aixstudio.kr/Image/vonbraun/0.webp",
    mentorName:"베르너 폰 브라운",
    options: [
    {
      text:`그럼 우주복에도 통신 기능이 있나요?`,
      nextId:`5a`
    }
    ]
  },
  {
    id: `5a`,
    message: `맞아요! 우주에서는 팀과의 소통이 중요하죠. 우주복에는 내장된 마이크와 스피커가 있어서 다른 우주인이나 우주선과 통신할 수 있어요.`,
    mentorImage:"http://aiapi.aixstudio.kr/Image/vonbraun/0.webp",
    mentorName:"베르너 폰 브라운",
    options: [
    {
      text:`우주복은 무거워 보이는데 움직이기도 힘들지 않을까요?`,
      nextId:`6a`
    }
    ]
  },
  {
    id: `6a`,
    message: `그래서 우주복은 관절 부분에 특별한 설계를 해요. 움직임을 돕는 소형 로봇 기술을 활용하기도 하고요. 무게는 지구에서는 무겁지만 우주에서는 중력이 거의 없어서 문제되지 않아요.`,
    mentorImage:"http://aiapi.aixstudio.kr/Image/vonbraun/0.webp",
    mentorName:"베르너 폰 브라운",
    options: [
    {
      text:`우주복에도 에너지가 필요하겠죠?`,
      nextId:`7a`
    }
    ]
  },
  {
    id: `7a`,
    message: `맞아요. 우주복에는 배터리가 내장되어 산소 공급, 통신, 온도 조절 같은 시스템을 작동시켜요. 이 배터리는 작고 효율적으로 설계되어 있답니다.`,
    mentorImage:"http://aiapi.aixstudio.kr/Image/vonbraun/0.webp",
    mentorName:"베르너 폰 브라운",
    options: [
    {
      text:`우주복 설계가 여러가지를 고려해야 하는군요. 많은 걸 배웠어요!`,
      nextId:`8a`
    }
    ]
  },
  {
    id: `8a`,
    type: 'game',
    gameCode: 'SpaceSuitGame',
    message: `잘했어요, 이름! 정리하면 ‘온도조절’, ‘산소공급’, ‘통신기능’, ‘움직임’, ‘배터리’ 등의 우주환경 을 고려해서 우주복을 만들어야 되요! 이름이 조금 더 이해를 돕기 위해서 간단한 미니게임을 준비했어요! 한번 도전해 보세요!`,
    mentorImage:"http://aiapi.aixstudio.kr/Image/vonbraun/0.webp",
    mentorName:"베르너 폰 브라운",
    options: [

    ]
  },
  // ... 추가적인 메시지 ...
];
const spaceSuitDialog2: ChatMessage[] = [
  {
    id: `1`,
    message: `이제 제품기획을 본격적으로 진행하려는군요.내가 꼭 필요한 선생님을 소개해줄게요.`,
    mentorImage:"http://aiapi.aixstudio.kr/Image/vonbraun/0.webp",
    mentorName:"베르너 폰 브라운",
    options: [
      {
        text: `네! 도와주세요. `,
        nextId: `2a`
      }
    ]
  },
  {
    id: `2a`,
    message: `우주복 디자이너인 제니박이에요. 도움이 될꺼에요. 만나봐요!`,
    mentorImage:"http://aiapi.aixstudio.kr/Image/vonbraun/0.webp",
    mentorName:"베르너 폰 브라운",
    image:"http://aiapi.aixstudio.kr/Image/jennypark/0.webp",
    options: [
      {
        text: `jenny park 만나기`,
        nextId: `3`
      }
    ]
  },
  {
    id: `3`,
    message: `안녕! 만나서 반가워. 우주복 디자이너 제니박이야.`,
    mentorImage:"http://aiapi.aixstudio.kr/Image/jennypark/0.webp",
    mentorName:"jenny park",
    options: [
      {
        text: `안녕하세요.${localStorage.getItem('userName') || '이름'} 라고 해요.`,
        nextId: `4`
      }
    ]
  },
  {
    id: `4`,
    message: `나는 편하게 제니라고 불러줘. 수학여행에서 쓸 우주복을 기획중이라고? 멋지다! 내가 뭘 도와줬음 좋겠어?`,
    mentorImage:"http://aiapi.aixstudio.kr/Image/jennypark/0.webp",
    mentorName:"jenny park",
    options: [
      {
        text: `네. 우주복을 기획하라고 하시는데… ㅠㅜ,아직 감이 안 와서요. 좀 도와주시겠어요.`,
        nextId: `5`
      }
    ]
  },
  {
    id: `5`,
    message: `좋아^^ 도와줄게.  나야 영광이지!,우선, 내 이야기를 들려줄게.나의 우주복 개발 스토리야^^`,
    mentorImage:"http://aiapi.aixstudio.kr/Image/jennypark/0.webp",
    mentorName:"jenny park",
    type: 'cardNews',
    image: `http://aiapi.aixstudio.kr/Image/jennypark/3.webp`,
    cardNewsCode: '우주의복2',
    options: [
      {
        text: `네.`,
        nextId: `6`
      }
    ]
  },
  {
    id: `6`,
    message: `오! 오랜만에 추억돋네.이게 나의 첫 개발 프로젝트야.이 계기로 지금까지 오게 되었어.`,
    mentorImage:"http://aiapi.aixstudio.kr/Image/jennypark/0.webp",
    mentorName:"jenny park",
    options: [
      {
        text: `선생님. 짱이에요!저도 멋진 제품을 만들고 싶어요.`,
        nextId: `7`
      }
    ]
  },
  {
    id: `7`,
    message: `좋아! 나도 힘껏 도와줄게.음… 내가 제품 기획할때 하는 노하우가 있어. 한번 알려줄까?`,
    mentorImage:"http://aiapi.aixstudio.kr/Image/jennypark/0.webp",
    mentorName:"jenny park",
    options: [
      {
        text: `네! 알려주세요.저도 잘 만들어 볼게요.`,
        nextId: `8`
      }
    ]
  },
  {
    id: `8`,
    type: 'game',
    gameCode: 'StorytellingProcess',
    message: `그래. 예시로 설명해 줄게!한번 같이 해보자!`,
    mentorImage:"http://aiapi.aixstudio.kr/Image/jennypark/0.webp",
    mentorName:"jenny park",
    image:"",
    options: [
    ]
  },
]
const spaceSuitDialog3: ChatMessage[] = [
  {
    id: `1`,
    message: ``,
    mentorImage:"http://aiapi.aixstudio.kr/Image/jennypark/0.webp",
    mentorName:"jenny park",
    options: [
      {
        text: `제니님! 이제 제가 생각한 우주복을 표현해 보려고 해요.`,
        nextId: `2a`
      }
    ]
  },
  {
    id: `2a`,
    message: `좋아 AI그림 도구를 활용하자!나도 기획할 때 도움 받는 AI도구인데, 그림으로 표현을 도와 줄거야! 너가 생각하는 것을 펜으로 그려봐. 똑같지는 않지만 대략적으로 표현해 줄거야. 표현해보면서 아이디어를 얻기도 해.`,
    mentorImage:"http://aiapi.aixstudio.kr/Image/jennypark/0.webp",
    mentorName:"jenny park",
    options: [
      {
        text: `네! 해 볼게요~`,
        nextId: `3`
      }
    ]
  },
  {
    id: `3`,
    message: `그럼 한번 그려봐!`,
    type: 'drawing',
    mentorImage:"http://aiapi.aixstudio.kr/Image/jennypark/0.webp",
    mentorName:"jenny park",
    options: [
    ]
  },
  {
    id: `4`,
    message: `그럼 한번 그려봐!`,
    type: 'drawing',
    mentorImage:"http://aiapi.aixstudio.kr/Image/jennypark/0.webp",
    mentorName:"jenny park",
    options: [
    ]
  },
 
]
const spaceArchitectureDialog: ChatMessage[] = [
  {
    id: `1`,
    message: `안녕하세요! 저는 세르게이 코를로프입니다. 우주 건축의 선구자로서, 우주에서의 거주 시설 설계에 대해 이야기를 나누고 싶습니다. 어떤 것이 궁금하신가요?`,
    options: [
      {
        text: `우주 정거장은 어떻게 설계되나요?`,
        nextId: `2a`
      },
      {
        text: `달 기지는 어떤 모습일까요?`,
        nextId: `2b`
      },
      {
        text: `화성 거주지는 어떻게 만들어질까요?`,
        nextId: `2c`
      }
    ]
  },
  // ... (similar detailed dialog structure for space architecture)
];

const spaceTransportDialog: ChatMessage[] = [
  {
    id: `1`,
    message: `안녕하세요! 저는 마가렛 해밀턴입니다. 우주 운송 시스템의 소프트웨어 개발을 이끌었죠. 우주 운송에 대해 어떤 것이 궁금하신가요?`,
    options: [
      {
        text: `우주선의 내비게이션은 어떻게 작동하나요?`,
        nextId: `2a`
      },
      {
        text: `우주 정거장 도킹은 어떻게 하나요?`,
        nextId: `2b`
      },
      {
        text: `우주 비행의 자동화 시스템은 어떤가요?`,
        nextId: `2c`
      }
    ]
  },
  // ... (similar detailed dialog structure for space transport)
];

const spaceFoodDialog: ChatMessage[] = [
  {
    id: `1`,
    message: `안녕하세요! 저는 일론 머스크입니다. 화성 이주를 위한 우주 식량 시스템 개발에 큰 관심을 가지고 있죠. 우주 식품에 대해 어떤 것이 궁금하신가요?`,
    options: [
      {
        text: `우주에서는 어떤 음식을 먹나요?`,
        nextId: `2a`
      },
      {
        text: `우주 식품은 어떻게 보관하나요?`,
        nextId: `2b`
      },
      {
        text: `화성에서의 식량 생산은 어떻게 할까요?`,
        nextId: `2c`
      }
    ]
  },
  // ... (similar detailed dialog structure for space food)
];

const dialogMap: Record<MentorCode, ChatMessage[]> = {
  '우주환경': spaceEnvironmentDialog,
  '우주의복': spaceSuitDialog,
  '우주의복1': spaceSuitDialog1,
  '우주의복2': spaceSuitDialog2,
  '우주의복3': spaceSuitDialog3,
  '우주인건축': spaceArchitectureDialog,
  '우주인교통': spaceTransportDialog,
  '우주식품': spaceFoodDialog,
};

export const getChatDialog = (code: MentorCode): ChatMessage[] => {
  return dialogMap[code] || [];
};