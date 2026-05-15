"use client";

import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api-client";
import type { User } from "@/types/domain";

type RequireAuthProps = {
  children: (user: User) => ReactNode;
};

export function RequireAuth({ children }: RequireAuthProps) {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api<{ user: User }>("/api/users/me")
      .then((data) => setUser(data.user))
      .catch(() => {
        setUser(null);
        router.replace("/login");
      })
      .finally(() => setLoading(false));
  }, [router]);

  if (loading) {
    return <div className="flex min-h-screen items-center justify-center bg-black text-white">Loading...</div>;
  }

  if (!user) {
    return <div className="min-h-screen bg-black" />;
  }

  return children(user);
}
