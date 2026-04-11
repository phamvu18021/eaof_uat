"use client";

import { Collapse, Flex, Stack, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

interface INavItem {
  title: string;
  childs?: Array<{ title: string; childs?: Array<{}>; path?: string }>;
  path?: string;
  onClose: () => void;
}

export const MobileNavItem = ({ title, childs, path, onClose }: INavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={childs && onToggle}>
      <Flex
        py={2}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none"
        }}
        fontWeight={600}
        color={"gray.600"}
      >
        <Link
          href={path ?? "#"}
          style={{ width: "100%" }}
          onClick={() => !childs && onClose()}
        >
          {title}
        </Link>
        {childs && (
          <Image
            src="/s-down.svg"
            alt="Chevron Down"
            width={20}
            height={20}
            style={{
              transform: isOpen ? "rotate(180deg)" : "",
              transition: "all .25s ease-in-out"
            }}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={"gray.200"}
          align={"start"}
        >
          {childs &&
            childs.map((child) => (
              <Link
                key={child.title}
                style={{
                  paddingTop: "8px",
                  paddingBottom: "8px",
                  fontWeight: "600",
                  width: "100%"
                }}
                href={child.path ?? "/"}
                onClick={onClose}
              >
                {child.title}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
