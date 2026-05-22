import { Lienhe } from "@/features/hoc-thu";
import { Metadata } from "next";
import { getGlobalMetadata } from "@/lib/seo-helper";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return getGlobalMetadata("hoc-thu", {
    title: "Học thử - Trường Đại học Mở Hà Nội",
    description:
      "Đăng ký học thử miễn phí tại Trường Đại học Mở Hà Nội. Trải nghiệm trước khi quyết định."
  });
}

export default function Page() {
  return <Lienhe />;
}
