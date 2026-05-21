import { Flag } from "../shared.jsx";
import { ScreenTitle } from "../layout/Menu.jsx";

const stageTitle = (stage) => stage === "semiFinal" ? "Semi-finals" : stage === "final" ? "Championship Final" : "League";

function FlagSlot({ value }) { return value && value !== "TBC" ? <Flag team={value} /> : <span className="flex h-4 w-6 items-center justify-center rounded bg-[#DCE9DE] text-[6px] font-black text-[#0B5F35]/55">TBC</span>; }

export function FixtureCard({ home = "TBC", away = "TBC", played = false, homeGoals = null, awayGoals = null, matchNo = null, userTeam = null }) {
  const isUserFixture = userTeam && (home === userTeam || away === userTeam);
  return <div className={`mb-2 rounded-2xl px-3 py-3 text-center text-[11px] font-semibold text-[#072D1D]/80 ring-1 ring-[#0B5F35]/6 last:mb-0 ${isUserFixture ? "bg-[#DCE9DE]" : "bg-[#F8F4EC]"}`}>
    <div className="mb-2 flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-[0.14em] text-[#0B5F35]/60">{matchNo && <span>M{matchNo}</span>}</div>
    <div className="grid grid-cols-[24px_minmax(0,1fr)_34px_minmax(0,1fr)_24px] items-center gap-2 text-[10px] font-black text-[#072D1D]">
      <div className="flex items-center justify-start"><FlagSlot value={home} /></div>
      <span className="min-w-0 truncate text-right font-semibold uppercase tracking-[0.005em]">{home}</span>
      <span className="text-center text-[#0B5F35]">{played ? `${homeGoals}-${awayGoals}` : "v"}</span>
      <span className="min-w-0 truncate text-left font-semibold uppercase tracking-[0.005em]">{away}</span>
      <div className="flex items-center justify-end"><FlagSlot value={away} /></div>
    </div>
  </div>;
}

export function FixturesToggle({ value, onChange }) {
  const buttonClass = (active) => `rounded-full px-3 py-2 text-xs font-black uppercase transition-all ${active ? "bg-[#0B5F35] text-[#F5F0E6] shadow-sm" : "bg-transparent text-[#0B5F35]/72"}`;
  return <div className="mx-auto grid w-[94%] grid-cols-2 gap-2 rounded-full border border-[#0B5F35]/10 bg-[#EFE7D8] p-1 shadow-inner"><button onClick={() => onChange("league")} className={buttonClass(value === "league")}>League</button><button onClick={() => onChange("playoffs")} className={buttonClass(value === "playoffs")}>Playoffs</button></div>;
}

export function FixtureSection({ title, children }) {
  return <div className="mx-auto w-[94%] overflow-hidden rounded-[1.6rem] bg-[#EFE7D8] text-[#072D1D] ring-1 ring-[#0B5F35]/8 shadow-[0_8px_24px_rgba(7,45,29,0.04)]"><div className="bg-[#0B5F35] px-3 py-2.5 text-center text-[17px] font-black uppercase tracking-[-0.025em] text-[#F5F0E6]">{title}</div><div className="p-3">{children}</div></div>;
}

export function FixturesScreen({ fixtureView, onFixtureViewChange, schedule, menuProps, knockoutFixtures = [], userTeam = null }) {
  const weeks = [...new Set(schedule.map((fixture) => fixture.week))];
  const playoffGroups = [
    ["Semi-finals", knockoutFixtures.filter((f) => f.stage === "semiFinal")],
    ["Championship Final", knockoutFixtures.filter((f) => f.stage === "final")],
  ];
  return <main className="flex min-h-0 flex-1 flex-col gap-2"><ScreenTitle {...menuProps}>SCHEDULE</ScreenTitle><FixturesToggle value={fixtureView} onChange={onFixtureViewChange} /><section className="min-h-0 flex-1 overflow-auto py-1"><div className="space-y-3">
    {fixtureView === "league" && weeks.map((week) => <FixtureSection key={week} title={`GAMEWEEK ${week}`}>{schedule.filter((fixture) => fixture.week === week).map((fixture) => <FixtureCard key={fixture.id} {...fixture} userTeam={userTeam} />)}</FixtureSection>)}
    {fixtureView === "playoffs" && playoffGroups.map(([label, fixtures]) => <FixtureSection key={label} title={label}>{fixtures.length ? fixtures.map((fixture) => <FixtureCard key={fixture.id} {...fixture} userTeam={userTeam} />) : <FixtureCard home="TBC" away="TBC" matchNo={label === "Semi-finals" ? 101 : 103} userTeam={userTeam} />}</FixtureSection>)}
  </div></section></main>;
}
