import { Qtks } from "@/features/nganh-qtks";
import { Metadata } from "next";
import { getGlobalMetadata } from "@/lib/seo-helper";
import { fetchContentPage } from "@/lib/fetchContentPage";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return getGlobalMetadata("nganh-quan-tri-khach-san", {
    title: "Ngành Quản trị khách sạn - Trường Đại học Mở Hà Nội",
    description:
      "Ngành Quản trị khách sạn hệ đại học từ xa Trường Đại học Mở Hà Nội. Bằng cấp được Bộ GD&ĐT công nhận."
  });
}

export default async function Page() {
  const data = await fetchContentPage("quan-tri-khach-san", 300);
  const homeContent = data?.posts?.[0] || null;

  return <Qtks initialData={homeContent} />;
}
