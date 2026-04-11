"use client";

import { BtnThemeContact } from "@/components/BtnTheme";
import { useModal } from "@/components/ModalContext";
import { Box, Container, Flex, HStack } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const MobileNav = dynamic(() =>
  import("@/layouts/components/MobileNav").then((mod) => mod.MobileNav)
);
const HeaderTop = dynamic(() =>
  import("@/layouts/components/HeaderTop").then((mod) => mod.HeaderTop)
);
const FormWrapper = dynamic(() =>
  import("@/components/FormWrapper").then((mod) => mod.FormWrapper)
);
const ModalBase = dynamic(() =>
  import("@/components/Modal").then((mod) => mod.ModalBase)
);
const DesktopNav = dynamic(() =>
  import("@/layouts/components/DeskhopNav").then((mod) => mod.DesktopNav)
);
const Buttonsearch = dynamic(() =>
  import("@/features/search/Buttonsearch").then((mod) => mod.Buttonsearch)
);
const ScrollView = dynamic(() =>
  import("@/components/ScrollView").then((mod) => mod.ScrollView)
);

interface NavProps {
  isSticky: boolean;
}

const navtransDown = keyframes`
  from {
    transform: translate(0, -90px);
  }
  to {
    transform: translate(0, 0);
  }
`;
const NavContainer = styled.nav`
  z-index: 1000;
  transition: all 0s ease-out;

  &.sticky {
    position: fixed;
    z-index: 1000;
    width: 100%;
    top: 0px;
    background: #fff;
    animation: ${navtransDown} 0.7s 1 linear;
    max-width: 1920px;
  }

  @media (max-width: 992px) {
    &.sticky {
      top: 0px;
    }
  }
`;

const NavbarBrand = styled.div`
  display: flex;
  justify-content: center;

  &.sticky {
    box-shadow:
      rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  }
`;

const HiddenBox = styled(Box)`
  display: none;
  height: 76px;

  &.sticky {
    display: block;
  }
`;

export const Navigation = ({ image }: any) => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navContainerClass = isSticky ? "sticky" : "";
  const navbarBrandClass = isSticky ? "sticky" : "";
  const hiddenBoxClass = isSticky ? "sticky" : "";

  const { onOpen, onClose, isOpen, onToggle } = useModal();

  return (
    <NavContainer className={navContainerClass}>
      <NavbarBrand className={navbarBrandClass}>
        <Container
          as={Flex}
          bg={"white"}
          color={"gray.600"}
          minH={"60px"}
          py={{ base: 2 }}
          align={"center"}
          maxW={"6xl"}
          mt={{ lg: isSticky ? "0px" : "-30px", base: "0px" }}
          boxShadow={
            isSticky
              ? "none"
              : "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
          }
          pos={"absolute"}
          zIndex={5}
        >
          <Flex ml={{ base: -2 }} display={{ base: "flex", lg: "none" }}>
            <ScrollView>
              <MobileNav />
            </ScrollView>
          </Flex>
          <Flex
            flex={{ base: 1 }}
            justify={{ base: "center", lg: "start" }}
            align={"center"}
          >
            <Flex display={{ base: "none", lg: "flex" }} ml={10}>
              <ScrollView>
                <DesktopNav />
              </ScrollView>
            </Flex>
          </Flex>
          <HStack spacing={"70px"}>
            <Buttonsearch />
            <BtnThemeContact size={"lg"} onClick={() => onToggle && onToggle()}>
              Đăng ký tư vấn
            </BtnThemeContact>
          </HStack>
        </Container>
        <HiddenBox className={hiddenBoxClass}></HiddenBox>
      </NavbarBrand>

      <ModalBase
        isOpen={isOpen || false}
        onClose={() => onClose && onClose()}
        onOpen={() => onOpen && onOpen()}
        image={image}
      >
        <FormWrapper type="form_poup" title="Để lại thông tin" />
      </ModalBase>
    </NavContainer>
  );
};

export const Header = ({ header }: any) => {
  return (
    <>
      <Box
        height={"150px"}
        zIndex={"1"}
        display={{ base: "none", lg: "block" }}
        pos={"relative"}
        overflow={"hidden"}
        _after={{
          content: "''",
          width: "52%",
          height: "100%",
          backgroundImage: "linear-gradient(135deg,#007180 0%,#007180 100%)",
          position: "absolute",
          top: 0,
          right: 0,
          zIndex: -1,
          transform: "skew(-20deg)",
          WebkitTransformOrigin: "left bottom",
          display: "block"
        }}
      >
        <Box py={"16px"}>
          <ScrollView>
            <HeaderTop header={header?.list_header} />
          </ScrollView>
        </Box>
      </Box>
      <Navigation image={header?.image_form} />
    </>
  );
};
