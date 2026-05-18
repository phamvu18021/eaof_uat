import { Luat } from "@/features/nganh-luat";
import { Metadata } from "next";
import { getGlobalMetadata } from "@/lib/seo-helper";

export async function generateMetadata(): Promise<Metadata> {
  return getGlobalMetadata("nganh-luat", {
    title: "Ngành luật - Đại học Thái Nguyên",
    description:
      "Ngành luật - Đại học Thái Nguyên, thông tin ngành tế Đại học Thái nguyên"
  });
}

async function getPageData() {
  const domain = process.env.NEXT_PUBLIC_DOMAIN || "https://etnu.edu.vn";
  const res = await fetch(`${domain}/api/content-page/?type=nganh-luat`, {
    next: { revalidate: 300 }
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data?.posts?.[0] || null;
}

export default async function Page() {
  const data = await getPageData();
  return <Luat initialData={data} />;
}
