"use client";

import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const ScrollView = dynamic(() =>
  import("@/components/ScrollView").then((mod) => mod.ScrollView)
);
const Logo = dynamic(() =>
  import("@/layouts/components/Logo").then((mod) => mod.Logo)
);
const Boxtext = ({ text }: { text: string }) => {
  const items = text.split("\n");
  return (
    <>
      {items.map((item, index) => (
        <Box key={index} style={{ whiteSpace: "pre-line" }}>
          {item}
        </Box>
      ))}
    </>
  );
};
export const Footer = () => {
  const [page_content, setPageContent] = useState<any>(null);
  const defaultText1 =
    "Địa chỉ: Số 116 Trần Vỹ, Phường Mai Dịch, Quận Cầu Giấy, Thành phố Hà Nội.\n Hotline/zalo: 094.162.8017";
  const text1 = page_content?.acf?.footer?.desc || defaultText1;

  useEffect(() => {
    const getPageContent = async () => {
      try {
        const res = await fetch(`/api/content-page/?type=footer`, {
          next: { revalidate: 3 }
        });
        if (!res.ok) {
          throw new Error(`Posts fetch failed with status: ${res.statusText}`);
        }
        const data = await res.json();
        setPageContent(data?.posts[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getPageContent();
  }, []);
  return (
    <Box
      color={"White"}
      w={"100%"}
      bgSize="cover"
      bgRepeat={"no-repeat"}
      position="relative"
      bg="#002c32db"
    >
      <Image
        alt="Mountains"
        src={
          page_content?.acf?.footer?.list_image?.image_background ||
          "/bg-footer.webp"
        }
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          zIndex: "-1"
        }}
      />
      <ScrollView>
        <Container as={Stack} maxW={"7xl"} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack align={"flex-start"}>
              <Logo color={"#ffffff"} />
              <Box mt={"30px"} w={{ md: "auto", lg: "380px", base: "auto" }}>
                {page_content?.acf?.footer?.title ||
                  "Văn phòng tư vấn và tiếp nhận hồ sơ tuyển sinh"}
              </Box>
              <Boxtext text={text1} />
            </Stack>
            <Stack
              pl={{ md: "0px", lg: "30px", base: "0px" }}
              textAlign={{ base: "left", lg: "center" }}
            >
              <Heading
                fontSize={"24px"}
                fontWeight={600}
                textAlign={{ base: "left", lg: "center" }}
                mb={4}
              >
                Hỗ Trợ
              </Heading>
              <Box as={Link} href={"#"}>
                Trang chủ
              </Box>
              <Box as={Link} href={"/gioi-thieu"}>
                Giới thiệu
              </Box>
              <Box as={Link} href={"#"}>
                Ngành học
              </Box>
              <Box as={Link} href={"/lich-khai-giang"}>
                Lịch khai giảng
              </Box>
              <Box as={Link} href={"/lien-he"}>
                Liên hệ
              </Box>
              <Box as={Link} href={"/ban-tin"}>
                Bản tin
              </Box>
            </Stack>
            <Stack align={"flex-start"}>
              <Heading
                fontSize={"16px"}
                fontWeight={600}
                textAlign={{ base: "left", lg: "center" }}
                mb={4}
              >
                Tham gia cộng đồng Học từ xa
              </Heading>
              <Box as={Link} href={"https://timdoitac.aum.edu.vn/ "}>
                <Image
                  width={231}
                  height={233}
                  src={
                    page_content?.acf?.footer?.list_image?.thumbnails ||
                    "/qr.png"
                  }
                  alt="Đối-tác"
                />
              </Box>
            </Stack>
            <Stack align={"flex-start"} justifyContent={"space-around"}>
              <Box as={Link} href={"https://timdoitac.aum.edu.vn/ "}>
                <Image
                  width={600}
                  height={400}
                  src={
                    page_content?.acf?.footer?.list_image?.thumbnail ||
                    "/doi-tac.jpg"
                  }
                  alt="Đối-tác"
                />
              </Box>
            </Stack>
          </SimpleGrid>
        </Container>
      </ScrollView>

      <Box borderTopWidth={1} borderStyle={"solid"} borderColor={"gray.200"}>
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "center" }}
          align={{ md: "center" }}
        >
          <Text textAlign="center">© 2023 Copyright by IT AUM</Text>
        </Container>
      </Box>
    </Box>
  );
};
