import { Lkt } from "@/features/nganh-lkt";
import { Metadata } from "next";
import { getGlobalMetadata } from "@/lib/seo-helper";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return getGlobalMetadata("nganh-luat-kinh-te", {
    title: "Ngành Luật kinh tế - Trường Đại học Mở Hà Nội",
    description:
      "Ngành Luật kinh tế hệ đại học từ xa Trường Đại học Mở Hà Nội. Bằng cấp được Bộ GD&ĐT công nhận."
  });
}

export default function Page() {
  return <Lkt />;
}
