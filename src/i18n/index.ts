import { en, type Content } from "./en";
import { ko } from "./ko";

export type Lang = "en" | "ko";

export const LANGS: Lang[] = ["en", "ko"];

// localStorage keys shared by the layout's head script and the language toggle
export const LANG_PREF_KEY = "lang-pref";
export const LANG_BANNER_DISMISSED_KEY = "lang-banner-dismissed";

const content: Record<Lang, Content> = { en, ko };

export function getContent(lang: Lang): Content {
  return content[lang];
}

export function dateLocale(lang: Lang): string {
  return lang === "ko" ? "ko-KR" : "en-US";
}

/** "/ko/about/" → "/about", "/ko" → "/" */
function basePath(path: string): string {
  const withoutLang = path.replace(/^\/ko(?=\/|$)/, "");
  return withoutLang.replace(/\/+$/, "") || "/";
}

/** The same page in `lang`, e.g. localizePath("/about", "ko") → "/ko/about" */
export function localizePath(path: string, lang: Lang): string {
  const base = basePath(path);
  if (lang === "en") return base;
  return base === "/" ? "/ko" : `/ko${base}`;
}

/** Replaces {name} placeholders in dictionary strings */
export function fill(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key) => String(values[key] ?? match));
}
