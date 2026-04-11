"use client";

import { Loading } from "@/components/Loading";
import { clean } from "@/lib/sanitizeHtml";
import { Box, Grid, HStack, Heading, VStack } from "@chakra-ui/react";
import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const CardBlogVert = dynamic(() =>
  import("@/components/CardBlogVert").then((mod) => mod.CardBlogVert)
);
const LayoutBottom = dynamic(() =>
  import("@/layouts/layoutPosts/LayoutBottom").then((mod) => mod.LayoutBottom)
);

export const StyledPaginate = styled(ReactPaginate)`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0 5rem;

  li a {
    border-radius: 7px;
    padding: 0.1rem 1rem;
    border: gray 1px solid;
    cursor: pointer;
    margin-right: 4px;
    margin-left: 4px;
  }
  li.previous a,
  li.next a,
  li.break a {
    border-color: transparent;
  }
  li.active a {
    background-color: #0366d6;
    border-color: transparent;
    color: white;
    min-width: 32px;
  }
  li.disabled a {
    color: grey;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`;

export const ListPosts = ({
  handleRouter,
  type,
  title,
  path
}: {
  handleRouter?: ({ selected }: { selected: number }) => void;
  type: string;
  title: string;
  path: string;
}) => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "1";

  const [posts, setPosts] = useState<any[]>([]);
  const [totalPosts, setTotalPosts] = useState("0");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/posts/?type=${type}&page=${page}`, {
          next: { revalidate: 3 }
        });
        if (!res.ok) {
          throw new Error(`Posts fetch failed with status: ${res.statusText}`);
        }
        const data: { posts: any[]; totalPosts: string } = await res.json();
        const { posts, totalPosts } = data;
        posts?.length && setPosts(posts);
        totalPosts && setTotalPosts(totalPosts);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    getPosts();
  }, [page, type]);
  return (
    <>
      <Box>
        <Heading
          size={"lg"}
          pb={"20px"}
          textAlign={{ base: "center", lg: "start" }}
        >
          {title}
        </Heading>
        {!isLoading && (
          <VStack spacing={"16px"}>
            {posts?.map((post: any, index: number) => (
              <CardBlogVert
                key={index}
                title={post?.title?.rendered}
                desc={clean(post?.excerpt?.rendered)}
                tag={title}
                bgTag="green.500"
                image={post?.featured_image || ""}
                path={`/${path}/${post?.slug}`}
              />
            ))}
            {posts?.length === 0 && (
              <Grid placeItems={"center"} height={"40vh"}>
                Dữ liệu đang được chúng tôi cập nhập
              </Grid>
            )}
          </VStack>
        )}

        {isLoading && <Loading />}
      </Box>

      {posts?.length > 0 && (
        <HStack pt={"32px"} justify={"center"}>
          <StyledPaginate
            className="paginate"
            previousLabel="<"
            nextLabel=">"
            pageCount={Math.ceil(Number(totalPosts) / 6)}
            onPageChange={handleRouter}
            pageRangeDisplayed={1}
            marginPagesDisplayed={1}
            activeClassName="active"
            forcePage={Number(page) - 1}
          />
        </HStack>
      )}
    </>
  );
};
