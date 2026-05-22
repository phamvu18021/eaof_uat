import { Tmdt } from "@/features/nganh-tmdt";
import { Metadata } from "next";
import { getGlobalMetadata } from "@/lib/seo-helper";
import { fetchContentPage } from "@/lib/fetchContentPage";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return getGlobalMetadata("nganh-thuong-mai-dien-tu", {
    title: "Ngành Thương mại điện tử - Trường Đại học Mở Hà Nội",
    description:
      "Ngành Thương mại điện tử hệ đại học từ xa Trường Đại học Mở Hà Nội. Bằng cấp được Bộ GD&ĐT công nhận."
  });
}

export default async function Page() {
  const data = await fetchContentPage("thuong-mai-dien-tu", 300);
  const homeContent = data?.posts?.[0] || null;

  return <Tmdt initialData={homeContent} />;
}
