import { Loading } from "@/components/Loading";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import { getGlobalMetadata } from "@/lib/seo-helper";

const Ktdtvt = dynamic(() =>
  import("@/features/nganh-ktdtvt").then((mod) => mod.Ktdtvt)
);

export async function generateMetadata(): Promise<Metadata> {
  return getGlobalMetadata("nganh-dien-tu-vien-thong", {
    title: "Ngành điện tử viễn thông - Đại học Thái Nguyên",
    description:
      "Ngành điện tử viễn thông - Đại học Thái Nguyên, thông tin ngành điện tử viễn thông Đại học Thái nguyên"
  });
}

async function getPageData() {
  const domain = process.env.NEXT_PUBLIC_DOMAIN || "https://etnu.edu.vn";
  const res = await fetch(`${domain}/api/content-page/?type=ndtvt`, {
    next: { revalidate: 300 }
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data?.posts?.[0] || null;
}

export default async function Page() {
  const data = await getPageData();
  return <Ktdtvt initialData={data} />;
}
