import { NextResponse } from "next/server";

export function middleware(request) {
  //   const cookie = request.cookies.get("auth");
  //   const protectedPathsWhenLoggedIn = ["/", "/login", "/signup"];
  //   const currentPath = request.nextUrl.pathname;
  //   if (cookie) {
  //     // user has logged in
  //     if (protectedPathsWhenLoggedIn.includes(currentPath)) {
  //       return NextResponse.redirect(new URL("/profile", request.url));
  //     }
  //   }
  //   // user is not logged in
  //   else if (protectedPathsWhenLoggedIn.includes(currentPath)) {
  //     return NextResponse.next();
  //   }
  //   return NextResponse.redirect(new URL("/login", request.url));
}

// export const config = {
//   matcher: ["/", "/login", "/signup", "/profile"],
// };
