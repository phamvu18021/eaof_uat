import { fetchAuth } from "@/ultil/fetchAuth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const type = searchParams.get("type") || "";
  const page = searchParams.get("page") || "";
  const api_url = process.env.API_URL_TSEH || "";
  const idNew = searchParams.get("idNew") || "";
  const idNotifi = searchParams.get("idNotifi") || "";

  let posts: any[] = [];
  let totalPosts: string = "0";

  try {
    const id = type === "news" ? idNew : type === "notifis" ? idNotifi : null;
    const endPoint = id
      ? `${api_url}/posts?_embed&per_page=8&status=publish&page=${page}&categories=${id}`
      : `${api_url}/posts?_embed&per_page=8&status=publish&page=${page}`;

    const res = await fetchAuth({ url: endPoint, revalidate: 1 });
    let ttp = Number(res.headers?.get("X-WP-Total") || "0");
    if (ttp > 5) {
      totalPosts = String(ttp - 5);
    } else {
      totalPosts = String(ttp);
    }

    const postsNotFeatureImage: any[] = (await res?.json()) || [];
    const filteredPosts = postsNotFeatureImage.filter((post) => {
      const slug = post.slug || "";
      const excludedSlugs = [
        "lich-khai-giang",
        "form-main",
        "form-poup",
        "gioi-thieu",
        "cta"
      ];
      return !excludedSlugs.includes(slug);
    });
    posts =
      filteredPosts?.length > 0
        ? filteredPosts?.map((post: any) => {
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

  return NextResponse.json({ posts, totalPosts });
}
