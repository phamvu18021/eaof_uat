import { Nnt } from "@/features/nganh-nnt";
import { Metadata } from "next";
import { getGlobalMetadata } from "@/lib/seo-helper";
import { fetchContentPage } from "@/lib/fetchContentPage";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return getGlobalMetadata("nganh-ngon-ngu-trung", {
    title: "Ngành Ngôn ngữ Trung Quốc - Trường Đại học Mở Hà Nội",
    description:
      "Ngành Ngôn ngữ Trung Quốc hệ đại học từ xa Trường Đại học Mở Hà Nội. Bằng cấp được Bộ GD&ĐT công nhận."
  });
}

export default async function Page() {
  const data = await fetchContentPage("ngon-ngu-trung", 300);
  const homeContent = data?.posts?.[0] || null;

  return <Nnt initialData={homeContent} />;
}
