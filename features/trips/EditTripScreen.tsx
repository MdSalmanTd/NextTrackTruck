"use client";

import { RequireAuth } from "@/components/guards/RequireAuth";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { TripEditor } from "@/features/trips/TripEditor";

export function EditTripScreen({ editId }: { editId: string }) {
  return (
    <RequireAuth>
      {(user) => (
        <DashboardLayout user={user}>
          <TripEditor editId={editId} />
        </DashboardLayout>
      )}
    </RequireAuth>
  );
}
