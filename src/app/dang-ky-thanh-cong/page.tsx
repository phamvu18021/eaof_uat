import { Loading } from "@/components/Loading";
import nextDynamic from "next/dynamic";
import { Metadata } from "next";
import { getGlobalMetadata } from "@/lib/seo-helper";

export const dynamic = "force-dynamic";

const DangkyTc = nextDynamic(() =>
  import("@/features/dang-ky-thanh-cong").then((mod) => mod.DangkyTc)
);

export async function generateMetadata(): Promise<Metadata> {
  return getGlobalMetadata("dang-ky-thanh-cong", {
    title: "Đăng ký thành công - Trường Đại học Mở Hà Nội",
    description:
      "Đăng ký học từ xa Trường Đại học Mở Hà Nội thành công. Chúng tôi sẽ liên hệ tư vấn sớm nhất."
  });
}

export default function Page() {
  return <DangkyTc />;
}
