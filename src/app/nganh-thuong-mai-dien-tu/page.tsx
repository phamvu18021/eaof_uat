import { Tmdt } from "@/features/nganh-tmdt";
import { Metadata } from "next";
import { getGlobalMetadata } from "@/lib/seo-helper";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return getGlobalMetadata("nganh-thuong-mai-dien-tu", {
    title: "Ngành Thương mại điện tử - Trường Đại học Mở Hà Nội",
    description:
      "Ngành Thương mại điện tử hệ đại học từ xa Trường Đại học Mở Hà Nội. Bằng cấp được Bộ GD&ĐT công nhận."
  });
}

export default function Page() {
  return <Tmdt />;
}
