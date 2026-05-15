"use client";

import { RequireAuth } from "@/components/guards/RequireAuth";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { DashboardView } from "@/features/dashboard/DashboardView";

export function DashboardScreen() {
  return (
    <RequireAuth>
      {(user) => (
        <DashboardLayout user={user}>
          <DashboardView user={user} />
        </DashboardLayout>
      )}
    </RequireAuth>
  );
}
