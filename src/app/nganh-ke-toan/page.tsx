import { Kt } from "@/features/nganh-kt";
import { Metadata } from "next";
import { getGlobalMetadata } from "@/lib/seo-helper";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return getGlobalMetadata("nganh-ke-toan", {
    title: "Ngành Kế toán - Trường Đại học Mở Hà Nội",
    description:
      "Ngành Kế toán hệ đại học từ xa Trường Đại học Mở Hà Nội. Bằng cấp được Bộ GD&ĐT công nhận."
  });
}

export default function Page() {
  return <Kt />;
}
