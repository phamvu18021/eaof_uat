"use client";

import { useSize } from "@/hooks/useSizeWindow";
import { menus } from "@/router";
import {
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Stack,
  useDisclosure
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRef } from "react";
import { Logo } from "./Logo";

const MobileNavItem = dynamic(() =>
  import("@/layouts/components/MobileNavItem").then((mod) => mod.MobileNavItem)
);

export const MobileNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  const { size } = useSize();
  const { width } = size;

  return (
    <>
      <IconButton
        w={"50px"}
        h={"50px"}
        ref={btnRef}
        onClick={onOpen}
        icon={
          <Image
            alt={"home image"}
            src={"/s-menu.svg"}
            width={64}
            height={64}
            priority
            style={{ width: "30px", height: "auto" }}
          />
        }
        variant={"ghost"}
        aria-label={"Toggle Navigation"}
      />
      <Drawer
        isOpen={width < 992 ? isOpen : false}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Flex justify={"center"}>
              <Logo />
            </Flex>
          </DrawerHeader>
          <Divider />

          <DrawerBody>
            <Stack bg={"white"} p={4} display={{ lg: "none" }}>
              {menus.map((navItem) => (
                <MobileNavItem
                  key={navItem.title}
                  {...navItem}
                  onClose={onClose}
                />
              ))}
            </Stack>
          </DrawerBody>
          <Divider />
        </DrawerContent>
      </Drawer>
    </>
  );
};
