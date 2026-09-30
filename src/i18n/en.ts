/**
 * English copy for every page. This is the source of truth for the shape of
 * the Korean dictionary (see ko.ts), so every string shown on the site lives here.
 * Strings with inline markup are rendered with set:html.
 */

export const en = {
  layout: {
    description: "David Kim",
    languageLabel: "Language",
    logoButtonLabel: "About this logo",
    close: "Close",
    logoTitle: "About this logo",
    logoParagraphs: [
      "This logo blends the early Christian <strong>ichthýs</strong> (fish symbol) with my initials, <strong>“DK”</strong>, woven into its form.",
      "It reflects how my identity as a Christian is a foundational part of who I am.",
    ],
    verse:
      "I have been crucified with Christ. It is no longer I who live, but Christ who lives in me. And the life I now live in the flesh I live by faith in the Son of God, who loved me and gave himself for me.",
    verseRef: "Galatians 2:20 (ESV)",
    gospelLink: "What is the Gospel? →",
  },

  home: {
    title: "David Kim",
    skipAnimation: "Skip Animation",
    // {year} and {astro} are replaced in the view
    footer: "© {year} David Kim. All rights reserved. Built with {astro}.",
  },

  about: {
    title: "About | David Kim",
    avatarAlt: "Photo of David Kim",
    name: "David Kim",
    subtitle: "Software Engineer, NYC 🗽",
    bio: [
      `Hi! I'm Dave, a Software Engineer at <strong class="highlight valon">Valon</strong>, and a <strong class="highlight cornell">Cornell University</strong> alum with an M.S. in Computer Science. I previously worked as a Consultant at <strong class="highlight ey">EY</strong> and did research in the <strong class="highlight emprise">EmPRISE Lab</strong>, <a href="https://scholar.google.com/citations?user=NwqMTYkAAAAJ" target="_blank" rel="noopener noreferrer">working with assistive robots to improve the lives of people with disabilities.</a>`,
      `In my free time, I love playing board games, practicing jazz piano, and cafe hopping around New York City. I'm also actively involved with my church community at <a href="https://firstnyc.org" target="_blank" rel="noopener noreferrer"><strong class="highlight first">First Baptist Church</strong></a>. Whenever I get a chance, I try to travel around the United States to meet up with friends.`,
    ],
    timelineHeading: "Timeline",
    timelineEnd: "The past",
    // Most recent first
    timeline: [
      { date: "Oct 2025", organization: "Valon", highlight: "valon", description: "Software Engineer — ValonOS" },
      { date: "Aug 2023", organization: "EY", highlight: "ey", description: "Consultant — Financial services" },
      { date: "Aug 2022", organization: "Cornell University", highlight: "cornell", description: "M.S. Computer Science" },
      { date: "Aug 2021", organization: "EmPRISE Lab", highlight: "emprise", description: "Research Assistant — Assistive robotics" },
      { date: "Jun 2021", organization: "Amazon", highlight: "amazon", description: "SDE Intern — Last Mile Planning simulations" },
      { date: "Jan 2021", organization: "Amazon Robotics", highlight: "amazon", description: "SWE Co-op — Embedded systems" },
      { date: "May 2020", organization: "Wasabi Technologies", highlight: "wasabi", description: "SWE Intern — Hot cloud storage" },
      {
        date: "Aug 2018",
        organization: "Cornell University",
        highlight: "cornell",
        description: "B.S. Computer Science & B.S. Electrical and Computer Engineering",
      },
    ],
    skillsHeading: "Skills",
    skills: [
      { heading: "Languages & Frameworks", items: "Python • React • Java • Swift" },
      { heading: "Books", items: "The Secret Key to Heaven • Brave New World • The Screwtape Letters" },
    ],
    backLink: "← Back to terminal",
  },

  gospel: {
    title: "What is the Gospel? | David Kim",
    heading: "What is the Gospel?",
    subtitle: "The good news at the heart of Christianity",
    intro:
      'The word <strong>"gospel"</strong> means <em>good news</em>. But what is this news, and why does it matter?',
    sections: [
      {
        heading: "The Problem",
        body: "Every person has sinned and fallen short of God's perfect standard. Sin separates us from God and leads to death—not just physical, but spiritual and eternal.",
        quote: "\"For all have sinned and fall short of the glory of God.\"",
        cite: "— Romans 3:23",
      },
      {
        heading: "The Solution",
        body: "God, in His great love, sent His Son Jesus Christ into the world. Jesus lived a perfect life, died on the cross to pay the penalty for our sins, and rose again on the third day—victorious over sin, death, and all his enemies.",
        quote:
          "\"For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.\"",
        cite: "— John 3:16",
      },
      {
        heading: "The Promise",
        body: "For those who believe in Jesus and trust in His finished work, there is now <strong>no condemnation</strong>. We are forgiven, adopted as children of God, and promised everlasting joy in His presence.",
        quote: "\"There is therefore now no condemnation for those who are in Christ Jesus.\"",
        cite: "— Romans 8:1",
      },
      {
        heading: "The Invitation",
        body: "This gift is freely offered to all who will receive it by faith. It cannot be earned—only accepted with a humble and repentant heart.",
        quote:
          "\"If you confess with your mouth that Jesus is Lord and believe in your heart that God raised him from the dead, you will be saved.\"",
        cite: "— Romans 10:9",
      },
    ],
    learnMoreHeading: "Learn More",
    emailSubject: "I want to learn more about Christianity",
    emailLink: "✉️ Send me an email about Christianity",
    articlesLink: "📖 Gospel articles from Desiring God",
    backLink: "← Back to home",
  },

  piano: {
    title: "Piano | David Kim",
    heading: "Piano",
    subtitle: "Practice roadmap & sheet music",
    monthRange: (start: number, end: number, plus: string) => `Months ${start} – ${end}${plus}`,

    routineHeading: "The daily hour",
    routineLead: "5 hours a week. Each session prioritizes targeted blocks over casual playthroughs.",
    minutes: (n: number) => `${n}m`,
    routine: [
      {
        focus: "Technical Warm-Up",
        objective:
          "One Czerny exercise or a scale variant. Skeletal alignment, loose wrists, micro-velocity adjustments.",
      },
      {
        focus: "The Hard Work Zone",
        objective:
          "Problem measures in the current milestone piece. Slow reps with a metronome, hands isolated.",
      },
      {
        focus: "Structural Maintenance",
        objective: "Review memorized sections of repertoire to consolidate memory and keep endurance up.",
      },
      {
        focus: "Musical Cool-Down",
        objective: "Chord-voicing experiments, sight-reading something unfamiliar, or just playing.",
      },
    ],

    milestonesHeading: "Repertoire milestones",
    sheetJump: "Sheet music ↓",
    milestones: [
      {
        composer: "Chopin",
        piece: "Nocturne in C-sharp Minor, Op. posth.",
        intent:
          "Re-establishing soft classical dynamics, asymmetrical polyrhythmic runs (35 notes over a steady pulse), and lyrical cantabile lines.",
      },
      {
        composer: "Rachmaninoff",
        piece: "Prelude in C-sharp Minor, Op. 3 No. 2",
        intent: "Deep arm weight, rapid interlocking triplets, four-stave reading, and multi-octave control.",
      },
      {
        composer: "Chopin",
        piece: "Étude Op. 10 No. 3 (“Tristesse”)",
        intent:
          "Layer separation: projecting the melody with fingers 4 and 5 while the inner fingers keep quiet legatissimo harmonies.",
      },
      {
        composer: "Tchaikovsky (arr. Pletnev)",
        piece: "Pas de Deux from The Nutcracker",
        intent:
          "The pinnacle. Rapid parallel interval cascades, wide-register arpeggios, and grand orchestral sonority.",
      },
    ],

    czernyHeading: "Czerny Op. 740 plan",
    czernyLead:
      "Focused interventions for hand mechanics. Once an exercise is clean at the target tempo with no forearm tension, retire it.",
    days: { mwf: "Mon / Wed / Fri", tts: "Tue / Thu / Sat" },
    phases: [
      {
        name: "Phase 1 · Precision & Arpeggios",
        targets: [
          { label: "Finger action & articulation", detail: "Sharp knuckle strokes with a completely still hand." },
          {
            label: "Finger change & smooth arpeggios",
            detail: "Seamless horizontal gliding and invisible thumb tucks.",
          },
        ],
      },
      {
        name: "Phase 2 · Left Hand & Double Notes",
        targets: [
          { label: "Left-hand flexibility", detail: "Bring left-hand agility up to match the right." },
          {
            label: "Exercise in thirds",
            detail: "Synchronized double notes, groundwork for Chopin's parallel 6ths.",
          },
        ],
      },
    ],

    sheetsHeading: "Sheet music",
    sheetFrameTitle: (title: string) => `${title} sheet music`,
    // Tempo markings follow the Edition Peters score
    sheets: {
      "no-1": {
        tab: "No. 1",
        title: "Czerny Op. 740, No. 1",
        subtitle: "Action of the fingers, the hand quiet",
        tempo: "Molto allegro · half note = 92",
        focus:
          "Isolate finger action from the knuckles. No sympathetic tension in the non-playing fingers. Keep the palm steady and silent.",
      },
      "no-11": {
        tab: "No. 11",
        title: "Czerny Op. 740, No. 11",
        subtitle: "Readiness in changing the fingers",
        tempo: "Molto allegro · half note = 88",
        focus:
          "Smooth lateral hand transitions over shifting keys. Prepare each finger configuration before you need it.",
      },
      "no-12": {
        tab: "No. 12",
        title: "Czerny Op. 740, No. 12",
        subtitle: "Flexibility of the left hand",
        tempo: "Vivace · quarter note = 76",
        focus: "Equalize velocity between the hands. No left-hand lag in the continuous bass-clef runs.",
      },
      "no-39": {
        tab: "No. 39",
        title: "Czerny Op. 740, No. 39",
        subtitle: "Exercise in thirds",
        tempo: "Allegro vivace · dotted half note = 66",
        focus:
          "Perfect vertical alignment of each pair. Downstrokes and releases land together. (Starts partway down the first page.)",
      },
      nocturne: {
        tab: "Nocturne",
        title: "Chopin: Nocturne in C-sharp Minor",
        subtitle: "Op. posth. (1830)",
        tempo: "Lento con gran espressione",
        focus: "",
      },
    },

    checklistHeading: "Mastery checklist",
    checklistReset: "Reset",
    workbook: {
      rhythm: {
        label: "Rhythmic displacement",
        items: { dotted: "Dotted rhythms (long-short)", reverse: "Reverse-dotted rhythms (short-long)" },
      },
      articulation: {
        label: "Articulation",
        items: { staccato: "Staccato", legato: "Glassy legato with crisp releases" },
      },
      velocity: {
        label: "Velocity",
        items: { t60: "60% tempo", t80: "80% tempo", t100: "100% tempo, zero tension" },
      },
    },

    openPdf: "Open PDF ↗",
    download: "Download",
    originalRoadmap: "Original roadmap (PDF)",
    backLink: "← Back to home",
  },

  // Read by the 404 page's client script, so these stay plain strings
  notFound: {
    returnHome: "Return to home",
    goTo: "Go to {page}",
    homeSuggestion: "(home)",
    pages: { about: "about", gospel: "gospel" },
  },
};

export type Content = typeof en;
