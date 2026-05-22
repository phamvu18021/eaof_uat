import { Qtdlvlh } from "@/features/nganh-qtdlvlh";
import { Metadata } from "next";
import { getGlobalMetadata } from "@/lib/seo-helper";
import { fetchContentPage } from "@/lib/fetchContentPage";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return getGlobalMetadata("nganh-quan-tri-dich-vu-du-lich-lu-hanh", {
    title:
      "Ngành Quản trị dịch vụ Du lịch và Lữ hành - Trường Đại học Mở Hà Nội",
    description:
      "Ngành Quản trị dịch vụ Du lịch và Lữ hành hệ đại học từ xa Trường Đại học Mở Hà Nội. Bằng cấp được Bộ GD&ĐT công nhận."
  });
}

export default async function Page() {
  const data = await fetchContentPage("quan-tri-dich-vu-du", 300);
  const homeContent = data?.posts?.[0] || null;

  return <Qtdlvlh initialData={homeContent} />;
}
