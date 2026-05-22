import { Lienhe } from "@/features/hoc-thu";
import { Metadata } from "next";
import { getGlobalMetadata } from "@/lib/seo-helper";
import { fetchContentPage } from "@/lib/fetchContentPage";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return getGlobalMetadata("hoc-thu", {
    title: "Học thử - Trường Đại học Mở Hà Nội",
    description:
      "Đăng ký học thử miễn phí tại Trường Đại học Mở Hà Nội. Trải nghiệm trước khi quyết định."
  });
}

export default async function Page() {
  const data = await fetchContentPage("hoc-thu", 300);
  const homeContent = data?.posts?.[0] || null;

  return <Lienhe initialData={homeContent} />;
}
