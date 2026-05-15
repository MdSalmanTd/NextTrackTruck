"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api-client";
import type { Trip } from "@/types/domain";

export function TripsTable() {
  const router = useRouter();
  const [trips, setTrips] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    api<Trip[]>("/api/trips/all")
      .then(setTrips)
      .catch((err) => setError(err instanceof Error ? err.message : "Failed to fetch trips"))
      .finally(() => setLoading(false));
  }, []);

  function downloadCSV() {
    const headers = ["Driver", "Vehicle", "Date", "From", "To", "Deposit", "Cost", "Comments"];
    const rows = trips.map((trip) => [
      trip.driver?.fullname || "N/A",
      trip.vehicle,
      trip.date,
      trip.fromLocation,
      trip.toLocation,
      trip.deposit,
      trip.cost,
      trip.comments,
    ]);
    const csv = [headers, ...rows].map((row) => row.map((field) => `"${String(field).replace(/"/g, '""')}"`).join(",")).join("\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = "trips.csv";
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <section className="min-h-screen overflow-x-auto p-6 md:p-10">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h1 className="text-2xl font-bold">All Trips</h1>
        <button onClick={downloadCSV} className="rounded bg-white px-4 py-2 text-sm font-semibold text-black">
          Download CSV
        </button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-300">{error}</p>}
      {!loading && !error && (
        <table className="min-w-full border border-white/10 text-center text-sm">
          <thead className="bg-white/10">
            <tr>
              {["Driver", "Vehicle", "Date", "From", "To", "Deposit", "Cost", "Comments", "Actions"].map((head) => (
                <th key={head} className="border-b border-white/10 px-4 py-3">
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {trips.map((trip) => (
              <tr key={trip._id} className="hover:bg-white/5">
                <td className="border-b border-white/10 px-4 py-3">{trip.driver?.fullname || "N/A"}</td>
                <td className="border-b border-white/10 px-4 py-3">{trip.vehicle}</td>
                <td className="border-b border-white/10 px-4 py-3">{trip.date}</td>
                <td className="border-b border-white/10 px-4 py-3">{trip.fromLocation}</td>
                <td className="border-b border-white/10 px-4 py-3">{trip.toLocation}</td>
                <td className="border-b border-white/10 px-4 py-3">{trip.deposit}</td>
                <td className="border-b border-white/10 px-4 py-3">{trip.cost}</td>
                <td className="border-b border-white/10 px-4 py-3">{trip.comments}</td>
                <td className="border-b border-white/10 px-4 py-3">
                  <button onClick={() => router.push(`/edit-trip/${trip._id}`)} className="rounded bg-white px-3 py-1 text-black">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}
