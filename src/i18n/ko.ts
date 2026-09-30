/**
 * Korean copy. Typed against the English dictionary, so a missing or
 * misshaped key is a type error. Prose uses 해요체.
 */
import type { Content } from "./en";

export const ko: Content = {
  layout: {
    description: "김지명",
    languageLabel: "언어",
    logoButtonLabel: "이 로고에 대해",
    close: "닫기",
    logoTitle: "이 로고에 대해",
    logoParagraphs: [
      "이 로고는 초기 기독교의 상징인 <strong>익투스</strong>(물고기 상징)에 제 이니셜 <strong>“DK”</strong>를 엮어 넣은 거예요.",
      "그리스도인이라는 정체성이 저라는 사람의 가장 근본적인 부분이라는 걸 담고 있어요.",
    ],
    verse:
      "나는 그리스도와 함께 십자가에 못박혔습니다. 이제 살고 있는 것은 내가 아닙니다. 그리스도께서 내 안에서 살고 계십니다. 내가 지금 육신 안에서 살고 있는 삶은, 나를 사랑하셔서 나를 위하여 자기 몸을 내어주신 하나님의 아들을 믿는 믿음 안에서 살아가는 것입니다.",
    verseRef: "갈라디아서 2:20 (새번역)",
    gospelLink: "복음이란 무엇인가요? →",
  },

  home: {
    title: "김지명",
    skipAnimation: "애니메이션 건너뛰기",
    footer: "© {year} 김지명. All rights reserved. {astro}로 만들었어요.",
  },

  about: {
    title: "소개 | 김지명",
    avatarAlt: "김지명 사진",
    name: "김지명",
    subtitle: "뉴욕의 소프트웨어 엔지니어 🗽",
    bio: [
      `안녕하세요! 저는 김지명이에요. <strong class="highlight valon">Valon</strong>에서 소프트웨어 엔지니어로 일하고 있고, <strong class="highlight cornell">코넬 대학교</strong>에서 컴퓨터 과학 석사 학위를 받았어요. 이전에는 <strong class="highlight ey">EY</strong>에서 컨설턴트로 일했고, <strong class="highlight emprise">EmPRISE Lab</strong>에서 <a href="https://scholar.google.com/citations?user=NwqMTYkAAAAJ" target="_blank" rel="noopener noreferrer">보조 로봇으로 장애가 있는 분들의 삶을 더 낫게 만드는 연구</a>를 했어요.`,
      `여가 시간에는 보드게임, 재즈 피아노 연습, 그리고 뉴욕 곳곳의 카페 탐방을 좋아해요. <a href="https://firstnyc.org" target="_blank" rel="noopener noreferrer"><strong class="highlight first">First Baptist Church</strong></a> 교회 공동체에서도 활발하게 섬기고 있어요. 기회가 될 때마다 미국 곳곳을 여행하며 친구들을 만나려고 해요.`,
    ],
    timelineHeading: "걸어온 길",
    timelineEnd: "과거",
    timeline: [
      { date: "2025년 10월", organization: "Valon", highlight: "valon", description: "소프트웨어 엔지니어 — ValonOS" },
      { date: "2023년 8월", organization: "EY", highlight: "ey", description: "컨설턴트 — 금융 서비스" },
      { date: "2022년 8월", organization: "코넬 대학교", highlight: "cornell", description: "컴퓨터 과학 석사" },
      { date: "2021년 8월", organization: "EmPRISE Lab", highlight: "emprise", description: "연구 조교 — 보조 로봇공학" },
      { date: "2021년 6월", organization: "Amazon", highlight: "amazon", description: "SDE 인턴 — Last Mile Planning 시뮬레이션" },
      { date: "2021년 1월", organization: "Amazon Robotics", highlight: "amazon", description: "SWE 코업 — 임베디드 시스템" },
      { date: "2020년 5월", organization: "Wasabi Technologies", highlight: "wasabi", description: "SWE 인턴 — 핫 클라우드 스토리지" },
      { date: "2018년 8월", organization: "코넬 대학교", highlight: "cornell", description: "컴퓨터 과학 학사 & 전기·컴퓨터 공학 학사" },
    ],
    skillsHeading: "스킬",
    skills: [
      { heading: "언어 & 프레임워크", items: "Python • React • Java • Swift" },
      { heading: "책", items: "The Secret Key to Heaven • 멋진 신세계 • 스크루테이프의 편지" },
    ],
    backLink: "← 터미널로 돌아가기",
  },

  gospel: {
    title: "복음이란 무엇인가요? | 김지명",
    heading: "복음이란 무엇인가요?",
    subtitle: "기독교의 중심에 있는 기쁜 소식",
    intro:
      "<strong>“복음”</strong>이라는 말은 <em>기쁜 소식</em>이라는 뜻이에요. 그렇다면 이 소식은 무엇이고, 왜 중요할까요?",
    // Verses are 새번역
    sections: [
      {
        heading: "문제",
        body: "모든 사람은 죄를 지었고, 하나님의 완전한 기준에 미치지 못해요. 죄는 우리를 하나님과 멀어지게 하고, 육체적인 죽음뿐 아니라 영적이고 영원한 죽음으로 이끌어요.",
        quote: "“모든 사람이 죄를 범하였습니다. 그래서 사람은 하나님의 영광에 못 미치는 처지에 놓여 있습니다.”",
        cite: "— 로마서 3:23",
      },
      {
        heading: "해답",
        body: "하나님은 크신 사랑으로 그분의 아들 예수 그리스도를 이 세상에 보내셨어요. 예수님은 죄 없는 완전한 삶을 사셨고, 우리 죄의 값을 치르기 위해 십자가에서 죽으셨으며, 사흘 만에 다시 살아나셔서 죄와 죽음과 모든 원수를 이기셨어요.",
        quote:
          "“하나님께서 세상을 이처럼 사랑하셔서 외아들을 주셨으니, 이는 그를 믿는 사람마다 멸망하지 않고 영생을 얻게 하려는 것이다.”",
        cite: "— 요한복음 3:16",
      },
      {
        heading: "약속",
        body: "예수님을 믿고 그분이 이루신 일을 신뢰하는 사람에게는 이제 <strong>정죄를 받지 않아요</strong>. 우리는 용서받았고, 하나님의 자녀로 입양되었으며, 그분 앞에서 누릴 영원한 기쁨을 약속받았어요.",
        quote: "“그러므로 그리스도 예수 안에 있는 사람들은 정죄를 받지 않습니다.”",
        cite: "— 로마서 8:1",
      },
      {
        heading: "초대",
        body: "이 선물은 믿음으로 받는 모든 사람에게 값없이 주어져요. 스스로 노력해서 얻을 수는 없고, 겸손하고 회개하는 마음으로 받을 수 있을 뿐이에요.",
        quote:
          "“당신이 만일 예수는 주님이라고 입으로 고백하고, 하나님께서 그를 죽은 사람들 가운데서 살리신 것을 마음으로 믿으면 구원을 얻을 것입니다.”",
        cite: "— 로마서 10:9",
      },
    ],
    learnMoreHeading: "더 알아보기",
    emailSubject: "기독교에 대해 더 알고 싶어요",
    emailLink: "✉️ 기독교에 대해 이메일로 물어보기",
    articlesLink: "📖 Desiring God의 복음 관련 글",
    backLink: "← 홈으로 돌아가기",
  },

  piano: {
    title: "피아노 | 김지명",
    heading: "피아노",
    subtitle: "연습 로드맵 & 악보",
    monthRange: (start: number, end: number, plus: string) => `${start}–${end}${plus}개월 차`,

    routineHeading: "하루 한 시간",
    routineLead: "일주일에 5시간. 매 세션은 처음부터 끝까지 쳐보기보다 목표가 분명한 블록 연습을 우선해요.",
    minutes: (n: number) => `${n}분`,
    routine: [
      {
        focus: "테크닉 워밍업",
        objective: "체르니 연습곡 하나 또는 scale 변형. 몸의 정렬, 이완된 손목, 미세한 속도 조절.",
      },
      {
        focus: "집중 연습 구간",
        objective: "현재 마일스톤 곡의 어려운 마디. 메트로놈에 맞춰 천천히, 한 손씩 반복해요.",
      },
      {
        focus: "레퍼토리 유지",
        objective: "외운 부분을 복습하면서 암보를 굳히고 지구력을 유지해요.",
      },
      {
        focus: "음악적 쿨다운",
        objective: "Chord voicing 실험, 처음 보는 곡 sight-reading, 아니면 그냥 자유롭게 치기.",
      },
    ],

    milestonesHeading: "레퍼토리 마일스톤",
    sheetJump: "악보 보기 ↓",
    milestones: [
      {
        composer: "쇼팽",
        piece: "Nocturne in C-sharp Minor, Op. posth.",
        intent:
          "부드러운 고전적 dynamics, 비대칭 polyrhythm run(일정한 박 위의 35개 음), 서정적인 cantabile 선율을 다시 다져요.",
      },
      {
        composer: "라흐마니노프",
        piece: "Prelude in C-sharp Minor, Op. 3 No. 2",
        intent: "깊은 팔 무게, 빠르게 맞물리는 셋잇단음표, 4단 악보 읽기, 여러 옥타브를 아우르는 컨트롤.",
      },
      {
        composer: "쇼팽",
        piece: "Étude Op. 10 No. 3 (“이별의 곡”)",
        intent:
          "성부 분리: 4·5번 손가락으로 멜로디를 살리면서, 안쪽 손가락은 조용한 legatissimo 화음을 유지해요.",
      },
      {
        composer: "차이콥스키 (플레트네프 편곡)",
        piece: "호두까기 인형 중 Pas de Deux",
        intent: "최종 목표. 빠르게 쏟아지는 평행 음정, 넓은 음역의 arpeggio, 오케스트라 같은 웅장한 울림.",
      },
    ],

    // Op. 740 is commonly called 체르니 50번 in Korea
    czernyHeading: "체르니 50번 (Op. 740) 계획",
    czernyLead:
      "손의 메커니즘을 잡기 위한 집중 처방이에요. 목표 tempo에서 팔뚝 긴장 없이 깔끔하게 칠 수 있게 되면 그 곡은 졸업해요.",
    days: { mwf: "월 / 수 / 금", tts: "화 / 목 / 토" },
    phases: [
      {
        name: "1단계 · 정확성 & Arpeggio",
        targets: [
          { label: "손가락 동작 & Articulation", detail: "손은 완전히 고정한 채, 손가락 관절에서 날카롭게 쳐요." },
          { label: "손가락 바꾸기 & 매끄러운 arpeggio", detail: "끊김 없는 수평 이동과 티 나지 않는 엄지 넘기기." },
        ],
      },
      {
        name: "2단계 · 왼손 & 겹음",
        targets: [
          { label: "왼손의 유연성", detail: "왼손의 민첩함을 오른손 수준으로 끌어올려요." },
          { label: "3도 연습", detail: "겹음을 정확히 맞춰 치기. 쇼팽의 평행 6도를 위한 기초예요." },
        ],
      },
    ],

    sheetsHeading: "악보",
    sheetFrameTitle: (title: string) => `${title} 악보`,
    sheets: {
      "no-1": {
        tab: "1번",
        title: "체르니 Op. 740, 1번",
        subtitle: "손가락의 동작, 손은 조용히",
        tempo: "Molto allegro · 2분음표 = 92",
        focus:
          "손가락 동작을 손가락 관절에서 분리해요. 치지 않는 손가락에 불필요한 긴장이 없어야 해요. 손바닥은 흔들림 없이 조용하게.",
      },
      "no-11": {
        tab: "11번",
        title: "체르니 Op. 740, 11번",
        subtitle: "손가락 바꾸기의 민첩함",
        tempo: "Molto allegro · 2분음표 = 88",
        focus: "건반 위치가 바뀌어도 손을 옆으로 매끄럽게 옮겨요. 필요하기 전에 손가락 모양을 미리 준비해요.",
      },
      "no-12": {
        tab: "12번",
        title: "체르니 Op. 740, 12번",
        subtitle: "왼손의 유연성",
        tempo: "Vivace · 4분음표 = 76",
        focus: "양손의 속도를 똑같이 맞춰요. 낮은음자리표의 연속된 런에서 왼손이 처지지 않게.",
      },
      "no-39": {
        tab: "39번",
        title: "체르니 Op. 740, 39번",
        subtitle: "3도 연습",
        tempo: "Allegro vivace · 점2분음표 = 66",
        focus:
          "두 음을 세로로 완벽하게 맞춰요. 누르는 순간과 떼는 순간이 함께 떨어져야 해요. (첫 페이지 중간부터 시작해요.)",
      },
      nocturne: {
        tab: "Nocturne",
        title: "쇼팽: Nocturne in C-sharp Minor",
        subtitle: "Op. posth. (1830)",
        tempo: "Lento con gran espressione",
        focus: "",
      },
    },

    checklistHeading: "마스터 체크리스트",
    checklistReset: "초기화",
    workbook: {
      rhythm: {
        label: "Rhythm 변형",
        items: { dotted: "Dotted rhythm (길게-짧게)", reverse: "Reverse-dotted rhythm (짧게-길게)" },
      },
      articulation: {
        label: "Articulation",
        items: { staccato: "Staccato", legato: "맑은 legato와 깔끔한 떼기" },
      },
      velocity: {
        label: "속도",
        items: { t60: "60% tempo", t80: "80% tempo", t100: "100% tempo, 긴장 없이" },
      },
    },

    openPdf: "PDF 열기 ↗",
    download: "다운로드",
    originalRoadmap: "원본 로드맵 (PDF)",
    backLink: "← 홈으로 돌아가기",
  },

  notFound: {
    returnHome: "홈으로 돌아가기",
    goTo: "{page} 페이지로 가기",
    homeSuggestion: "(홈)",
    pages: { about: "소개", gospel: "복음" },
  },
};
