import { Loading } from "@/components/Loading";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import { getGlobalMetadata } from "@/lib/seo-helper";

const Tcnh = dynamic<any>(() =>
  import("@/features/nganh-tcnh").then((mod) => mod.Tcnh)
);

async function getPageData() {
  const domain = process.env.NEXT_PUBLIC_DOMAIN || "https://etnu.edu.vn";
  const res = await fetch(`${domain}/api/content-page/?type=ntcnh`, {
    next: { revalidate: 300 }
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data?.posts?.[0] || null;
}

export async function generateMetadata(): Promise<Metadata> {
  return getGlobalMetadata("nganh-tai-chinh-ngan-hang", {
    title: "Ngành tài chính ngân hàng - Đại học Thái Nguyên",
    description:
      "Ngành tài chính ngân hàng - Đại học Thái Nguyên, thông tin ngành tài chính ngân hàng Đại học Thái nguyên"
  });
}

export default async function Page() {
  const data = await getPageData();
  return <Tcnh initialData={data} />;
}
