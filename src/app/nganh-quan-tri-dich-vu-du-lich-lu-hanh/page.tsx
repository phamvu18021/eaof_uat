import { Qtdlvlh } from "@/features/nganh-qtdlvlh";
import { Metadata } from "next";
import { getGlobalMetadata } from "@/lib/seo-helper";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return getGlobalMetadata("nganh-quan-tri-dich-vu-du-lich-lu-hanh", {
    title:
      "Ngành Quản trị dịch vụ Du lịch và Lữ hành - Trường Đại học Mở Hà Nội",
    description:
      "Ngành Quản trị dịch vụ Du lịch và Lữ hành hệ đại học từ xa Trường Đại học Mở Hà Nội. Bằng cấp được Bộ GD&ĐT công nhận."
  });
}

export default function Page() {
  return <Qtdlvlh />;
}
