import type { ResultSetHeader } from "mysql2";
import { NextResponse } from "next/server";
import { getCurrentUser, isAdmin } from "@/lib/auth";
import { getPool } from "@/lib/db";

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ message: "Unauthorized, please login" }, { status: 401 });
  }
  if (!isAdmin(user)) {
    return NextResponse.json({ message: "Access denied. Admins only." }, { status: 403 });
  }

  try {
    const { id } = await params;
    const body = await request.json();
    const pool = await getPool();
    const [result] = await pool.query<ResultSetHeader>(
      `UPDATE trips
       SET vehicle = ?, trip_date = ?, from_location = ?, to_location = ?, deposit = ?, cost = ?, comments = ?
       WHERE id = ?`,
      [
        body.vehicle,
        String(body.date).slice(0, 10),
        body.fromLocation || null,
        body.toLocation || null,
        Number(body.deposit) || 0,
        Number(body.cost) || 0,
        body.comments || "",
        id,
      ],
    );

    if (!result.affectedRows) {
      return NextResponse.json({ message: "Trip not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Trip updated successfully" });
  } catch (error) {
    return NextResponse.json(
      { message: "Error updating trip", error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    );
  }
}

