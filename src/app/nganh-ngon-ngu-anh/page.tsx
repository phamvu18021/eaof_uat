import { Nna } from "@/features/nganh-nna";
import { Metadata } from "next";
import { getGlobalMetadata } from "@/lib/seo-helper";
import { fetchContentPage } from "@/lib/fetchContentPage";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return getGlobalMetadata("nganh-ngon-ngu-anh", {
    title: "Ngành Ngôn ngữ Anh - Trường Đại học Mở Hà Nội",
    description:
      "Ngành Ngôn ngữ Anh hệ đại học từ xa Trường Đại học Mở Hà Nội. Bằng cấp được Bộ GD&ĐT công nhận."
  });
}

export default async function Page() {
  const data = await fetchContentPage("ngon-ngu-anh", 300);
  const homeContent = data?.posts?.[0] || null;

  return <Nna initialData={homeContent} />;
}
