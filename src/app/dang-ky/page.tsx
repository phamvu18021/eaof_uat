import { dangky as Dangky } from "@/features/dang-ky";
import { Metadata } from "next";
import { getGlobalMetadata } from "@/lib/seo-helper";

export async function generateMetadata(): Promise<Metadata> {
  return getGlobalMetadata("dang-ky", {
    title: "Đăng ký học từ xa Đại học Thái Nguyên",
    description:
      "Đăng ký học từ xa Đại học Thái Nguyên, tiết kiệm chi phí và thời gian"
  });
}

async function getPageData() {
  const domain = process.env.NEXT_PUBLIC_DOMAIN || "https://etnu.edu.vn";
  const res = await fetch(`${domain}/api/content-page/?type=dang-ky`, {
    next: { revalidate: 300 }
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data?.posts?.[0] || null;
}

export default async function Page() {
  const data = await getPageData();
  return <Dangky initialData={data} />;
}
