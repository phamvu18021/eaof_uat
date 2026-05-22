import ErrorBoundary from "@/components/ErrorBoundary";
import { Metadata } from "next";
import { getGlobalMetadata } from "@/lib/seo-helper";
import { Loading } from "@/components/Loading";
import nextDynamic from "next/dynamic";
import { fetchContentPage } from "@/lib/fetchContentPage";

const Posts = nextDynamic(
  () => import("@/features/posts").then((mod) => mod.Posts),
  { loading: () => <Loading /> }
);

export async function generateMetadata(): Promise<Metadata> {
  return getGlobalMetadata("tin-tuc", {
    title: "Tin tức - Trường Đại học Mở Hà Nội",
    description:
      "Tin tức tuyển sinh và sự kiện mới nhất từ Trường Đại học Mở Hà Nội."
  });
}

export default async function Page() {
  const title = "Tin tức";
  const isShort = false;
  const data = await fetchContentPage("tin-tuc", 300);
  const homeContent = data?.posts?.[0] || null;

  return (
    <ErrorBoundary fallback={<h1>Lỗi server</h1>}>
      <Posts isShort={isShort} title={title} initialData={homeContent} />
    </ErrorBoundary>
  );
}
