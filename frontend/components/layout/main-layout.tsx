import Link from "next/link";
import type { ReactNode } from "react";

const navLinks = [
  { href: "/home", label: "Home" },
  { href: "/my-learning/class/list", label: "Courses" },
  { href: "/practice", label: "Practice" },
  { href: "/placements", label: "Placements" },
  { href: "/community", label: "Community" },
];

type MainLayoutProps = {
  children: ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-[#f7f7f8] text-zinc-900">
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-1 text-3xl font-extrabold tracking-tight">
            <span className="text-yellow-500">K</span>
            <span className="text-zinc-900">odNest</span>
          </Link>

          <ul className="hidden items-center gap-2 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-md px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:bg-yellow-50 hover:text-zinc-950"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              className="hidden rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm text-zinc-500 sm:inline-flex"
            >
              Search courses...
            </button>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50"
              aria-label="Notifications"
            >
              🔔
            </button>

            <details className="relative">
              <summary className="list-none">
                <button
                  type="button"
                  className="flex items-center gap-2 rounded-xl bg-zinc-900 px-3 py-2 text-sm font-semibold text-yellow-400"
                >
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-zinc-900">
                    KN
                  </span>
                  Profile
                </button>
              </summary>

              <div className="absolute right-0 mt-2 w-44 rounded-xl border border-zinc-200 bg-white p-2 shadow-xl">
                <Link href="/profile" className="block rounded-lg px-3 py-2 text-sm hover:bg-zinc-50">
                  My Profile
                </Link>
                <Link href="/settings" className="block rounded-lg px-3 py-2 text-sm hover:bg-zinc-50">
                  Settings
                </Link>
                <button
                  type="button"
                  className="mt-1 block w-full rounded-lg px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50"
                >
                  Logout
                </button>
              </div>
            </details>
          </div>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">{children}</main>
    </div>
  );
}
