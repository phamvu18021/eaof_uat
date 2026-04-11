"use client";

import {
  Grid,
  GridItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay
} from "@chakra-ui/react";
import Image from "next/image";
import React, { ReactNode } from "react";

interface IModalBase {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  children: ReactNode;
  image: any;
}
export const ModalBase = (props: IModalBase) => {
  const { onClose, isOpen, children, image } = props;
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={"2xl"} isCentered>
        <ModalOverlay />
        <ModalContent aria-label="poup-modal" bg={"white"} rounded={"sm"}>
          <ModalCloseButton />
          <ModalBody rounded={"xl"} p={0}>
            <Grid gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}>
              <GridItem>{children}</GridItem>
              <GridItem display={{ base: "none", md: "block" }}>
                <Image
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "auto"
                  }}
                  width={598}
                  height={900}
                  src={image || "/b6.webp"}
                  alt="popup"
                />
              </GridItem>
            </Grid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
