export const LEAGUE_TEAMS = [
  "Shoreditch FC",
  "Camden United",
  "Hackney Rovers",
  "Brixton Ballers",
  "Peckham City",
  "Soho Athletic",
  "Dalston Kings",
  "Clapham Club",
  "Wembley Elite",
  "Islington Town",
  "Greenwich Galaxy",
  "Croydon Crew",
];

export const GROUP_LETTERS = ["League"];
export const GROUPS = { League: LEAGUE_TEAMS };

export const HOST_TEAMS = LEAGUE_TEAMS.slice(0, 6).map((name) => ({
  name,
  code: teamCode(name),
  group: "League",
}));

export const TEAM_RANK = Object.fromEntries(LEAGUE_TEAMS.map((team, index) => [team, index + 1]));
export const FLAG_CC = {};

const TEAM_THEMES = [
  ["#0B5F35", "#F5F0E6"],
  ["#050505", "#F7D117"],
  ["#7DAA8F", "#072D1D"],
  ["#DCE9DE", "#072D1D"],
  ["#B43A2F", "#F5F0E6"],
  ["#1D4ED8", "#F5F0E6"],
  ["#7C3AED", "#F5F0E6"],
  ["#F59E0B", "#072D1D"],
  ["#DC2626", "#F5F0E6"],
  ["#0891B2", "#F5F0E6"],
  ["#4B5563", "#F5F0E6"],
  ["#16A34A", "#F5F0E6"],
];

export function teamCode(name = "") {
  return String(name)
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 3)
    .toUpperCase() || "TBC";
}

export function getTeamTheme(name) {
  const idx = Math.max(0, LEAGUE_TEAMS.indexOf(name));
  const [bg, text] = TEAM_THEMES[idx % TEAM_THEMES.length];
  return { bg, text };
}
