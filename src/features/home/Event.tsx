"use client";

import { Loading } from "@/components/Loading";
import {
  Box,
  Container,
  Divider,
  GridItem,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import "swiper/css";
import "swiper/css/pagination";

const SLiderPosts = dynamic(
  () => import("../posts/SliderPosts").then((mod) => mod.SLiderPosts),
  {
    loading: () => <Loading />
  }
);
const Announcement = dynamic(
  () => import("../posts/Announcement").then((mod) => mod.Announcement),
  {
    loading: () => <Loading />
  }
);

export const Event = () => {
  return (
    <Box mt={{ lg: "110px", base: "170px" }} py={"64px"}>
      <Container maxW={"6xl"} pb={"64px"}>
        <SimpleGrid
          mt={{ base: "-180px", lg: "-90px" }}
          spacing={"8"}
          gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          marginBottom={"35px"}
          px={{ base: "0", md: "70px" }}
        >
          <GridItem>
            <Box display={"flex"}>
              <Divider
                w={"40px"}
                pt={"40px"}
                mr={"20px"}
                borderColor={"#fe9800"}
                style={{ borderBottomWidth: "4px" }}
              />
              <Text
                fontWeight={"bold"}
                textAlign={"left"}
                pt={"12px"}
                fontSize={{ base: "3xl", md: "4xl" }}
                color={"#00165a"}
              >
                TIN TỨC
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Text
              textAlign={"left"}
              pt={"12px"}
              lineHeight={"30px"}
              fontWeight={500}
              fontSize={"16px"}
              color={"#4d546b"}
              ml={{ base: "0", md: "30px" }}
            >
              Theo dõi tin tức và thông báo mới nhất của chúng tôi
            </Text>
          </GridItem>
        </SimpleGrid>
        <Suspense fallback={<Loading />}>
          <SLiderPosts />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Announcement />
        </Suspense>
      </Container>
    </Box>
  );
};
