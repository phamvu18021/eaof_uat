import { Loading } from "@/components/Loading";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import { getGlobalMetadata } from "@/lib/seo-helper";

const Lkt = dynamic<any>(() =>
  import("@/features/nganh-lkt").then((mod) => mod.Lkt)
);

async function getPageData() {
  const domain = process.env.NEXT_PUBLIC_DOMAIN || "https://etnu.edu.vn";
  const res = await fetch(`${domain}/api/content-page/?type=nlkt`, {
    next: { revalidate: 300 }
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data?.posts?.[0] || null;
}

export async function generateMetadata(): Promise<Metadata> {
  return getGlobalMetadata("nganh-luat-kinh-te", {
    title: "Ngành luật kinh tế - Đại học Thái Nguyên",
    description:
      "Ngành luật kinh tế - Đại học Thái Nguyên, thông tin ngành luật kinh tế Đại học Thái nguyên"
  });
}

export default async function Page() {
  const data = await getPageData();
  return <Lkt initialData={data} />;
}
