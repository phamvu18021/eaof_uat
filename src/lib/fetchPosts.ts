import { fetchAuth } from "@/ultil/fetchAuth";

export async function fetchPosts(
  type: string,
  page: string | number = 1
): Promise<any | null> {
  const api_url =
    process.env.API_URL_TSEH || "https://admin.tuyensinh-ehou.vn/wp-json/wp/v2";
  const idNew = process.env.NEXT_PUBLIC_ID_NEW || "323";
  const idNotifi = process.env.NEXT_PUBLIC_ID_NOTIFI || "1";
  const id = type === "news" ? idNew : type === "notifis" ? idNotifi : null;

  const endPoint = id
    ? `${api_url}/posts?_embed&per_page=8&status=publish&page=${page}&categories=${id}`
    : `${api_url}/posts?_embed&per_page=8&status=publish&page=${page}`;

  // Loại bỏ các slug nội bộ không phải bài viết thật
  const excludedSlugs = [
    "lich-khai-giang",
    "form-main",
    "form-poup",
    "gioi-thieu",
    "cta"
  ];

  try {
    const res = await fetchAuth({ url: endPoint, revalidate: 300 });

    if (!res.ok) {
      console.warn(`fetchPosts failed for type "${type}": ${res.statusText}`);
      return null;
    }

    const ttp = Number(res.headers?.get("X-WP-Total") || "0");
    const totalPosts = ttp > 5 ? String(ttp - 5) : String(ttp);

    const postsRaw: any[] = (await res?.json()) || [];
    const posts = postsRaw
      .filter((post) => !excludedSlugs.includes(post.slug || ""))
      .map((post: any) => ({
        ...post,
        featured_image:
          post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null
      }));

    return { posts, totalPosts };
  } catch (error) {
    console.error(`Error in fetchPosts for type "${type}":`, error);
    return null;
  }
}
