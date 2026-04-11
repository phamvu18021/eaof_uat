"use client";

import { categotys } from "@/features/home/Categorys";
import {
  Box,
  Button,
  Flex,
  Heading,
  List,
  SimpleGrid,
  Text,
  VStack
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const FormWrapper = dynamic(() =>
  import("@/components/FormWrapper").then((mod) => mod.FormWrapper)
);
const SocialButton = dynamic(() =>
  import("@/layouts/components/SocialButton").then((mod) => mod.SocialButton)
);
const ScrollView = dynamic(() =>
  import("@/components/ScrollView").then((mod) => mod.ScrollView)
);

const SectionHeading = ({ children }: { children: ReactNode }) => (
  <Heading
    as="h3"
    size="md"
    pb="20px"
    textAlign={{ base: "center", lg: "start" }}
  >
    {children}
  </Heading>
);

export const Item = ({
  path,
  image,
  title
}: {
  path: string;
  image: string;
  title: string;
}) => {
  return (
    <Box
      as={Link}
      href={path || "/"}
      pos="relative"
      transition={"all ease .4s"}
      _hover={{ transform: "translateY(-10px)" }}
    >
      <Image
        priority
        width={700}
        height={400}
        src={image}
        alt={title}
        style={{
          maxHeight: "78px",
          filter: "brightness(50%)",
          objectFit: "cover"
        }}
      />
      <List
        as={Flex}
        pos={"absolute"}
        top={0}
        left={"10%"}
        bottom={0}
        align={"center"}
        color={"white"}
      >
        <Heading as={"h2"} size={"md"} textAlign={"left"}>
          {title}
        </Heading>
      </List>
    </Box>
  );
};

export const Sidebar = ({ sticky }: { sticky?: string }) => {
  return (
    <Box pos={sticky ? "sticky" : "static"} top={sticky}>
      <Box>
        <SectionHeading>Các ngành đào tạo</SectionHeading>
        <SimpleGrid columns={{ base: 1, md: 1, lg: 1 }} gap={"20px"}>
          {categotys.map((cat, index) => (
            <Item
              key={index}
              path={cat.path}
              title={cat.title}
              image={`${cat.image}`}
            />
          ))}
        </SimpleGrid>
      </Box>

      <Box pt={"32px"}>
        <SectionHeading>Mạng xã hội</SectionHeading>
        <Box
          rounded={"sm"}
          p="24px"
          border={"1px solid"}
          borderColor={"gray.300"}
        >
          <ScrollView>
            <VStack spacing={"16px"}>
              <SocialButton
                icon="/s-facebook.svg"
                href="https://www.facebook.com/cunhantructuyenhvtc/"
                colorScheme="facebook"
              >
                Fanpage
              </SocialButton>

              <SocialButton
                icon="/s-video.svg"
                href="https://www.youtube.com/@aihoctuxahocvientaichinh-a910/featured"
                colorScheme="red"
              >
                Youtube
              </SocialButton>
              <SocialButton
                icon="/s-tiktok.svg"
                href="https://www.tiktok.com/@tuyensinhaof?is_from_webapp=1&sender_device=pc"
                bg="blackAlpha.800"
                colorScheme="blackAlpha"
              >
                Tiktok
              </SocialButton>
              <VStack pt={"24px"} w={"full"}>
                <Text>Liên hệ trực tiếp</Text>
                <Button
                  leftIcon={
                    <Image
                      alt={"home image"}
                      src={"/sphone.svg"}
                      width={64}
                      height={64}
                      priority
                      style={{ width: "20px", height: "auto" }}
                    />
                  }
                  variant={"link"}
                  color={"red.600"}
                  w={"full"}
                >
                  <Link href="tel: 094.162.8017">094.162.8017</Link>
                </Button>
              </VStack>
            </VStack>
          </ScrollView>
        </Box>
      </Box>

      <Box py={"24px"}>
        <SectionHeading>Đăng ký tư vấn</SectionHeading>
        <FormWrapper />
      </Box>
    </Box>
  );
};
