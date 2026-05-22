import { Qtks } from "@/features/nganh-qtks";
import { Metadata } from "next";
import { getGlobalMetadata } from "@/lib/seo-helper";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return getGlobalMetadata("nganh-quan-tri-khach-san", {
    title: "Ngành Quản trị khách sạn - Trường Đại học Mở Hà Nội",
    description:
      "Ngành Quản trị khách sạn hệ đại học từ xa Trường Đại học Mở Hà Nội. Bằng cấp được Bộ GD&ĐT công nhận."
  });
}

export default function Page() {
  return <Qtks />;
}
