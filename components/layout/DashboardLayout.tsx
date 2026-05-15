"use client";

import { ReactNode } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { api } from "@/lib/api-client";
import { getNavigationLinks } from "@/features/navigation/navigation";
import type { User } from "@/types/domain";

type DashboardLayoutProps = {
  user: User;
  children: ReactNode;
};

export function DashboardLayout({ user, children }: DashboardLayoutProps) {
  const pathname = usePathname();
  const router = useRouter();

  async function logout() {
    await api("/api/users/logout", { method: "POST" }).catch(() => null);
    router.push("/login");
  }

  return (
    <div className="min-h-screen bg-black text-white md:flex">
      <Sidebar user={user} pathname={pathname} onLogout={logout} />
      <Topbar onLogout={logout} />
      <main className="min-h-screen flex-1 pb-24 md:pb-0">{children}</main>
      <Bottombar user={user} pathname={pathname} />
    </div>
  );
}

function Sidebar({ user, pathname, onLogout }: { user: User; pathname: string; onLogout: () => void }) {
  const links = getNavigationLinks(user);

  return (
    <aside className="hidden min-w-64 flex-col justify-between bg-[#09090A] px-6 py-10 md:flex">
      <div>
        <a href="/dashboard" className="mb-10 flex items-center gap-3">
          <Image src="/images/logo2.png" alt="" width={40} height={40} className="h-10 w-10 rounded object-cover" />
          <span className="text-2xl font-bold">TrackTruck</span>
        </a>
        <nav className="space-y-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`block rounded-lg px-4 py-3 ${pathname === link.href ? "bg-white text-black" : "hover:bg-white hover:text-black"}`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <button onClick={onLogout} className="rounded-lg px-4 py-3 text-left hover:bg-white hover:text-black">
        Logout
      </button>
    </aside>
  );
}

function Topbar({ onLogout }: { onLogout: () => void }) {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between bg-[#09090A] px-5 py-4 md:hidden">
      <a href="/dashboard" className="flex items-center gap-3">
        <Image src="/images/logo2.png" alt="" width={40} height={40} className="h-10 w-10 rounded object-cover" />
        <span className="text-xl font-bold">TrackTruck</span>
      </a>
      <button onClick={onLogout} className="rounded-full bg-white/10 px-3 py-2 text-sm">
        Logout
      </button>
    </header>
  );
}

function Bottombar({ user, pathname }: { user: User; pathname: string }) {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-20 flex justify-center gap-3 bg-[#09090A] px-4 py-3 md:hidden">
      {getNavigationLinks(user).map((link) => (
        <a
          key={link.href}
          href={link.href}
          className={`rounded px-3 py-2 text-sm ${pathname === link.href ? "bg-white text-black" : "text-white"}`}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
