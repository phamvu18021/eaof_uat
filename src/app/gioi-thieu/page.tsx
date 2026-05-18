import { Loading } from "@/components/Loading";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import { getGlobalMetadata } from "@/lib/seo-helper";

const About = dynamic<any>(() =>
  import("@/features/About").then((mod) => mod.About)
);

async function getPageData() {
  const domain = process.env.NEXT_PUBLIC_DOMAIN || "https://etnu.edu.vn";
  const res = await fetch(`${domain}/api/content-page/?type=gioi-thieu`, {
    next: { revalidate: 300 }
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data?.posts?.[0] || null;
}

export async function generateMetadata(): Promise<Metadata> {
  return getGlobalMetadata("gioi-thieu", {
    title: "Giới thiệu về Đại học Thái Nguyên",
    description:
      "Trường Đại học Thái Nguyên (Thai Nguyen University of Agriculture and Forestry – TUAF) được thành lập năm 1969, hiện nay là một đơn vị thành viên của Đại học Thái Nguyên. Trải qua 52 năm xây dựng và phát triển, Trường Đại học Thái Nguyên trở thành một trung tâm đào tạo và chuyển giao khoa học – công nghệ hàng đầu Việt Nam"
  });
}

export default async function Page() {
  const data = await getPageData();
  return <About initialData={data} />;
}
