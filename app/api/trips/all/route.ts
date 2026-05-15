import type { RowDataPacket } from "mysql2";
import { NextResponse } from "next/server";
import { getCurrentUser, isAdmin } from "@/lib/auth";
import { getPool } from "@/lib/db";

type TripRow = RowDataPacket & {
  id: number;
  driver_id: number;
  driver_name: string;
  vehicle: string;
  trip_date: string;
  from_location: string | null;
  to_location: string | null;
  deposit: string;
  cost: string;
  comments: string | null;
  created_at: Date;
  updated_at: Date;
};

export async function GET() {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ message: "Unauthorized, please login" }, { status: 401 });
  }
  if (!isAdmin(user)) {
    return NextResponse.json({ message: "Access denied. Admins only." }, { status: 403 });
  }

  const pool = await getPool();
  const [rows] = await pool.query<TripRow[]>(`
    SELECT
      t.id,
      t.driver_id,
      u.fullname AS driver_name,
      t.vehicle,
      DATE_FORMAT(t.trip_date, '%Y-%m-%d') AS trip_date,
      t.from_location,
      t.to_location,
      t.deposit,
      t.cost,
      t.comments,
      t.created_at,
      t.updated_at
    FROM trips t
    INNER JOIN users u ON u.id = t.driver_id
    ORDER BY t.trip_date DESC, t.id DESC
  `);

  return NextResponse.json(
    rows.map((trip) => ({
      _id: String(trip.id),
      id: trip.id,
      driver: { _id: trip.driver_id, fullname: trip.driver_name },
      vehicle: trip.vehicle,
      date: trip.trip_date,
      fromLocation: trip.from_location || "",
      toLocation: trip.to_location || "",
      deposit: Number(trip.deposit),
      cost: Number(trip.cost),
      comments: trip.comments || "",
      createdAt: trip.created_at,
      updatedAt: trip.updated_at,
    })),
  );
}

