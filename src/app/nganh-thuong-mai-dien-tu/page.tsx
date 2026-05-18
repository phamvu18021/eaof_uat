import { Loading } from "@/components/Loading";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import { getGlobalMetadata } from "@/lib/seo-helper";

const Tmdt = dynamic<any>(() =>
  import("@/features/nganh-tmdt").then((mod) => mod.Tmdt)
);

async function getPageData() {
  const domain = process.env.NEXT_PUBLIC_DOMAIN || "https://etnu.edu.vn";
  const res = await fetch(`${domain}/api/content-page/?type=ntmdtvmkts`, {
    next: { revalidate: 300 }
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data?.posts?.[0] || null;
}

export async function generateMetadata(): Promise<Metadata> {
  return getGlobalMetadata("nganh-thuong-mai-dien-tu", {
    title: "Ngành thương mại điện tử - Đại học Thái Nguyên",
    description:
      "Ngành thương mại điện tử - Đại học Thái Nguyên, thông tin ngành thương mại điện tử Đại học Thái nguyên"
  });
}

export default async function Page() {
  const data = await getPageData();
  return <Tmdt initialData={data} />;
}
