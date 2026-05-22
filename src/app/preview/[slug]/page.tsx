import ErrorBoundary from "@/components/ErrorBoundary";
import { fetchAuth } from "@/ultil/fetchAuth";
import { Post } from "@/features/post";
import { notFound } from "next/navigation";
import { LayoutPost } from "@/layouts/layoutPost";

type Props = {
  params: Promise<{ slug: string }>;
};

async function getPost(slug: string) {
  const api_url = process.env.API_URL_TSEH || "";
  try {
    const res = await fetchAuth({
      url: `${api_url}/posts/${slug}?_embed`
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <LayoutPost>
      <ErrorBoundary fallback={<h1>Lỗi phía máy chủ</h1>}>
        <Post post={post} />
      </ErrorBoundary>
    </LayoutPost>
  );
}
