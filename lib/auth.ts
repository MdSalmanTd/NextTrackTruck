import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import type { RowDataPacket } from "mysql2";
import { getPool } from "./db";

const cookieName = "token";

export type AuthUser = {
  _id: number;
  id: number;
  fullname: string;
  email: string;
  contact: string;
  role: "driver" | "owner" | "admin";
};

type UserRow = RowDataPacket & {
  id: number;
  fullname: string;
  email: string;
  contact: string;
  role: "driver" | "owner" | "admin";
};

function jwtSecret() {
  return process.env.JWT_SECRET || "tracktruck-local-secret";
}

export function createToken(user: { id: number; email: string }) {
  return jwt.sign({ id: user.id, email: user.email }, jwtSecret(), {
    expiresIn: "24h",
  });
}

export async function getCurrentUser(): Promise<AuthUser | null> {
  const token = (await cookies()).get(cookieName)?.value;
  if (!token) return null;

  try {
    const decoded = jwt.verify(token, jwtSecret()) as { id: number };
    const pool = await getPool();
    const [rows] = await pool.query<UserRow[]>(
      "SELECT id, fullname, email, contact, role FROM users WHERE id = ? LIMIT 1",
      [decoded.id],
    );

    const user = rows[0];
    if (!user) return null;

    return {
      _id: user.id,
      id: user.id,
      fullname: user.fullname,
      email: user.email,
      contact: user.contact,
      role: user.role,
    };
  } catch {
    return null;
  }
}

export function authCookie(token: string) {
  return {
    name: cookieName,
    value: token,
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24,
  };
}

export function isAdmin(user: AuthUser) {
  return user.role === "admin" || user.role === "owner";
}

