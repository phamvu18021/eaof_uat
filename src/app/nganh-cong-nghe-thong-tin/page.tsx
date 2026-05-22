import { Cntt } from "@/features/nganh-cntt";
import { Metadata } from "next";
import { getGlobalMetadata } from "@/lib/seo-helper";
import { fetchContentPage } from "@/lib/fetchContentPage";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return getGlobalMetadata("nganh-cong-nghe-thong-tin", {
    title: "Ngành Công nghệ thông tin - Trường Đại học Mở Hà Nội",
    description:
      "Ngành Công nghệ thông tin hệ đại học từ xa Trường Đại học Mở Hà Nội. Bằng cấp được công nhận toàn quốc."
  });
}

export default async function Page() {
  const data = await fetchContentPage("cong-nghe-thong-tin", 300);
  const homeContent = data?.posts?.[0] || null;

  return <Cntt initialData={homeContent} />;
}
