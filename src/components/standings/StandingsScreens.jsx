import { Flag } from "../shared.jsx";
import { ScreenTitle } from "../layout/Menu.jsx";
import { FixturesToggle, FixtureCard } from "../schedule/ScheduleScreens.jsx";

export function GroupTable({ title, rows, qualifiedTeams = new Set(), userTeam = null }) {
  return <div className="mx-auto w-[94%] overflow-hidden rounded-[1.6rem] bg-[#EFE7D8] text-[#072D1D] ring-1 ring-[#0B5F35]/8 shadow-[0_8px_24px_rgba(7,45,29,0.04)]">
    <div className="bg-[#0B5F35] px-3 py-2.5 text-center text-[17px] font-black tracking-[-0.025em] text-[#F5F0E6]">{title}</div>
    <div className="p-3">
      <div className="mb-1.5 grid grid-cols-[24px_minmax(0,1.9fr)_18px_repeat(6,24px)] items-center gap-[3px] px-2 text-center text-[8px] font-black uppercase tracking-[0.08em] text-[#072D1D]/42"><span>#</span><span className="pl-1 text-left">Team</span><span></span><span>P</span><span>W</span><span>D</span><span>L</span><span>GD</span><span>Pts</span></div>
      {rows.map((row, index) => {
        const isUserTeam = userTeam === row.team;
        const isQualified = qualifiedTeams.has(row.team);
        return <div key={row.team} className={`mb-1.5 grid grid-cols-[24px_minmax(0,1.9fr)_18px_repeat(6,24px)] items-center gap-[3px] rounded-xl px-2 py-2 text-center text-[9px] font-semibold text-[#072D1D]/80 last:mb-0 ring-1 ring-[#0B5F35]/5 ${isUserTeam ? "bg-[#DCE9DE]" : "bg-[#F8F4EC]"}`}>
          <span>{index + 1}</span>
          <span className="flex min-w-0 items-center gap-1.5 pl-1 text-left"><Flag team={row.team} /><span className="truncate uppercase tracking-[0.015em]">{row.team}</span></span>
          <span className="text-[10px] font-black text-[#0B5F35]">{isQualified ? "Q" : ""}</span>
          <span>{row.played}</span><span>{row.won}</span><span>{row.drawn}</span><span>{row.lost}</span><span>{row.gd}</span><span className="font-black">{row.pts}</span>
        </div>;
      })}
    </div>
  </div>;
}

function PlayoffBracket({ fixtures = [], podium = {}, userTeam }) {
  const semis = fixtures.filter((f) => f.stage === "semiFinal");
  const final = fixtures.find((f) => f.stage === "final");
  return <div className="space-y-3">
    <div className="mx-auto w-[94%] rounded-[1.6rem] bg-[#EFE7D8] p-3 ring-1 ring-[#0B5F35]/8">
      <div className="mb-2 text-center text-[17px] font-black uppercase text-[#0B5F35]">Final Four Playoffs</div>
      <div className="space-y-2">{semis.length ? semis.map((fixture) => <FixtureCard key={fixture.id} {...fixture} userTeam={userTeam} />) : <FixtureCard home="1st" away="4th" matchNo={101} />}</div>
      <div className="mt-3 space-y-2"><FixtureCard {...(final || { home: "W101", away: "W102", matchNo: 103 })} userTeam={userTeam} /></div>
    </div>
    {(podium.winner || podium.runnerUp) && <div className="mx-auto w-[94%] rounded-[1.6rem] bg-[#0B5F35] p-4 text-center text-[#F5F0E6]"><div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-70">Champion</div><div className="mt-2 text-[24px] font-black uppercase">{podium.winner || "TBC"}</div></div>}
  </div>;
}

export function GroupsScreen({ allGroups, menuProps, standingsView, onStandingsViewChange, knockoutFixtures, qualifiedTeams = new Set(), userTeam = null, podium = {} }) {
  const rows = allGroups?.[0]?.rows || [];
  return <main className="flex min-h-0 flex-1 flex-col gap-2"><ScreenTitle {...menuProps}>STANDINGS</ScreenTitle><FixturesToggle value={standingsView} onChange={onStandingsViewChange} /><section className="min-h-0 flex-1 overflow-auto py-1"><div className="space-y-2">
    {standingsView === "league" && <GroupTable title="12-Team League" rows={rows} qualifiedTeams={qualifiedTeams} userTeam={userTeam} />}
    {standingsView === "playoffs" && <PlayoffBracket fixtures={knockoutFixtures} podium={podium} userTeam={userTeam} />}
  </div></section></main>;
}
