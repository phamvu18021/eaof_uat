import { Nnt } from "@/features/nganh-nnt";
import { Metadata } from "next";
import { getGlobalMetadata } from "@/lib/seo-helper";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return getGlobalMetadata("nganh-ngon-ngu-trung", {
    title: "Ngành Ngôn ngữ Trung Quốc - Trường Đại học Mở Hà Nội",
    description:
      "Ngành Ngôn ngữ Trung Quốc hệ đại học từ xa Trường Đại học Mở Hà Nội. Bằng cấp được Bộ GD&ĐT công nhận."
  });
}

export default function Page() {
  return <Nnt />;
}
