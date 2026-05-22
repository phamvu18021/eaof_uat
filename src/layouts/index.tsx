"use client";

import { ReactNode } from "react";
import { Footer } from "./footer";
import { Header } from "./header";
import { Box } from "@chakra-ui/react";
import { TrackingSession } from "@/components/TrackingSession";

interface ILayout {
  children: ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Box maxW={"1920px"} mx={"auto"}>
        <TrackingSession />
        <Header />
        <main>{children}</main>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
