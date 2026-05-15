"use client";

import { RequireAuth } from "@/components/guards/RequireAuth";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { TripsTable } from "@/features/trips/TripsTable";

export function AllTripsScreen() {
  return (
    <RequireAuth>
      {(user) => (
        <DashboardLayout user={user}>
          <TripsTable />
        </DashboardLayout>
      )}
    </RequireAuth>
  );
}
