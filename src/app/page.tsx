import { Home } from "@/features/home";
import { Metadata } from "next";
import { getGlobalMetadata } from "@/lib/seo-helper";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return getGlobalMetadata(undefined, {
    title: "Trường Đại học Mở Hà Nội - Tuyển sinh hệ đại học từ xa",
    description:
      "Trang tuyển sinh chính thức Trường Đại học Mở Hà Nội. Đăng ký ngay để nhận tư vấn miễn phí."
  });
}

export default function Page() {
  return <Home />;
}
