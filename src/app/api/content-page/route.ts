import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const type = searchParams.get("type") || "";
  const api_url = process.env.API_URL_TSEH || "";
  const hasSSL = process.env.NEXT_PUBLIC_HAS_SSL || "true";
  if (hasSSL === "false") process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";

  let contentPage: any[] = [];

  try {
    const endPoint = `${api_url}/${type}`;
    const res = await fetch(endPoint, {
      next: { revalidate: 1 }
    });
    if (!res.ok) {
      throw new Error(`Posts fetch failed with status: ${res.statusText}`);
    }
    contentPage = (await res?.json()) || [];
  } catch (error) {
    console.error(error);
  }

  return NextResponse.json({ contentPage });
}
