import { Loading } from "@/components/Loading";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import { getGlobalMetadata } from "@/lib/seo-helper";

const Qtkd = dynamic<any>(() =>
  import("@/features/nganh-qtkd").then((mod) => mod.Qtkd)
);

async function getPageData() {
  const domain = process.env.NEXT_PUBLIC_DOMAIN || "https://etnu.edu.vn";
  const res = await fetch(`${domain}/api/content-page/?type=nqtkd`, {
    next: { revalidate: 300 }
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data?.posts?.[0] || null;
}

export async function generateMetadata(): Promise<Metadata> {
  return getGlobalMetadata("nganh-quan-tri-kinh-doanh", {
    title: "Ngành quản trị kinh doanh - Đại học Thái Nguyên",
    description:
      "Ngành quản trị kinh doanh - Đại học Thái Nguyên, thông tin ngành quản trị kinh doanh Đại học Thái nguyên"
  });
}

export default async function Page() {
  const data = await getPageData();
  return <Qtkd initialData={data} />;
}
