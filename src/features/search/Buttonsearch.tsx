"use client";

import {
  IconButton,
  Popover,
  PopoverContent,
  PopoverTrigger,
  useDisclosure
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Image from "next/image";

const InputSearch = dynamic(() =>
  import("@/features/search/InputSearch").then((mod) => mod.InputSearch)
);

export const Buttonsearch = () => {
  const { onOpen, onClose, isOpen } = useDisclosure();

  return (
    <>
      <Popover placement="bottom" isOpen={isOpen} onClose={onClose}>
        <PopoverTrigger>
          <IconButton
            size="xl"
            color="#1a202c"
            _hover={{ color: "#2563eb", bg: "white" }}
            pl={4}
            bg="white"
            aria-label="Search database"
            icon={
              <Image
                alt={"home image"}
                src={"/s-search.svg"}
                width={64}
                height={64}
                priority
                style={{ width: "24px", height: "auto", marginRight: "10px" }}
              />
            }
            borderRadius={"0"}
            _focus={{ outline: "none" }}
            _active={{ bg: "white" }}
            onClick={onOpen}
          />
        </PopoverTrigger>
        <PopoverContent mt="15px" p={5} bgColor={"gray.300"}>
          <InputSearch onClose={onClose} />
        </PopoverContent>
      </Popover>
    </>
  );
};
