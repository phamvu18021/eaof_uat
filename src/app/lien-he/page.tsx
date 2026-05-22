import ContactInfo from "@/features/lien-he";
import { Metadata } from "next";
import { getGlobalMetadata } from "@/lib/seo-helper";
import { fetchContentPage } from "@/lib/fetchContentPage";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return getGlobalMetadata("lien-he", {
    title: "Liên hệ - Trường Đại học Mở Hà Nội",
    description:
      "Liên hệ tư vấn tuyển sinh Trường Đại học Mở Hà Nội. Đội ngũ tư vấn viên sẵn sàng hỗ trợ bạn 24/7."
  });
}

export default async function Page() {
  const data = await fetchContentPage("lien-he", 300);
  const homeContent = data?.posts?.[0] || null;

  return <ContactInfo initialData={homeContent} />;
}
