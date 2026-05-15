import type { ResultSetHeader } from "mysql2";
import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { getPool } from "@/lib/db";

export async function POST(request: Request) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ message: "Unauthorized, please login" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { vehicle, date, fromLocation, toLocation, deposit, cost, comments } = body;

    if (!["Truck1", "Truck2"].includes(vehicle)) {
      return NextResponse.json({ message: "Please select a valid vehicle" }, { status: 400 });
    }
    if (!date) {
      return NextResponse.json({ message: "Trip date is required" }, { status: 400 });
    }

    const pool = await getPool();
    await pool.query<ResultSetHeader>(
      `INSERT INTO trips
        (driver_id, vehicle, trip_date, from_location, to_location, deposit, cost, comments)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        user.id,
        vehicle,
        String(date).slice(0, 10),
        fromLocation || null,
        toLocation || null,
        Number(deposit) || 0,
        Number(cost) || 0,
        comments || "",
      ],
    );

    return NextResponse.json({ message: "Trip created successfully" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating trip", error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    );
  }
}

