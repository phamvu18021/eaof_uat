import { fetchAuth } from "@/ultil/fetchAuth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const api_url = process.env.API_URL_TSEH || "";
  const len = searchParams.get("len") || "9";
  let posts: any[] = [];

  try {
    const endPoint = `${api_url}/posts?_embed&per_page=${len}&status=draft&page=1`;
    const res = await fetchAuth({ url: endPoint, revalidate: 100 });
    if (!res.ok) {
      throw new Error(`Posts fetch failed with status: ${res.statusText}`);
    }
    const postsNotFeatureImage: any[] = (await res?.json()) || [];
    posts =
      postsNotFeatureImage?.length > 0
        ? postsNotFeatureImage?.map((post: any) => {
            const featured_image =
              post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

            return {
              ...post,
              featured_image
            };
          })
        : [];
  } catch (error) {
    console.error(error);
  }

  return NextResponse.json({ posts });
}
