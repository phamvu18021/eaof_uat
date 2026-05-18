import { Loading } from "@/components/Loading";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import { getGlobalMetadata } from "@/lib/seo-helper";

const Cntt = dynamic(() =>
  import("@/features/nganh-cntt").then((mod) => mod.Cntt)
);

export async function generateMetadata(): Promise<Metadata> {
  return getGlobalMetadata("nganh-cong-nghe-thong-tin", {
    title: "Ngành công nghệ thông tin - Đại học Thái Nguyên",
    description:
      "Ngành công nghệ thông tin - Đại học Thái Nguyên, thông tin ngành công nghệ thông tin Đại học Thái nguyên"
  });
}

async function getPageData() {
  const domain = process.env.NEXT_PUBLIC_DOMAIN || "https://etnu.edu.vn";
  const res = await fetch(`${domain}/api/content-page/?type=ncntt`, {
    next: { revalidate: 300 }
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data?.posts?.[0] || null;
}

export default async function Page() {
  const data = await getPageData();
  return <Cntt initialData={data} />;
}
