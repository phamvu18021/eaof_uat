"use client";

import { clean } from "@/lib/sanitizeHtml";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  HStack,
  Heading,
  Stack,
  Tag,
  Text
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const CardBlogVert = ({
  title,
  desc,
  tag,
  image,
  path,
  bgTag
}: {
  title: string;
  desc: string;
  tag: string;
  image?: string;
  path?: string;
  bgTag?: string;
}) => {
  const [isMounted, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      rounded={"sm"}
      as={Link}
      href={path ?? "#"}
    >
      <Box flex={1}>
        <Box m={"12px 24px"} rounded={"sm"} overflow={"hidden"}>
          <Image
            width={320}
            height={200}
            src={image || `/blog.jpeg`}
            alt={title}
            style={{ maxHeight: "240px", objectFit: "cover" }}
          />
        </Box>
      </Box>

      <Stack flex={1}>
        <CardBody pb={0}>
          <HStack>
            <Tag
              size={"xl"}
              variant="solid"
              colorScheme="red"
              fontSize={"sm"}
              p="6px"
              whiteSpace={"nowrap"}
              bg={bgTag || "green.500"}
            >
              {tag}
            </Tag>
            <Heading
              as={"h4"}
              size="sm"
              _hover={{ color: "red.500" }}
              transition={"all ease .3s"}
              dangerouslySetInnerHTML={{ __html: clean(title) }}
            />
          </HStack>

          {isMounted && (
            <Text
              color={"gray.500"}
              fontSize={".8rem"}
              dangerouslySetInnerHTML={{ __html: desc }}
            />
          )}
        </CardBody>

        <CardFooter pt={0}>
          <Button variant="link" colorScheme="red">
            Xem thêm
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};
