"use client";

import ErrorBoundary from "@/components/ErrorBoundary";
import { Loading } from "@/components/Loading";
import { Sidebar } from "@/layouts/components/Sidebar";
import {
  Box,
  Container,
  Divider,
  GridItem,
  Heading,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { Suspense } from "react";

const ListPosts = dynamic(
  () => import("../posts/ListPosts").then((mod) => mod.ListPosts),
  {
    loading: () => <Loading />
  }
);

export const Posts = () => {
  const router = useRouter();
  const handleRouter = ({ selected }: { selected: number }) => {
    router.push(`/tin-tuc?page=${selected + 1}`);
  };

  return (
    <>
      <Box>
        <Box
          w={"100%"}
          bg="rgba(0, 0, 0, 0)"
          bgSize="cover"
          bgRepeat={"no-repeat"}
          position="relative"
        >
          <Box
            pos="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bgImage="/bg-gt.jpg"
            zIndex={-1}
            filter="auto"
            brightness="40%"
            bgSize="cover"
            bgRepeat={"no-repeat"}
            bgPosition={"0 15%"}
          ></Box>
          <Container maxW={"6xl"} py="62px">
            <Box>
              <Heading
                as="h2"
                textAlign={"center"}
                fontSize={{ base: "36px", lg: "40px" }}
                fontWeight={700}
                mt="75px"
                color={"white"}
              >
                Tin tức Học Viện Tài Chính
              </Heading>
              <Text
                mt={"18px"}
                fontSize={"16px"}
                textAlign={"center"}
                color={"white"}
                pb="60px"
              >
                Trang chủ - Tin tức
              </Text>
            </Box>
          </Container>
        </Box>

        <Divider size={"xl"} />
      </Box>

      <ErrorBoundary fallback={<h1>Lỗi phía máy chủ</h1>}>
        <Container maxW={"6xl"} mt={"52px"} pb={"40px"}>
          <SimpleGrid columns={{ base: 1, lg: 3 }} gap={"42px"}>
            <GridItem colSpan={{ lg: 2 }}>
              <Suspense fallback={<Loading />}>
                <ListPosts
                  handleRouter={handleRouter}
                  type={"news"}
                  title={"Tin tức"}
                  path={"tin-tuc"}
                />
              </Suspense>
            </GridItem>
            <GridItem colSpan={{ lg: 1 }}>
              <Sidebar sticky="125px" />
            </GridItem>
          </SimpleGrid>
        </Container>
      </ErrorBoundary>
    </>
  );
};
