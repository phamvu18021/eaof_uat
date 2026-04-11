import { Box, Heading, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export const Logo = ({ color }: { color?: string }) => {
  return (
    <Link
      href="/"
      style={{ display: "flex", alignItems: "center", gap: "12px" }}
    >
      <Box w={"80px"} h={"80px"}>
        <Image
          priority
          width={80}
          height={80}
          style={{ borderRadius: "50%", width: "100%", height: "auto" }}
          src={`/logo.png`}
          alt="logo aof"
        />
      </Box>

      <VStack color={color} align={"start"}>
        <Heading as="h1" size={{ base: "sm", lg: "md" }}>
          Học Viện Tài Chính
        </Heading>
        <Heading as="h2" fontSize={{ base: ".8rem" }}>
          Trung tâm đào tạo từ xa
        </Heading>
      </VStack>
    </Link>
  );
};
