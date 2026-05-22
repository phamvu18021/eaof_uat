"use client";

import { Loading } from "@/components/Loading";
import { formatDate } from "@/ultil/date";
import dynamic from "next/dynamic";

import {
  Box,
  Center,
  Container,
  GridItem,
  SimpleGrid,
  Skeleton,
  Stack,
  Text
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { clean } from "@/lib/sanitizeHtml";

const CardBlogVert = dynamic(() =>
  import("@/components/CardBlogVert").then((mod) => mod.CardBlogVert)
);
const HeadSection = dynamic(() =>
  import("@/components/HeadSection").then((mod) => mod.HeadSection)
);
export const DraftPosts = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/posts-draft/?len=${9}`);
        if (!res.ok) {
          throw new Error(`Posts fetch failed with status: ${res.statusText}`);
        }
        const data: { posts: any[]; totalPosts: string } = await res.json();
        const { posts } = data;
        posts?.length && setPosts(posts);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    };

    getPosts();
  }, []);

  if (isLoading) {
    return (
      <Box>
        <Container maxW={"6xl"} py={{ base: "32px", md: "48px" }}>
          <Skeleton h="40px" w="300px" mb={6} />
          <Skeleton h="20px" w="200px" mb={12} />
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={{ base: "16px", md: "24px" }}
          >
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <GridItem key={i}>
                <Box w="100%">
                  <Skeleton h="260px" borderRadius="md" mb={3} />
                  <Skeleton h="20px" w="90%" mb={2} />
                  <Skeleton h="16px" w="40%" />
                </Box>
              </GridItem>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    );
  }

  if (posts?.length === 0)
    return (
      <Container maxW={"6xl"} py={{ base: "32px", md: "48px" }}>
        <Center minH={"50vh"}>Không có bài viết nào mới xuất bản</Center>
      </Container>
    );

  return (
    <Box>
      <Container maxW={"6xl"} py={{ base: "32px", md: "48px" }}>
        <HeadSection
          subtitle=""
          title={"Danh sách bài viết chưa xuất bản"}
          desc={""}
        />
        <Text fontSize={"16px"} as="i" py={12}>
          Danh sách 09 bài viết chưa xuất bản gần đây
        </Text>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={{ base: "16px", md: "24px" }}
        >
          {posts?.map((post: any, index: number) => (
            <GridItem key={index}>
              <CardBlogVert
                date={post?.date ? formatDate(post.date) : ""}
                title={post?.title?.rendered}
                desc={clean(post.excerpt.rendered)}
                image={""}
                path={`/preview/vi/${post?.id}`}
                preview
                tag={""}
              />
            </GridItem>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
