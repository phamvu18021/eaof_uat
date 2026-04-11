"use client";

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  useDisclosure
} from "@chakra-ui/react";
import Image from "next/image";
import { useRef } from "react";

export const Search = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <>
      <Button ref={btnRef} colorScheme="outline" onClick={onOpen}>
        <Image
          alt={"home image"}
          src={"/s-search.svg"}
          width={64}
          height={64}
          priority
          style={{ width: "25px", height: "auto", marginRight: "10px" }}
        />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Tìm kiếm bài viết</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Nhập dữ liệu..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" rounded={"sm"} mr={3} onClick={onClose}>
              Hủy
            </Button>
            <Button colorScheme="blue" rounded={"sm"}>
              Tìm kiếm
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
