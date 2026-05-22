import type { Metadata } from "next";
import { Box, Image } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "TRƯỜNG ĐẠI HỌC MỞ HÀ NỘI - TUYỂN SINH HỆ ĐẠI HỌC TỪ XA",
  description: "Thông tin về hệ đại học từ xa",
  robots: {
    index: false,
    follow: false
  }
};

async function getPageData() {
  const api_url =
    process.env.API_URL_TSEH || "https://admin.tuyensinh-ehou.vn/wp-json/wp/v2";
  try {
    const res = await fetch(`${api_url}/landing/?slug=he-dai-hoc-tu-xa`, {
      next: { revalidate: 3600 }
    });
    if (!res.ok) return null;
    const posts = await res.json();
    return posts?.[0] || null;
  } catch (error) {
    console.error("Error fetching he-dai-hoc-tu-xa:", error);
    return null;
  }
}

export default async function Page() {
  const post = await getPageData();

  return (
    <>
      {post?.acf?.landing ? (
        <div dangerouslySetInnerHTML={{ __html: post.acf.landing }} />
      ) : (
        <Box display="flex" justifyContent="center">
          <Image src="/snapedit_1702603916913.png" alt="Dang-xay-dung" />
        </Box>
      )}
    </>
  );
}
