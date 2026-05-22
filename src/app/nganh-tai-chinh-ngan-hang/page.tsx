import { Tcnh } from "@/features/nganh-tcnh";
import { Metadata } from "next";
import { getGlobalMetadata } from "@/lib/seo-helper";
import { fetchContentPage } from "@/lib/fetchContentPage";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return getGlobalMetadata("nganh-tai-chinh-ngan-hang", {
    title: "Ngành Tài chính ngân hàng - Trường Đại học Mở Hà Nội",
    description:
      "Ngành Tài chính ngân hàng hệ đại học từ xa Trường Đại học Mở Hà Nội. Bằng cấp được Bộ GD&ĐT công nhận."
  });
}

export default async function Page() {
  const data = await fetchContentPage("tai-chinh-ngan-hang", 300);
  const homeContent = data?.posts?.[0] || null;

  return <Tcnh initialData={homeContent} />;
}
