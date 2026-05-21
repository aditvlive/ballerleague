import { MondayLogo } from "../shared.jsx";

export function Shell({ children }) {
  return <div className="min-h-[100dvh] bg-[#0B5F35] text-[#072D1D]"><div className="mx-auto min-h-[100dvh] w-full max-w-md overflow-hidden bg-[#F5F0E6] shadow-2xl">{children}</div></div>;
}

export function DrawerShell({ children }) {
  return <Shell><div className="flex h-[100dvh] flex-col overflow-hidden bg-[#F5F0E6]">{children}</div></Shell>;
}

export function GreenCard({ children }) {
  return <div className="mx-auto w-[92%] rounded-[2rem] bg-[#0B5F35] p-5 text-[#F5F0E6] shadow-[0_18px_45px_rgba(7,45,29,0.18)]">{children}</div>;
}

export function SelectionLayout({ children }) {
  return <Shell><main className="flex min-h-[100dvh] flex-col items-center justify-center gap-6 bg-[#F5F0E6] px-4 py-8"><MondayLogo /><div className="w-full">{children}</div></main></Shell>;
}
