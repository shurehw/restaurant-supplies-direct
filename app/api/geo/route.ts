import { NextRequest, NextResponse } from "next/server";
import { getGeoFromHeaders } from "@/lib/geo";

export const runtime = "edge";

/**
 * API route to expose geolocation data to client
 * Uses Vercel Edge Network headers
 */
export async function GET(request: NextRequest) {
  const geo = getGeoFromHeaders(request.headers);

  return NextResponse.json(geo, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
