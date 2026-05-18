import { Home } from "@/features/home";
import { Metadata } from "next";
import { getGlobalMetadata } from "@/lib/seo-helper";

export async function generateMetadata(): Promise<Metadata> {
  return getGlobalMetadata(undefined, {
    title: "Đại học Thái Nguyên - Hệ đào tạo từ xa",
    description:
      "Trang tuyển sinh chính thức hệ đào tạo từ xa Đại học Thái Nguyên. Đăng ký ngay để nhận tư vấn miễn phí."
  });
}

async function getPageData() {
  const domain = process.env.NEXT_PUBLIC_DOMAIN || "https://etnu.edu.vn";
  const [contentRes, newsRes, notifisRes] = await Promise.all([
    fetch(`${domain}/api/content-page/?type=trang-chu`, {
      next: { revalidate: 300 }
    }),
    fetch(`${domain}/api/posts/?type=news&page=1`, {
      next: { revalidate: 300 }
    }),
    fetch(`${domain}/api/posts/?type=notifis&page=1`, {
      next: { revalidate: 300 }
    })
  ]);

  const [contentData, newsData, notifisData] = await Promise.all([
    contentRes.ok ? contentRes.json() : null,
    newsRes.ok ? newsRes.json() : null,
    notifisRes.ok ? notifisRes.json() : null
  ]);

  return {
    content: contentData?.posts?.[0] || null,
    news: newsData?.posts?.slice(0, 4) || [],
    notifis: notifisData?.posts?.slice(0, 4) || []
  };
}

export default async function Page() {
  const data = await getPageData();
  return (
    <Home
      initialData={data.content}
      initialNews={data.news}
      initialNotifis={data.notifis}
    />
  );
}
