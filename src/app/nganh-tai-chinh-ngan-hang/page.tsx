import { Tcnh } from "@/features/nganh-tcnh";
import { Metadata } from "next";
import { getGlobalMetadata } from "@/lib/seo-helper";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return getGlobalMetadata("nganh-tai-chinh-ngan-hang", {
    title: "Ngành Tài chính ngân hàng - Trường Đại học Mở Hà Nội",
    description:
      "Ngành Tài chính ngân hàng hệ đại học từ xa Trường Đại học Mở Hà Nội. Bằng cấp được Bộ GD&ĐT công nhận."
  });
}

export default function Page() {
  return <Tcnh />;
}
