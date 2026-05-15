"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { TextInput } from "@/components/ui/TextInput";
import { api } from "@/lib/api-client";
import { emptyTrip } from "@/features/trips/trip-form";
import { VehicleSelector } from "@/features/trips/VehicleSelector";
import type { Trip, TripForm } from "@/types/domain";

export function TripEditor({ editId }: { editId?: string }) {
  const router = useRouter();
  const [form, setForm] = useState<TripForm>(emptyTrip);
  const [loading, setLoading] = useState(Boolean(editId));
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!editId) return;

    api<Trip[]>("/api/trips/all")
      .then((trips) => {
        const trip = trips.find((item) => item._id === editId);
        if (!trip) throw new Error("Trip not found");
        setForm({
          vehicle: trip.vehicle,
          date: trip.date.slice(0, 10),
          fromLocation: trip.fromLocation,
          toLocation: trip.toLocation,
          deposit: String(trip.deposit || ""),
          cost: String(trip.cost || ""),
          comments: trip.comments,
        });
      })
      .catch((err) => setError(err instanceof Error ? err.message : "Failed to fetch trip"))
      .finally(() => setLoading(false));
  }, [editId]);

  async function submit(event: FormEvent) {
    event.preventDefault();
    setSaving(true);
    setMessage("");
    setError("");

    try {
      await api(editId ? `/api/trips/update/${editId}` : "/api/trips/create", {
        method: editId ? "PUT" : "POST",
        body: JSON.stringify(form),
      });
      setMessage(editId ? "Trip updated successfully!" : "Trip added successfully!");
      if (!editId) setForm(emptyTrip);
      setTimeout(() => router.push("/all-trips"), 900);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save trip");
    } finally {
      setSaving(false);
    }
  }

  if (loading) return <div className="p-10">Loading...</div>;

  return (
    <section className="min-h-screen overflow-y-auto p-6 md:p-10">
      <form onSubmit={submit} className="mx-auto max-w-3xl space-y-6">
        <h1 className="text-2xl font-bold">{editId ? "Edit Trip" : "Add New Trip"}</h1>
        {message && <p className="rounded border border-emerald-500/30 bg-emerald-500/10 p-3 text-emerald-300">{message}</p>}
        {error && <p className="rounded border border-red-500/30 bg-red-500/10 p-3 text-red-300">{error}</p>}
        <VehicleSelector value={form.vehicle} onChange={(vehicle) => setForm({ ...form, vehicle })} />
        <TextInput label="Trip Date" type="date" value={form.date} onChange={(date) => setForm({ ...form, date })} />
        <TextInput label="From Location" value={form.fromLocation} onChange={(fromLocation) => setForm({ ...form, fromLocation })} />
        <TextInput label="To Location" value={form.toLocation} onChange={(toLocation) => setForm({ ...form, toLocation })} />
        <div className="grid gap-4 sm:grid-cols-2">
          <TextInput label="Deposit Amount" type="number" value={form.deposit} onChange={(deposit) => setForm({ ...form, deposit })} />
          <TextInput label="Trip Cost" type="number" value={form.cost} onChange={(cost) => setForm({ ...form, cost })} />
        </div>
        <label className="block">
          <span className="mb-1 block text-sm text-neutral-400">Comments</span>
          <textarea
            value={form.comments}
            onChange={(event) => setForm({ ...form, comments: event.target.value })}
            rows={4}
            className="w-full rounded-lg border border-white/15 bg-neutral-950 px-3 py-2.5 text-white outline-none focus:border-white"
          />
        </label>
        <button disabled={saving} className="w-full rounded-lg bg-white px-4 py-3 font-semibold text-black disabled:opacity-50">
          {saving ? "Saving..." : editId ? "Save Changes" : "Add Trip"}
        </button>
      </form>
    </section>
  );
}
