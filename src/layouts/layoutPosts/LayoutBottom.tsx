"use client";

import { Container, GridItem, SimpleGrid } from "@chakra-ui/react";
import { ReactNode } from "react";
import dynamic from "next/dynamic";

const Sidebar = dynamic(() =>
  import("@/layouts/components/Sidebar").then((mod) => mod.Sidebar)
);
const ScrollView = dynamic(() =>
  import("@/components/ScrollView").then((mod) => mod.ScrollView)
);

export const LayoutBottom = ({
  children,
  sticky
}: {
  children: ReactNode;
  sticky?: string;
}) => {
  return (
    <Container maxW={"6xl"}>
      <SimpleGrid columns={{ base: 2, lg: 3 }} gap={"24px"}>
        <GridItem colSpan={{ base: 3, lg: 2 }}>{children}</GridItem>
        <GridItem className="sidebar-posts" colSpan={{ base: 3, lg: 1 }}>
          <ScrollView>
            <Sidebar sticky="125px" />
          </ScrollView>
        </GridItem>
      </SimpleGrid>
    </Container>
  );
};
