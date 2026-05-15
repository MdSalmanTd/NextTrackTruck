import bcrypt from "bcryptjs";
import type { RowDataPacket } from "mysql2";
import { NextResponse } from "next/server";
import { authCookie, createToken } from "@/lib/auth";
import { getPool } from "@/lib/db";

type UserRow = RowDataPacket & {
  id: number;
  email: string;
  password: string;
};

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    const pool = await getPool();
    const [rows] = await pool.query<UserRow[]>(
      "SELECT id, email, password FROM users WHERE email = ? LIMIT 1",
      [String(email || "").trim().toLowerCase()],
    );
    const user = rows[0];

    if (!user || !(await bcrypt.compare(password || "", user.password))) {
      return NextResponse.json({ message: "Email or password is incorrect" }, { status: 400 });
    }

    const token = createToken(user);
    const response = NextResponse.json({ message: "User logged in successfully" });
    response.cookies.set(authCookie(token));
    return response;
  } catch (error) {
    return NextResponse.json(
      { message: "Error logging in user", error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    );
  }
}
