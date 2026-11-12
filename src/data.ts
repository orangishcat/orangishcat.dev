import strftime from "strftime";

// month is 0-indexed :skull:
export const date = (year: number, month: number, day: number) =>
  new Date(year, month - 1, day);

export const routeFor = (
  entry: any,
  index: number,
  prefix: string = "/blog/",
) => prefix + (index === 0 ? entry.id.split("/")[0] : entry.id);

export const isRecent = (date: Date) => {
  return Date.now() - date.getTime() < 1000 * 3600 * 24 * 21;
};

export const coloredDate = (date: Date) => {
  const recent = isRecent(date);
  return `<span class="${recent ? "text-orange-200" : ""}">${recent ? '<span class="font-bold">New!</span> ' : ""}${strftime("%B %d, %Y", date)}</span>`;
};

export const projects = [
  {
    title: "Better Clouds",
    description:
      "A Minecraft mod that adds volumetric clouds in touch with the aesthetic of vanilla Minecraft",
    url: "https://modrinth.com/mod/better-clouds",
    note: "Maintainer",
    datePublished: date(2026, 3, 23),
  },
  {
    title: "foam",
    description:
      "Stands for Fast Open Assignment Manager, and is a native desktop app and alternative Schoology client. API key acess is recommended",
    url: "https://github.com/orangishcat/foam",
    datePublished: date(2026, 11, 11),
  },
  {
    title: "orangishcat's happy place",
    description: "(Personal website, the one you're looking at right now)",
    url: "/",
    datePublished: date(2026, 7, 14),
  },
  {
    title: "cursed-tetris",
    description:
      "Tetris with powerups, fully in your terminal. My first ever Rust project! I quite enjoyed learning Rust.",
    url: "https://github.com/orangishcat/cursed-tetris",
    datePublished: date(2026, 8, 31),
  },
  {
    title: "Page Proxy",
    description:
      "A Chrome/Firefox extension that streamlines the process of creating userscripts.",
    url: "https://page-proxy.orangishcat.dev/",
    datePublished: date(2026, 2, 13),
  },
  {
    title: "Tanks: the Crusades",
    description:
      "A cross-platform tank game where the player controls a blue tank with the goal of destroying all enemy tanks to clear a level.",
    url: "https://github.com/aehmttw/Tanks",
    note: "Contributor",
    datePublished: date(2024, 11, 24),
  },
];

export const blogs = [
  {
    slug: "foam",
    title: "foam: native alternate Schoology client",
    description:
      "Schoology (the LMS our school uses) sucks, so I set out to fix that. Rust and Slint are amazing. However, my coding skills are not.",
    datePublished: date(2026, 11, 11),
  },
  {
    slug: "cursed-tetris",
    title: "I made a terminal-based tetris game as my first Rust project!",
    description:
      "After learning it, I can say that Rust is a pretty cool language. I've also gotten kinda addicted to my own game.",
    datePublished: date(2026, 8, 31),
  },
  {
    slug: "personal-website",
    title: "I learned art, design, and webdev to create my personal website!!",
    description:
      "One of the most rewarding projects I have ever done. I learned so much! It is also the only project of mine as of the time of writing that is mostly finished.",
    datePublished: date(2026, 7, 14),
  },
  {
    slug: "page-proxy",
    title: "Page Proxy Devlogs",
    description:
      "Devlogs about my Chrome/Firefox extension and userscript manager, Page Proxy!",
    datePublished: date(2026, 4, 30),
  },
];
