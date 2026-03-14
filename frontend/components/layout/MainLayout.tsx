import Link from 'next/link';
import { ReactNode } from 'react';

type MainLayoutProps = {
  children: ReactNode;
};

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Courses', href: '/courses' },
  { label: 'Practice', href: '/practice' },
  { label: 'Placements', href: '/placements' },
  { label: 'Community', href: '/community' }
];

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
      <path d="M20 20L16.65 16.65" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path d="M12 4a4 4 0 0 0-4 4v2.5c0 .8-.28 1.58-.8 2.2L6 14.5h12l-1.2-1.8a3.8 3.8 0 0 1-.8-2.2V8a4 4 0 0 0-4-4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9.5 17a2.5 2.5 0 0 0 5 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-[#f4f5f7] text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-1 text-2xl font-extrabold tracking-tight">
            <span className="text-[#f5b301]">K</span>
            <span>odNest</span>
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-[#fff1c7] hover:text-slate-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50" aria-label="Search">
              <SearchIcon />
            </button>
            <button className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50" aria-label="Notifications">
              <BellIcon />
            </button>

            <div className="group relative">
              <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-2 py-1.5 hover:bg-slate-50" aria-label="Profile menu">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black font-bold text-[#f9d423]">PH</span>
                <span className="hidden text-sm font-semibold sm:inline">Pavan</span>
              </button>

              <div className="invisible absolute right-0 top-12 w-56 rounded-xl border border-slate-200 bg-white p-2 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100">
                {['My Account', 'My Courses', 'Session Diary', 'Apply Leave', 'Log Out'].map((label) => (
                  <button key={label} className="w-full rounded-lg px-3 py-2 text-left text-sm font-medium text-slate-700 hover:bg-slate-100">
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{children}</main>
    </div>
  );
}
