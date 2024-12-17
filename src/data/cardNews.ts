import { CardNewsSet } from '../types/cardNews';
import { MentorCode } from '../types';

const spaceEnvironmentCards: CardNewsSet = {
  title: "우주 환경의 이해",
  subtitle: "우주 탐사를 위한 핵심 지식",
  cards: [
    {
      id: "env1",
      title: "우주 방사선",
      description: "우주 방사선이 인체에 미치는 영향과 보호 방법",
      image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564",
      points: [
        "태양풍과 우주 방사선의 종류",
        "방사선 차폐 기술",
        "우주인 건강 모니터링"
      ]
    },
    {
      id: "env2",
      title: "극한의 온도",
      description: "우주에서의 온도 변화와 대처 방안",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      points: [
        "태양 직사광선 영향",
        "열 관리 시스템",
        "우주선 단열 기술"
      ]
    }
  ]
};

const spaceSuitCards: CardNewsSet = {
  title: "우주복의 혁신",
  subtitle: "생명을 지키는 첨단 기술",
  cards: [
    {
      id: "suit1",
      title: "별을 바라보며 꿈꾸다",
      description: `"어릴 적, 어머니가 선물로 주신 작은 망원경으로 밤하늘의 별을 보며 '언젠가는 저 별들 사이를 여행할 수 있을까?'라는 꿈을 꾸었어요.<br/><br/>망원경으로 본 반짝이는 별들은 저에게 단순한 빛이 아니라, 끝없이 탐험하고 싶은 새로운 세계로 보였답니다.<br/><br/>이 순간이 제 우주에 대한 꿈의 시작이었어요."`,
      image: "http://aiapi.aixstudio.kr/Image/vonbraun/1.webp",
      points: [
      ]
    },
    {
      id: "suit2",
      title: "작용과 반작용에서 발견한 가능성",
      description: `"중학생 때, 뉴턴의 법칙에서 '작용과 반작용' 개념을 배우고 큰 깨달음을 얻었어요. <br/><br/>물체가 앞으로 나아가기 위해 뒤로 미는 힘이 필요하다는 걸 이해하면서 로켓의 원리를 떠올리게 됐죠. 친구들과 함께 간단한 로켓을 만들어 발사 실험을 시작했어요. <br/><br/>수많은 실패가 있었지만, 그 실패 속에서 배운 것들이 저를 계속 앞으로 나아가게 했답니다."`,
      image: "http://aiapi.aixstudio.kr/Image/vonbraun/2.webp",
      points: [
      ]
    },
    {
      id: "suit3",
      title: "우주 연구의 시작",
      description: `"대학에 들어간 후, 저는 '우주 여행 협회(VfR)'라는 단체에 가입해 본격적으로 로켓 연구를 시작했어요.<br/><br/> 당시 대부분의 사람들은 고체 연료 로켓만 상상했지만, 저는 더 강력한 추진력을 가진 액체 연료 로켓에 주목했답니다. <br/><br/>연구 초기에는 수많은 실험 실패와 자원 부족으로 어려움을 겪었지만, 도전하는 마음을 멈추지 않았어요."`,
      image: "http://aiapi.aixstudio.kr/Image/vonbraun/3.webp",
      points: [
      ]
    },
    {
      id: "suit4",
      title: "첫 번째 성공, 그리고 새로운 고민",
      description: `"1934년, 저는 세계 최초로 액체 연료 로켓 발사에 성공했어요! <br/><br/>로켓이 하늘로 솟아오르는 모습을 보며 이루 말할 수 없는 기쁨을 느꼈죠. <br/><br/>하지만 이 기술이 전쟁 무기로 쓰일 수도 있다는 사실을 알게 되었을 때, 저는 과학의 의미와 목적에 대해 깊은 고민을 하기 시작했답니다. 과학이 인류에게 평화를 가져다주기를 간절히 바랐어요."`,
      image: "http://aiapi.aixstudio.kr/Image/vonbraun/4.webp",
      points: [
      ]
    },
    {
      "id": "suit5",
      "title": "평화를 위한 새로운 시작",
      "description": `"제2차 세계대전이 끝날 무렵, 저는 과학이 더 이상 전쟁에 사용되지 않기를 바랐어요. 그래서 미국으로 이주해 새로운 시작을 준비했죠. 미국의 '페이퍼클립 작전'을 통해 과학자로서 초대받아 NASA에서 일하게 되었고, 평화로운 우주 탐사를 위한 연구를 이어가기로 결심했답니다. 새로운 땅에서 새로운 꿈이 시작된 순간이었어요."`,
      "image": "http://aiapi.aixstudio.kr/Image/vonbraun/5.webp",
      "points": []
    },
    {
      "id": "suit6",
      "title": "NASA와 함께 우주를 향한 도전",
      "description": `"1958년, 미국은 NASA를 설립하며 본격적으로 우주 경쟁에 뛰어들었어요. 저는 NASA의 과학자로 발탁되어 우주 탐사를 위한 비전을 제시했답니다. 단순히 인공위성을 넘어서 사람을 달로 보내고, 나아가 화성까지 가겠다는 목표를 세웠죠. 이 꿈은 모두가 함께 도전해야 이룰 수 있는 목표였어요."`,
      "image": "http://aiapi.aixstudio.kr/Image/vonbraun/6.webp",
      "points": []
    },
    {
      "id": "suit7",
      "title": "새턴 V, 달을 향한 열쇠",
      "description": `"우주 탐사의 핵심은 강력한 로켓이었어요. 저는 새턴 V 로켓을 설계하며 인간이 달에 도달할 수 있는 기술적 요구를 충족시키기 위해 노력했죠. 새턴 V는 역사상 가장 강력한 로켓으로, 인류를 우주로 보내는 데 결정적인 역할을 했답니다."`,
      "image": "http://aiapi.aixstudio.kr/Image/vonbraun/7.webp",
      "points": []
    },
    {
      "id": "suit8",
      "title": "아폴로 11호, 역사적인 도약",
      "description": `"1969년, 아폴로 11호가 새턴 V 로켓에 실려 달을 향해 발사되었어요. 닐 암스트롱과 버즈 올드린이 달에 착륙한 순간, 저는 꿈이 현실로 이루어진 것을 느꼈답니다. '인류에게 있어 위대한 도약'이라는 말이 제 마음에도 깊이 새겨졌어요."`,
      "image": "http://aiapi.aixstudio.kr/Image/vonbraun/8.webp",
      "points": []
    },
    {
      "id": "suit9",
      "title": "달에서의 첫 발걸음",
      "description": `"1969년 7월 20일, 아폴로 11호의 닐 암스트롱이 달에 첫 발을 디뎠어요. 화면 속에서 '인류에게 위대한 도약'이라는 말을 들으며, 어릴 적 꿈꾸던 별이 더 이상 멀리 있지 않다는 걸 깨달았답니다. 그 순간의 감격은 지금도 잊을 수 없어요. 달 착륙은 인류가 우주 탐사의 첫 장을 연 역사적인 순간이었어요."`,
      "image": "http://aiapi.aixstudio.kr/Image/vonbraun/9.webp",
      "points": []
    },
    {
      "id": "suit10",
      "title": "우주, 인류의 새로운 시작",
      "description": `"달 착륙은 끝이 아니라 시작이었어요. 우주는 새로운 자원을 찾고, 인류의 터전을 확장할 기회를 제공하죠. 저는 우주 탐사가 단순한 기술적 도전이 아니라, 인류의 미래를 위한 여정이라고 믿었답니다. 우리의 진정한 목표는 그 너머에 있어요."`,
      "image": "http://aiapi.aixstudio.kr/Image/vonbraun/10.webp",
      "points": []
    },
    {
      "id": "suit11",
      "title": "모두의 노력으로 이루어진 꿈",
      "description": `"아폴로 프로젝트는 수천 명의 과학자, 엔지니어, 기술자들이 힘을 합쳐 만든 성과였어요. 저는 항상 혼자서는 꿈을 이룰 수 없다고 믿었죠. 서로를 믿고 협력할 때, 우리는 별도 정복할 수 있다는 걸 깨달았답니다. 팀워크는 모든 꿈을 이루는 가장 큰 원동력이에요."`,
      "image": "http://aiapi.aixstudio.kr/Image/vonbraun/11.webp",
      "points": []
    },
    {
      "id": "suit12",
      "title": "별을 향한 도전을 멈추지 마세요",
      "description": `"저는 실패를 두려워하지 않고 끝까지 도전하라고 말하고 싶어요. 꿈은 혼자 꾸는 게 아니라, 함께 이루어가는 것이랍니다. 여러분도 별을 향한 도전을 멈추지 않는다면, 더 놀라운 세상을 만들 수 있을 거예요. 우주는 우리 모두가 함께 개척해야 할 미래입니다."`,
      "image": "http://aiapi.aixstudio.kr/Image/vonbraun/12.webp",
      "points": []
    }        
  ]
};

const spaceArchitectureCards: CardNewsSet = {
  title: "우주 건축의 미래",
  subtitle: "새로운 거주 공간의 설계",
  cards: [
    {
      id: "arch1",
      title: "달 기지 설계",
      description: "달에서의 지속 가능한 거주",
      image: "https://images.unsplash.com/photo-1457364559154-aa2644600ebb",
      points: [
        "방사선 차폐",
        "에너지 자립",
        "자원 재활용"
      ]
    },
    {
      id: "arch2",
      title: "화성 거주지",
      description: "화성 환경에 적응하는 건축",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      points: [
        "대기압 차이 극복",
        "자원 활용",
        "확장 가능한 구조"
      ]
    }
  ]
};

const spaceTransportCards: CardNewsSet = {
  title: "우주 운송의 혁신",
  subtitle: "더 빠르고 안전한 우주 여행",
  cards: [
    {
      id: "transport1",
      title: "자율 운항 시스템",
      description: "AI 기반 우주선 제어",
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
      points: [
        "자동 도킹",
        "경로 최적화",
        "비상 대응"
      ]
    },
    {
      id: "transport2",
      title: "차세대 추진 기술",
      description: "효율적인 우주 여행을 위한 기술",
      image: "https://images.unsplash.com/photo-1457364559154-aa2644600ebb",
      points: [
        "이온 엔진",
        "태양풍 추진",
        "핵융합 추진"
      ]
    }
  ]
};

const spaceFoodCards: CardNewsSet = {
  title: "우주 식량의 혁신",
  subtitle: "지속 가능한 우주 생활",
  cards: [
    {
      id: "food1",
      title: "우주 농업",
      description: "우주에서의 식량 생산",
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
      points: [
        "수경 재배",
        "LED 조명 활용",
        "자원 순환"
      ]
    },
    {
      id: "food2",
      title: "식품 보존 기술",
      description: "장기 우주 여행을 위한 식품",
      image: "https://images.unsplash.com/photo-1495195134817-aeb325a55b65",
      points: [
        "동결 건조",
        "방사선 살균",
        "포장 기술"
      ]
    }
  ]
};
const spaceSuitCards1: CardNewsSet = {
  title: "메놑링1",
  subtitle: "메놑링1",
  cards: [
    {
      id: "food1",
      title: "우주 농업",
      description: "우주에서의 식량 생산",
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
      points: [
        "수경 재배",
        "LED 조명 활용",
        "자원 순환"
      ]
    },
    {
      id: "food2",
      title: "식품 보존 기술",
      description: "장기 우주 여행을 위한 식품",
      image: "https://images.unsplash.com/photo-1495195134817-aeb325a55b65",
      points: [
        "동결 건조",
        "방사선 살균",
        "포장 기술"
      ]
    }
  ]

}
const spaceSuitCards3: CardNewsSet = {
  title: "메놑링1",
  subtitle: "메놑링1",
  cards: [
    {
      id: "food1",
      title: "우주 농업",
      description: "우주에서의 식량 생산",
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
      points: [
        "수경 재배",
        "LED 조명 활용",
        "자원 순환"
      ]
    },
    {
      id: "food2",
      title: "식품 보존 기술",
      description: "장기 우주 여행을 위한 식품",
      image: "https://images.unsplash.com/photo-1495195134817-aeb325a55b65",
      points: [
        "동결 건조",
        "방사선 살균",
        "포장 기술"
      ]
    }
  ]

}
const spaceSuitCards2: CardNewsSet = {
  title: "메놑링1",
  subtitle: "메놑링1",
  cards: [
    {
      id: "suit1",
      title: "뉴욕, 엄마 옷가게에서 피어난 상상력",
      description: `지금부터 나의 우주복 개발 스토리를 들려줄게. 어렸을 때 우리 부모님은 뉴욕에서 작은 옷가게를 하셨어. <br/><br/>
<br/><br/>
나는 자투리 천으로 인형 옷을 만들며 노는 걸 정말 좋아했지! 
<br/><br/>
"이 천으로 무슨 멋진 걸 만들 수 있을까?" 
<br/><br/>
항상 그런 상상을 하곤 했어. ✂️👗
`,
      image: "http://aiapi.aixstudio.kr/Image/jennypark/10.webp",
      points: [

      ]
    },
    {
      id: "suit2",
      title: "우주복에 대한 호기심",
      description: `그러던 어느 날, 학교에서 우주 비행사들에 대해 배웠어.<br/><br/>
"우주복은 우주 비행사를 보호해 주는 특별한 옷이야. 방사선을 막아주고, 뜨거운 온도도 견딜 수 있지!" <br/><br/>
선생님이 이렇게 설명하셨지.
근데 나는 그림 속 우주복을 보고 이렇게 생각했어.<br/><br/>
“어? 우주복이 너무 무겁고 불편해 보여! 우주에서도 편하고 멋진 옷을 입을 순 없을까?” 🤔💡

`,
      image: "http://aiapi.aixstudio.kr/Image/jennypark/11.webp",
      points: [

      ]
    },
    {
      id: "suit3",
      title: "우주복 모험의 시작!",
      description: `"나만의 우주복을 만들어 봐야겠어! 우주에서도 쉽게 움직이고 멋있을 수 있는 옷을 말이야!" ✏️🚀<br/><br/>

그게 바로 나의 우주복 모험의 시작이었어! 🪐✨<br/><br/>

(이제부터 내가 우주복을 만들기 위해 어떻게 문제를 해결했는지 알려줄게!)<br/><br/>
🤔💡
`,
      image: "http://aiapi.aixstudio.kr/Image/jennypark/12.webp",
      points: [

      ]
    },
    {
      id: "suit4",
      title: "1. 문제발견",
      description: `학교에서 우주복에 대해 배우던 날, 나는 궁금했어.<br/><br/>

"왜 우주복은 항상 크고 무겁고 불편할까? 🤔 우주에서도 멋지고 움직이기 편한 옷을 입으면 더 좋지 않을까?"<br/><br/>

우주복의 문제는 이랬어:
너무 무거워! 🪨
움직이기 힘들어! 🏃‍♀️
입고 벗기 어려워! 😅
"이 문제를 내가 해결해볼 수 있을까?" 나는 도전을 시작했어! 🚀✨

`,
      image: "http://aiapi.aixstudio.kr/Image/jennypark/13.webp",
      points: [

      ]
    },
    {
      id: "suit5",
      title: "2. 문제탐구",
      description: `우주복에 대해 더 알아보려고 책과 인터넷을 찾아봤어 📚💻.<br/><br/>

우주복은 우주 비행사를 방사선과 온도 변화로부터 보호해야 해서 무겁고 단단하게 만들어졌대.<br/><br/>

"아, 그래서 움직이기 힘든 거구나!"
나는 생각했어. <br/><br/>

"가벼우면서도 튼튼한 재료를 쓰면 되지 않을까?" 💡

`,
      image: "http://aiapi.aixstudio.kr/Image/jennypark/14.webp",
      points: [

      ]
    },
    {
      id: "suit6",
      title: "3. 해결방안 도출",
      description: `문제를 정리하고 목표를 세웠어:<br/><br/>

가벼운 우주복
움직이기 편한 우주복
입고 벗기 쉬운 우주복<br/><br/>

"이런 우주복이면 우주인들이 훨씬 편해지겠지?" <br/><br/>

나는 점점 더 신이 났어! 🪐😊
`,
      image: "http://aiapi.aixstudio.kr/Image/jennypark/15.webp",
      points: [

      ]
    },
    {
      id: "suit7",
      title: "4. 아이디어 기획",
      description: `어떻게 만들지 그림을 그려가며 구상했어 ✏️💭. <br/><br/>

가벼운 재료로 만들자! 
팔과 다리 부분을 부드럽게 해서 움직이기 쉽게 만들자! 💃
찍찍이나 지퍼로 쉽게 입고 벗을 수 있게 하자! ✂️👕 <br/><br/>

"내가 상상한 우주복이 점점 완성되고 있어!"

`,
      image: "http://aiapi.aixstudio.kr/Image/jennypark/16.webp",
      points: [

      ]
    }, 
    {
      id: "suit5",
      title: "5. 시제품 만들기",
      description: `이제 진짜로 만들어 볼 차례였어! 
부모님 가게에서 자투리 천을 찾아 재봉틀로 첫 시제품을 만들었어 ✂️🧵.<br/><br/>

작은 우주복을 만들어 실험해봤지!<br/><br/>

가벼워서 뛰기 쉬웠어! 🏃‍♀️
부드러워서 팔과 다리도 잘 움직였어! 🙌
찍찍이 덕분에 입고 벗기도 간편했어! 👕<br/><br/>

"우와! 내가 만든 우주복이 정말 잘 작동해!" 나는 너무 기뻤어. 😄✨

`,
      image: "http://aiapi.aixstudio.kr/Image/jennypark/17.webp",
      points: [

      ]
    }, 
    {
      id: "suit9",
      title: "우주패션 공학자로의 결심",
      description: `내가 만든 우주복 아이디어는 스타플라이트 테크라는 우주 기업의 관심을 끌었어! 🌟<br/><br/>

우주복 대회에서 상도 받고, 이 우주복이 실제로 만들어져 우주인들에게 큰 도움이 되었지. 😊🚀<br/><br/>

이 경험을 바탕으로 나는 우주와 패션을 결합한 공학자가 되기로 결심했어.<br/><br/>

"멋진 우주복을 통해 더 많은 사람들이 우주를 편하게 탐험할 수 있도록 돕고 싶어!"
`,
      image: "http://aiapi.aixstudio.kr/Image/jennypark/18.webp",
      points: [

      ]
    }, 
  ]

}
const cardNewsMap: Record<MentorCode, CardNewsSet> = {
  '우주환경': spaceEnvironmentCards,
  '우주의복': spaceSuitCards,
  '우주인건축': spaceArchitectureCards,
  '우주인교통': spaceTransportCards,
  '우주식품': spaceFoodCards,
  '우주의복1': spaceSuitCards1,
  '우주의복2': spaceSuitCards2,
  '우주의복3': spaceSuitCards3,
};

export const getCardNews = (code: MentorCode): CardNewsSet | null => {
  return cardNewsMap[code] || null;
};