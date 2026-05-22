import { Loading } from "@/components/Loading";
import nextDynamic from "next/dynamic";
import { fetchContentPage } from "@/lib/fetchContentPage";

const LichKg = nextDynamic(
  () => import("@/features/lich-khai-giang").then((mod) => mod.LichKg),
  { loading: () => <Loading /> }
);

export default async function Page() {
  const data = await fetchContentPage("khai-giang", 300);
  const homeContent = data?.posts?.[0] || null;

  return <LichKg list={homeContent?.acf?.section_1} />;
}
