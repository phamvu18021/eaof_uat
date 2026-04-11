"use client";

import {
  Box,
  Divider,
  Flex,
  HStack,
  Heading,
  List,
  Text
} from "@chakra-ui/react";
import Image from "next/image";

export const SectionBranch = ({
  title,
  items,
  isList = false,
  imageSrc = "/s-checks.svg"
}: {
  title: string;
  items: string[];
  isList?: boolean;
  imageSrc?: string;
}) => {
  return (
    <Box pt="32px">
      <HStack pb="16px">
        <Divider
          w="50px"
          mr="20px"
          borderColor="#f5750d"
          style={{ borderBottomWidth: "4px" }}
        />
        <Heading as="h2" fontSize="26px" color="#00165a">
          {title}
        </Heading>
      </HStack>
      <Box pt="26px">
        {isList ? (
          <List>
            {items.map((item, index) => (
              <Flex
                key={index}
                fontWeight={500}
                pb="12px"
                textAlign="justify"
                alignItems={"flex-start"}
                style={{ whiteSpace: "pre-line" }}
              >
                <Image
                  alt="icon"
                  src={imageSrc}
                  width={256}
                  height={256}
                  priority
                  style={{ width: "24px", height: "auto", marginRight: "10px" }}
                />
                {item}
              </Flex>
            ))}
          </List>
        ) : (
          items.map((item, index) => (
            <Text
              key={index}
              fontWeight={500}
              pb="12px"
              textAlign="justify"
              style={{ whiteSpace: "pre-line" }}
            >
              {item}
            </Text>
          ))
        )}
      </Box>
    </Box>
  );
};
