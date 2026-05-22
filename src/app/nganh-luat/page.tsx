import { Luat } from "@/features/nganh-luat";
import { Metadata } from "next";
import { getGlobalMetadata } from "@/lib/seo-helper";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return getGlobalMetadata("nganh-luat", {
    title: "Ngành Luật - Trường Đại học Mở Hà Nội",
    description:
      "Ngành Luật hệ đại học từ xa Trường Đại học Mở Hà Nội. Bằng cấp được Bộ GD&ĐT công nhận."
  });
}

export default function Page() {
  return <Luat />;
}
