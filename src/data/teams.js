export const LEAGUE_TEAMS = [
  "Clutch FC",
  "Community FC",
  "Deportrio",
  "Gold Devils",
  "N5 FC",
  "NDL FC",
  "Prime FC",
  "Rukkas FC",
  "SDS FC",
  "VZN FC",
  "Wembley Rangers AFC",
  "Yanited",
];

export const GROUP_LETTERS = ["League"];
export const GROUPS = { League: LEAGUE_TEAMS };

export const TEAM_CODES = {
  "Clutch FC": "CFC",
  "Community FC": "CFC",
  "Deportrio": "DPT",
  "Gold Devils": "GDF",
  "N5 FC": "N5F",
  "NDL FC": "NDL",
  "Prime FC": "PFC",
  "Rukkas FC": "RKS",
  "SDS FC": "SDS",
  "VZN FC": "VZN",
  "Wembley Rangers AFC": "WRS",
  "Yanited": "YTD",
};

export const TEAM_LOGOS = {
  "Clutch FC": "https://ballerleague.uk/uploads/teams/logo_343.svg",
  "Community FC": "https://ballerleague.uk/uploads/teams/logo_347.svg",
  "Deportrio": "https://ballerleague.uk/uploads/teams/logo_340.svg",
  "Gold Devils": "https://ballerleague.uk/uploads/teams/logo_346.svg",
  "N5 FC": "https://ballerleague.uk/uploads/teams/logo_337.svg",
  "NDL FC": "https://ballerleague.uk/uploads/teams/logo_342.svg",
  "Prime FC": "https://ballerleague.uk/uploads/teams/logo_345.svg",
  "Rukkas FC": "https://ballerleague.uk/uploads/teams/logo_344.svg",
  "SDS FC": "https://ballerleague.uk/uploads/teams/logo_334.svg",
  "VZN FC": "https://ballerleague.uk/uploads/teams/logo_332.svg",
  "Wembley Rangers AFC": "https://ballerleague.uk/uploads/teams/logo_331.svg",
  "Yanited": "https://ballerleague.uk/uploads/teams/logo_330.svg",
};

export const HOST_TEAMS = LEAGUE_TEAMS.slice(0, 6).map((name) => ({
  name,
  code: teamCode(name),
  group: "League",
  logo: TEAM_LOGOS[name],
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
  if (TEAM_CODES[name]) return TEAM_CODES[name];

  return String(name)
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 3)
    .toUpperCase() || "TBC";
}

export function teamLogo(name = "") {
  return TEAM_LOGOS[name] || "";
}

export function getTeamTheme(name) {
  const idx = Math.max(0, LEAGUE_TEAMS.indexOf(name));
  const [bg, text] = TEAM_THEMES[idx % TEAM_THEMES.length];
  return { bg, text };
}
