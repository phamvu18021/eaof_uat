import { Luat } from "@/features/nganh-luat";
import { Metadata } from "next";
import { getGlobalMetadata } from "@/lib/seo-helper";
import { fetchContentPage } from "@/lib/fetchContentPage";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return getGlobalMetadata("nganh-luat", {
    title: "Ngành Luật - Trường Đại học Mở Hà Nội",
    description:
      "Ngành Luật hệ đại học từ xa Trường Đại học Mở Hà Nội. Học trực tuyến linh hoạt, bằng cấp quốc gia."
  });
}

export default async function Page() {
  const data = await fetchContentPage("luat", 300);
  const homeContent = data?.posts?.[0] || null;

  return <Luat initialData={homeContent} />;
}
