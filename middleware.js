import { NextResponse } from "next/server";

export async function middleware(request) {
  try {
    const res = await fetch(
      `https://api.ipregistry.co/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`
    );
    const data = await res.json();
    console.log("IP Code:", data.location?.country?.code);
    const countryCode = data.location?.country?.code;
    if (countryCode !== "US") {
      return NextResponse.redirect("https://www.youtube.com");
    }
  } catch (error) {
    console.error("IP lookup failed:", error);
  }

  return NextResponse.next();
}
