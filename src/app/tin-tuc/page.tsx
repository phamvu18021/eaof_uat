import ErrorBoundary from "@/components/ErrorBoundary";
import { Metadata } from "next";
import { getGlobalMetadata } from "@/lib/seo-helper";
import { fetchPosts } from "@/lib/fetchPosts";
import { Loading } from "@/components/Loading";
import nextDynamic from "next/dynamic";

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

export default function Page() {
  const title = "Tin tức";
  const isShort = false;

  return (
    <ErrorBoundary fallback={<h1>Lỗi server</h1>}>
      <Posts isShort={isShort} title={title} />
    </ErrorBoundary>
  );
}
