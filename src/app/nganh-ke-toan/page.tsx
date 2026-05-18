import { Loading } from "@/components/Loading";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import { getGlobalMetadata } from "@/lib/seo-helper";

const Kt = dynamic<any>(() =>
  import("@/features/nganh-kt").then((mod) => mod.Kt)
);

async function getPageData() {
  const domain = process.env.NEXT_PUBLIC_DOMAIN || "https://etnu.edu.vn";
  const res = await fetch(`${domain}/api/content-page/?type=nkt`, {
    next: { revalidate: 300 }
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data?.posts?.[0] || null;
}

export async function generateMetadata(): Promise<Metadata> {
  return getGlobalMetadata("nganh-ke-toan", {
    title: "Ngành kế toán - Đại học Thái Nguyên",
    description:
      "Ngành kế toán - Đại học Thái Nguyên, thông tin ngành kế toán Đại học Thái nguyên"
  });
}

export default async function Page() {
  const data = await getPageData();
  return <Kt initialData={data} />;
}
