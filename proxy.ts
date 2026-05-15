import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token")?.value;

  const protectedRoutes = ["/dashboard", "/add-trip", "/edit-trip", "/all-trips"];
  if (protectedRoutes.some((route) => pathname.startsWith(route)) && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const authRoutes = ["/login", "/register"];
  if (authRoutes.some((route) => pathname.startsWith(route)) && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/add-trip/:path*",
    "/edit-trip/:path*",
    "/all-trips/:path*",
    "/login/:path*",
    "/register/:path*",
  ],
};
