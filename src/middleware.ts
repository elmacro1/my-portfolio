import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log(request.headers.get("accept-language"));
  return NextResponse.redirect(new URL("/es", request.url));
}

export const config = {
  matcher: "/",
};
