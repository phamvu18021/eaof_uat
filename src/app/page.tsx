import { Home } from "@/features/home";
import { Metadata } from "next";
import { getGlobalMetadata } from "@/lib/seo-helper";
import { fetchContentPage } from "@/lib/fetchContentPage";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return getGlobalMetadata(undefined, {
    title: "Trường Đại học Mở Hà Nội - Tuyển sinh hệ đại học từ xa",
    description:
      "Trang tuyển sinh chính thức Trường Đại học Mở Hà Nội. Đăng ký ngay để nhận tư vấn miễn phí."
  });
}

export default async function Page() {
  const data = await fetchContentPage("trang-chu", 300);
  const homeContent = data?.posts?.[0] || null;

  return <Home initialData={homeContent} />;
}
