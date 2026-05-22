import { Lkt } from "@/features/nganh-lkt";
import { Metadata } from "next";
import { getGlobalMetadata } from "@/lib/seo-helper";
import { fetchContentPage } from "@/lib/fetchContentPage";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return getGlobalMetadata("nganh-luat-kinh-te", {
    title: "Ngành Luật kinh tế - Trường Đại học Mở Hà Nội",
    description:
      "Ngành Luật kinh tế hệ đại học từ xa Trường Đại học Mở Hà Nội. Bằng cấp được Bộ GD&ĐT công nhận."
  });
}

export default async function Page() {
  const data = await fetchContentPage("luat-kinh-te", 300);
  const homeContent = data?.posts?.[0] || null;

  return <Lkt initialData={homeContent} />;
}
