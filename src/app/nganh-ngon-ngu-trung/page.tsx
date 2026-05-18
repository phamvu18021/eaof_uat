import { Loading } from "@/components/Loading";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import { getGlobalMetadata } from "@/lib/seo-helper";

const Nnt = dynamic<any>(() =>
  import("@/features/nganh-nnt").then((mod) => mod.Nnt)
);

async function getPageData() {
  const domain = process.env.NEXT_PUBLIC_DOMAIN || "https://etnu.edu.vn";
  const res = await fetch(`${domain}/api/content-page/?type=nnnt`, {
    next: { revalidate: 300 }
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data?.posts?.[0] || null;
}

export async function generateMetadata(): Promise<Metadata> {
  return getGlobalMetadata("nganh-ngon-ngu-trung", {
    title: "Ngành ngôn ngữ Trung - Đại học Thái Nguyên",
    description:
      "Ngành ngôn ngữ Trung - Đại học Thái Nguyên, thông tin ngành ngôn ngữ Trung Đại học Thái nguyên"
  });
}

export default async function Page() {
  const data = await getPageData();
  return <Nnt initialData={data} />;
}
