"use client";

import { RequireAuth } from "@/components/guards/RequireAuth";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { TripEditor } from "@/features/trips/TripEditor";

export function AddTripScreen() {
  return (
    <RequireAuth>
      {(user) => (
        <DashboardLayout user={user}>
          <TripEditor />
        </DashboardLayout>
      )}
    </RequireAuth>
  );
}
