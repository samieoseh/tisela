import { hasCookie } from "cookies-next";
import { NextResponse } from "next/server";

export function middleware(request) {
  const cookie = request.cookies.get("auth");

  if (cookie) {
    return null;
  }
  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: ["/profile"],
};
