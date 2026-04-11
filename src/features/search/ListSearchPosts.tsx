"use client";

import { Loading } from "@/components/Loading";
import { clean } from "@/lib/sanitizeHtml";
import { formatDate } from "@/ultil/date";
import { toSlug } from "@/ultil/toSlug";
import { Box, Center, Grid, GridItem, HStack } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const CardBlog = dynamic(() =>
  import("@/components/CardBlog").then((mod) => mod.CardBlog)
);
const StyledPaginate = dynamic(() =>
  import("@/features/posts/ListPosts").then((mod) => mod.StyledPaginate)
);

export interface TypePost {
  title: {
    rendered: string;
  };
  date: string;
  excerpt: {
    rendered: string;
  };
  featured_image: string;
  slug: string;
  categories?: number[];
  content?: {
    rendered: string;
  };
  id?: number;
}

export const ListSearchPosts = ({
  handleRouter
}: {
  handleRouter?: ({
    // eslint-disable-next-line no-unused-vars
    selected,
    // eslint-disable-next-line no-unused-vars
    searchText
  }: {
    selected: number;
    searchText: string;
  }) => void;
}) => {
  const router = useRouter();

  const [posts, setPosts] = useState<TypePost[]>([]);
  const [totalPosts, setTotalPosts] = useState("0");
  const [isLoading, setIsLoading] = useState(true);
  const [resetpagi, setResetpagi] = useState(false);
  const len = Math.ceil(Number(totalPosts) / 12);

  useEffect(() => {
    setResetpagi(true);
  }, [router.query.page]);

  useEffect(() => {
    const { keyword, page } = router.query;
    let keywords = Array.isArray(keyword)
      ? keyword[0] || ""
      : (keyword as string) || "";
    var pages = Number(
      Array.isArray(page) ? page[0] || "" : (page as string) || ""
    );

    const getPosts = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `/api/search/?page=${pages}&search=${toSlug({
            type: "signed",
            input: keywords
          })}`,
          {
            next: { revalidate: 3 }
          }
        );
        if (!res.ok) {
          throw new Error(`Posts fetch failed with status: ${res.statusText}`);
        }
        const data: { posts: TypePost[]; totalPosts: string } =
          await res.json();
        const { posts, totalPosts } = data;
        totalPosts && setTotalPosts(totalPosts);
        setPosts(posts);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
      setResetpagi(false);
    };
    getPosts();
  }, [router.query]);

  return (
    <>
      <Box>
        {!isLoading && (
          <>
            <Grid
              templateColumns={{
                base: "1fr",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)"
              }}
              gap={{ lg: "30px", md: "40px", base: "45px" }}
            >
              {posts?.map((post: TypePost, index: number) => (
                <GridItem key={index}>
                  <CardBlog
                    date={post?.date ? formatDate(post.date) : ""}
                    title={clean(post?.title?.rendered)}
                    tag="Tin tức"
                    bgTag="red.500"
                    desc={clean(post?.excerpt?.rendered)}
                    image={post?.featured_image || ""}
                    path={`/${post?.slug}`}
                  />
                </GridItem>
              ))}
            </Grid>
            {posts?.length > 0 && !resetpagi && (
              <HStack pt={"32px"} justify={"center"}>
                <StyledPaginate
                  className="paginate"
                  previousLabel="<"
                  nextLabel=">"
                  pageCount={len}
                  onPageChange={handleRouter}
                  pageRangeDisplayed={1}
                  marginPagesDisplayed={1}
                  activeClassName="active"
                  forcePage={Number(router.query.page) - 1}
                />
              </HStack>
            )}
          </>
        )}
        {posts?.length === 0 && !isLoading && (
          <>
            <Center placeItems={"center"} height={"40vh"} textAlign={"center"}>
              Không tìm được kết quả phù hợp
            </Center>
          </>
        )}

        {isLoading && <Loading />}
      </Box>
    </>
  );
};
