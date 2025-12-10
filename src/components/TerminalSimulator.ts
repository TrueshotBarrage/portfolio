/**
 * Terminal Simulator
 * A modern TypeScript rewrite of the terminal animation effect.
 * Uses async/await for clean, readable animation sequencing.
 */

interface TerminalConfig {
  typeSpeed: number;
  writerDelay: number;
  cursorBlinkSpeed: number;
}

const defaultConfig: TerminalConfig = {
  typeSpeed: 50,
  writerDelay: 500,
  cursorBlinkSpeed: 530,
};

// Storage keys for animation state
const STORAGE_KEYS = {
  ANIMATION_SEEN: 'terminal_animation_seen',
  EXTERNAL_NAV: 'terminal_external_nav',
} as const;

// Flag to signal animation should be skipped
let skipRequested = false;

/**
 * Promise-based delay utility
 */
function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Typewriter effect - types text one character at a time
 */
async function typewriter(
  element: HTMLElement,
  text: string,
  speed: number = defaultConfig.typeSpeed
): Promise<void> {
  if (skipRequested) {
    element.innerHTML += text;
    return;
  }
  for (const char of text) {
    if (skipRequested) {
      element.innerHTML += text.slice(text.indexOf(char));
      return;
    }
    element.innerHTML += char;
    await delay(speed);
  }
}

/**
 * Writer effect - instantly appends HTML content
 */
async function writer(
  element: HTMLElement,
  html: string,
  delayMs: number = defaultConfig.writerDelay
): Promise<void> {
  element.innerHTML += html;
  if (skipRequested) return;
  await delay(delayMs);
}

/**
 * Creates a blinking cursor effect
 */
function startCursorBlink(cursorId: string, speed: number = defaultConfig.cursorBlinkSpeed): void {
  const cursor = document.getElementById(cursorId);
  if (!cursor) return;
  
  let visible = true;
  setInterval(() => {
    cursor.style.opacity = visible ? '0' : '1';
    visible = !visible;
  }, speed);
}

/**
 * Detect browser name for terminal prompt
 */
function getBrowserName(): string {
  const ua = navigator.userAgent;
  if (ua.includes('Firefox')) return 'firefox';
  if (ua.includes('Edg')) return 'edge';
  if (ua.includes('Chrome')) return 'chrome';
  if (ua.includes('Safari')) return 'safari';
  return 'browser';
}

/**
 * Rainbow cowsay ASCII art with gradient colors
 */
function getCowsayArt(): string {
  const lines = [
    ' _________________________ ',
    '< Welcome to my website! >',
    ' ------------------------- ',
    '        \\   ^__^           ',
    '         \\  (oo)\\_______   ',
    '            (__)\\       )\\/\\',
    '                ||----w |  ',
    '                ||     ||  ',
  ];
  
  // Generate rainbow gradient
  const colors = generateRainbowGradient(lines.join('').length);
  let colorIndex = 0;
  
  return lines.map((line) => {
    const coloredLine = line
      .split('')
      .map((char) => {
        const color = colors[colorIndex++ % colors.length];
        return `<span style="color:${color}">${char}</span>`;
      })
      .join('');
    return `<div>${coloredLine}</div>`;
  }).join('');
}

/**
 * Generate smooth rainbow gradient colors
 */
function generateRainbowGradient(steps: number): string[] {
  const colors: string[] = [];
  for (let i = 0; i < steps; i++) {
    const hue = (i / steps) * 360;
    colors.push(`hsl(${hue}, 100%, 60%)`);
  }
  return colors;
}

/**
 * Create styled prompt string
 */
function prompt(path: string = '~'): string {
  const browser = getBrowserName();
  return `<span class="prompt-user">davidkim@${browser}</span>:<span class="prompt-path">${path}</span>$ `;
}

/**
 * Navigation links data
 */
const navLinks = [
  { id: 'about-pl', text: 'about-me', href: '/about' },
  { id: 'github-pl', text: 'github', href: 'https://github.com/TrueshotBarrage', external: true },
  { id: 'linkedin-pl', text: 'linkedin', href: 'https://www.linkedin.com/in/davidkim2106/', external: true },
];

/**
 * Generate clickable pseudo-links HTML
 */
function getPseudoLinksHtml(): string {
  return navLinks
    .map((link) => `<span class="pseudo-link" data-href="${link.href}" data-external="${link.external || false}">${link.text}</span>`)
    .join('\n') + '\n';
}

/**
 * Handle pseudo-link click with terminal animation
 */
async function handlePseudoLinkClick(
  element: HTMLElement,
  codeBox: HTMLElement
): Promise<void> {
  const href = element.dataset.href;
  const isExternal = element.dataset.external === 'true';
  const name = element.textContent;
  
  // Remove cursor for clean animation
  document.getElementById('cursor')?.remove();
  
  // Disable all links during animation
  document.querySelectorAll('.pseudo-link').forEach((el) => {
    (el as HTMLElement).style.pointerEvents = 'none';
  });
  
  await typewriter(codeBox, `cd ${name}\n`, 50);
  await writer(codeBox, prompt(`~/${name}`), 500);
  await typewriter(codeBox, 'exit 0\n', 50);
  await writer(codeBox, '[Process completed]\n', 500);
  await writer(codeBox, 'Loading', 300);
  await typewriter(codeBox, '...', 400);
  
  await delay(300);
  
  if (isExternal) {
    // Mark that we're navigating externally (will reload)
    sessionStorage.setItem(STORAGE_KEYS.EXTERNAL_NAV, 'true');
    window.open(href!, '_blank');
    // Re-enable links after external navigation
    setTimeout(() => window.location.reload(), 500);
  } else {
    window.location.href = href!;
  }
}

/**
 * Check if skip button should be shown
 */
function shouldShowSkipButton(): boolean {
  return localStorage.getItem(STORAGE_KEYS.ANIMATION_SEEN) === 'true';
}

/**
 * Create and show the skip button
 */
function createSkipButton(onSkip: () => void): HTMLButtonElement {
  const button = document.createElement('button');
  button.id = 'skip-animation-btn';
  button.textContent = 'Skip Animation';
  button.addEventListener('click', () => {
    skipRequested = true;
    button.remove();
    onSkip();
  });
  return button;
}

/**
 * Finalize terminal state after animation
 */
function finalizeTerminal(codeBox: HTMLElement): void {
  // Mark animation as seen
  localStorage.setItem(STORAGE_KEYS.ANIMATION_SEEN, 'true');
  // Clear the external nav flag
  sessionStorage.removeItem(STORAGE_KEYS.EXTERNAL_NAV);
  
  // Remove skip button if present
  document.getElementById('skip-animation-btn')?.remove();
  
  // Start cursor blink
  startCursorBlink('cursor');
  
  // Attach click handlers
  document.querySelectorAll('.pseudo-link').forEach((el) => {
    el.addEventListener('click', () => handlePseudoLinkClick(el as HTMLElement, codeBox));
  });
}

/**
 * Main terminal animation sequence
 */
export async function initTerminal(codeBoxId: string): Promise<void> {
  const codeBox = document.getElementById(codeBoxId);
  if (!codeBox) {
    console.error(`Terminal element #${codeBoxId} not found`);
    return;
  }
  
  // Check if we should offer skip option
  if (shouldShowSkipButton()) {
    const terminalWrapper = codeBox.closest('.terminal-wrapper');
    if (terminalWrapper) {
      const skipBtn = createSkipButton(() => {
        // Animation will auto-fast-forward due to skipRequested flag
      });
      terminalWrapper.appendChild(skipBtn);
    }
  }
  
  await delay(300);
  
  // Boot sequence
  await typewriter(codeBox, `Powering up with Ubuntu 24.04 LTS for ${getBrowserName()}`, 30);
  await typewriter(codeBox, '...\n', 400);
  
  // Cowsay
  await writer(codeBox, prompt(), 800);
  await typewriter(codeBox, 'cowsay Welcome to my website! | lolcat\n', 40);
  await writer(codeBox, getCowsayArt(), 100);
  
  // List files
  await writer(codeBox, prompt(), 1500);
  await typewriter(codeBox, 'ls -1\n', 40);
  await writer(codeBox, getPseudoLinksHtml(), 800);
  
  // Final prompt with cursor
  await writer(codeBox, '(Try clicking these!)\n', 300);
  await writer(codeBox, prompt() + '<span id="cursor">█</span>', 0);
  
  // Finalize terminal
  finalizeTerminal(codeBox);
}
