import { About } from "@/features/about";
import { Metadata } from "next";
import { getGlobalMetadata } from "@/lib/seo-helper";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return getGlobalMetadata("gioi-thieu", {
    title: "Giới thiệu - Trường Đại học Mở Hà Nội",
    description:
      "Giới thiệu về Trường Đại học Mở Hà Nội, hệ đào tạo từ xa chất lượng cao được Bộ GD&ĐT công nhận."
  });
}

export default function Page() {
  return <About />;
}
