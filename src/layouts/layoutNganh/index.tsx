"use client";

import {
  Box,
  Container,
  GridItem,
  Heading,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { ReactNode } from "react";

const Sidebar = dynamic(() =>
  import("@/layouts/components/Sidebar").then((mod) => mod.Sidebar)
);
const ScrollView = dynamic(() =>
  import("@/components/ScrollView").then((mod) => mod.ScrollView)
);

export const LayoutNganh = ({
  children,
  title,
  image
}: {
  children?: ReactNode;
  title?: string;
  image?: string;
}) => {
  return (
    <Box color={"blue.900"}>
      <Box w={"100%"} bgSize="cover" bgRepeat={"no-repeat"} position="relative">
        <Box
          pos="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgImage={image || ``}
          zIndex={-1}
          filter="auto"
          brightness="60%"
          bgSize="cover"
          bgRepeat={"no-repeat"}
          bgPosition={{ lg: "0px -160px", base: "0" }}
        ></Box>

        <Container maxW={"6xl"} py="62px">
          <Heading
            as="h2"
            textAlign={"center"}
            fontSize={{ base: "36px", lg: "40px" }}
            fontWeight={700}
            mt="75px"
            color={"white"}
          >
            {title || ""}
          </Heading>
          <Text
            mt={"18px"}
            fontSize={"16px"}
            textAlign={"center"}
            color={"white"}
            pb="60px"
          >
            Trang chủ - {title}
          </Text>
        </Container>
      </Box>
      <Container maxW={"6xl"} py="42px">
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={"24px"}>
          <GridItem colSpan={{ base: 1, md: 2 }}>{children}</GridItem>
          <GridItem>
            <ScrollView>
              <Sidebar sticky="125px" />
            </ScrollView>
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
