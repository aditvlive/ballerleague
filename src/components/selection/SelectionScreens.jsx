import { LEAGUE_TEAMS, TEAM_RANK, getTeamTheme } from "../../data/teams.js";
import { Flag } from "../shared.jsx";
import { GreenCard, SelectionLayout } from "../layout/Layout.jsx";

function TeamButton({ name, onSelectTeam }) {
  const theme = getTeamTheme(name);
  return <button onClick={() => onSelectTeam(name)} className="grid h-[42px] grid-cols-[42px_minmax(0,1fr)_34px] items-center gap-2 rounded-[1.15rem] bg-[#F5F0E6] px-4 text-left text-[14px] font-black tracking-[-0.02em] text-[#0B5F35] shadow-inner">
    <Flag team={name} className="h-5 w-7" />
    <span className="truncate text-center uppercase tracking-[-0.01em]">{name}</span>
    <span className="rounded-full px-1.5 py-1 text-center text-[10px] font-black tabular-nums" style={{ backgroundColor: theme.bg, color: theme.text }}>#{TEAM_RANK[name]}</span>
  </button>;
}

function LeaguePanel({ onSelectTeam }) {
  return <GreenCard>
    <div className="mb-1 text-center text-[24px] font-black uppercase tracking-[-0.02em]">Baller League</div>
    <div className="mb-4 text-center text-[9px] font-black uppercase tracking-[0.22em] text-[#F5F0E6]/60">12 teams • Top 4 reach playoffs</div>
    <div className="grid gap-2">{LEAGUE_TEAMS.map((name) => <TeamButton key={name} name={name} onSelectTeam={onSelectTeam} />)}</div>
  </GreenCard>;
}

export function HomeScreen({ onSelectTeam }) { return <SelectionLayout><LeaguePanel onSelectTeam={onSelectTeam} /></SelectionLayout>; }
export function TeamSelectScreen({ onSelectTeam }) { return <SelectionLayout><LeaguePanel onSelectTeam={onSelectTeam} /></SelectionLayout>; }
