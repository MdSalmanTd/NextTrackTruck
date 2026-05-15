import { useEffect, useState } from "react";
import { api } from "@/lib/api-client";
import type { User } from "@/types/domain";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const data = await api<{ user: User }>("/api/users/me");
        setUser(data.user);
        setError(null);
      } catch (err) {
        setUser(null);
        setError(err instanceof Error ? err.message : "Failed to fetch user");
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  return { user, loading, error };
}
