// Geolocation utilities for LA-specific features

export interface GeoLocation {
  city?: string;
  region?: string;
  country?: string;
  zipCode?: string;
  isLA: boolean;
}

// LA County ZIP code ranges (900xx-902xx)
const LA_ZIP_RANGES = [
  { start: 90001, end: 90089 },
  { start: 90091, end: 90099 },
  { start: 90101, end: 90103 },
  { start: 90201, end: 90213 },
];

/**
 * Check if a ZIP code is in the LA area
 */
export function isLAZipCode(zipCode: string): boolean {
  const zip = parseInt(zipCode, 10);
  if (isNaN(zip)) return false;

  return LA_ZIP_RANGES.some(
    (range) => zip >= range.start && zip <= range.end
  );
}

/**
 * Get geolocation from Vercel headers (server-side)
 */
export function getGeoFromHeaders(headers: Headers): GeoLocation {
  const city = headers.get("x-vercel-ip-city") || undefined;
  const region = headers.get("x-vercel-ip-country-region") || undefined;
  const country = headers.get("x-vercel-ip-country") || undefined;

  // Check if user is in LA based on city name
  const isLA = Boolean(
    city?.toLowerCase() === "los angeles" ||
    (region?.toLowerCase() === "ca" && city?.toLowerCase().includes("los angeles"))
  );

  return {
    city,
    region,
    country,
    isLA,
  };
}

/**
 * Get geolocation from browser (client-side)
 * Note: This uses IP-based geolocation via Vercel edge
 */
export async function getClientGeo(): Promise<GeoLocation> {
  try {
    // In production, Vercel automatically adds geo headers
    // For development, return mock data or use external API
    const response = await fetch("/api/geo");
    return await response.json();
  } catch (error) {
    console.error("Geo detection failed:", error);
    return { isLA: false };
  }
}

/**
 * Check if checkout ZIP qualifies for LA wholesale upgrade
 */
export function shouldShowLAUpgrade(zipCode: string): boolean {
  return isLAZipCode(zipCode);
}
