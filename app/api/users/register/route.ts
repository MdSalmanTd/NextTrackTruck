import bcrypt from "bcryptjs";
import type { ResultSetHeader, RowDataPacket } from "mysql2";
import { NextResponse } from "next/server";
import { authCookie, createToken } from "@/lib/auth";
import { getPool } from "@/lib/db";

type ExistingUser = RowDataPacket & { id: number };
type CountRow = RowDataPacket & { total: number };

export async function POST(request: Request) {
  try {
    const { fullname, email, password, contact } = await request.json();

    if (!fullname || !email || !password || !contact) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }
    if (String(password).length < 8) {
      return NextResponse.json({ message: "Password must be at least 8 characters" }, { status: 400 });
    }
    if (!/^01\d{9}$/.test(String(contact))) {
      return NextResponse.json({ message: "Please fill a valid contact number" }, { status: 400 });
    }

    const pool = await getPool();
    const normalizedEmail = String(email).trim().toLowerCase();
    const [existing] = await pool.query<ExistingUser[]>(
      "SELECT id FROM users WHERE email = ? LIMIT 1",
      [normalizedEmail],
    );

    if (existing.length) {
      return NextResponse.json({ message: "User already exists" }, { status: 400 });
    }

    const [countRows] = await pool.query<CountRow[]>("SELECT COUNT(*) AS total FROM users");
    const role = countRows[0]?.total === 0 ? "owner" : "driver";
    const hashedPassword = await bcrypt.hash(password, 10);
    const [result] = await pool.query<ResultSetHeader>(
      "INSERT INTO users (fullname, email, password, contact, role) VALUES (?, ?, ?, ?, ?)",
      [String(fullname).trim(), normalizedEmail, hashedPassword, String(contact).trim(), role],
    );

    const token = createToken({ id: result.insertId, email: normalizedEmail });
    const response = NextResponse.json({ message: "User registered successfully" }, { status: 201 });
    response.cookies.set(authCookie(token));
    return response;
  } catch (error) {
    return NextResponse.json(
      { message: "Error registering user", error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    );
  }
}
