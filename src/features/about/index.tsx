"use client";

import { useModal } from "@/components/ModalContext";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Text
} from "@chakra-ui/react";
import Image from "next/image";

const TrendList = ({ text }: { text: string }) => {
  const items = text.split("\n");
  return (
    <Box textAlign={"justify"}>
      {items.map((item, index) => (
        <Flex mt={"10px"} key={index} style={{ whiteSpace: "pre-line" }}>
          <Image
            alt="home image"
            src="/s-dotss.svg"
            width={256}
            height={256}
            priority
            style={{ width: "18px", height: "auto", marginRight: "5px" }}
          />
          {item}
        </Flex>
      ))}
    </Box>
  );
};

export const About = ({ about }: any) => {
  const { onToggle } = useModal();
  const defaultText1 =
    "Huân chương Hồ Chí Minh năm 2013.\nHuân chương Lao động hạng Nhất, hạng Nhì, hạng Ba\nHuân chương Lao động hạng Nhất lần thứ 2 năm 2018.\n Huân chương Độc lập hạng Nhất, hạng Nhì, hạng Ba\n Huân chương Tự do ISALA hạng Nhất, hạng Nhì, hạng Ba của nước Cộng hòa DCND Lào.\n Cờ thi đua của Chính phủ và nhiều phần thưởng cao quý khác.";
  const text1 = about?.list_2?.desc_1 || defaultText1;
  return (
    <Box color={"blue.800"}>
      <Box
        w={"100%"}
        bg="rgba(0, 0, 0, 0)"
        bgSize="cover"
        bgRepeat={"no-repeat"}
        position="relative"
      >
        <Box
          pos="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgImage="/bg-gt.jpg"
          zIndex={-1}
          filter="auto"
          brightness="45%"
          bgSize="cover"
          bgRepeat={"no-repeat"}
          bgPosition={"0 15%"}
        ></Box>

        <Container maxW={"6xl"} py="62px">
          <Box>
            <Heading
              as="h2"
              textAlign={"center"}
              fontSize={{ base: "36px", lg: "40px" }}
              fontWeight={700}
              mt="75px"
              color={"white"}
            >
              Giới thiệu Học Viện Tài Chính
            </Heading>
            <Text
              mt={"18px"}
              fontSize={"16px"}
              textAlign={"center"}
              color={"white"}
              pb="60px"
            >
              Trang chủ - Giới thiệu
            </Text>
          </Box>
        </Container>
      </Box>

      <Container maxW={"6xl"} py="60px">
        <Heading as="h2" size={{ base: "md" }} py="16px" pb={"15px"}>
          {about?.list?.title || "Giới thiệu Học viện Tài chính"}
        </Heading>
        <Text textAlign={"justify"} style={{ whiteSpace: "pre-line" }}>
          {about?.list?.desc_1 ||
            "Học viện Tài chính được thành lập theo Quyết định số 120/QĐ-TTg ngày 17/8/2001 của Thủ tướng Chính phủ trên cơ sở sáp nhập 3 đơn vị là Trường Đại học Tài chính - Kế toán Hà Nội, Viện Nghiên cứu Khoa học tài chính và Trung tâm Bồi dưỡng cán bộ - Bộ Tài chính. Năm 2003, Học viện Tài chính tiếp nhận thêm Viện nghiên cứu Khoa học thị trường giá cả."}
        </Text>
        <Text
          my={"20px"}
          textAlign={"justify"}
          style={{ whiteSpace: "pre-line" }}
        >
          {about?.list?.desc_2 ||
            "Trong quá trình 60 năm xây dựng và phát triển, Học viện Tài chính đã đóng góp nguồn nhân lực đáng kể cho sự phát triển kinh tế - xã hội của đất nước ở các lĩnh vực kinh tế, tài chính, kế toán và trở thành địa chỉ tin cậy trong việc “Thu hút nhân tài - Bồi dưỡng nhân tâm - Hoàn thiện nhân cách - Phát triển nhân lực”. Đến nay, Học viện Tài chính trở thành cơ sở giáo dục đào tạo đa ngành, đa phương thức theo định hướng nghiên cứu, cung cấp nguồn nhân lực chất lượng cao gắn kết đào tạo với nghiên cứu khoa học đáp ứng nhu cầu xã hội, góp phần vào sự phát triển kinh tế - xã hội của địa phương và đất nước."}
        </Text>
        <Grid placeItems={"center"} py={"24px"}>
          <Image
            src={about?.list?.image || "/hoc-vien-tai-chinh.webp"}
            alt="Học Viện Tài Chính"
            width={600}
            height={436}
          />
          <Text mt={"20px"} fontWeight={"bold"}>
            {about?.list?.sub_image || "Trường Học Viện Tài Chính"}
          </Text>
        </Grid>
        <Heading as="h2" size={{ base: "md" }} py="16px">
          {about?.list_2?.title ||
            "Những phần thưởng cao quý của Đảng và Nhà nước"}
        </Heading>
        <TrendList text={text1} />

        <Box display="flex" alignItems="center" justifyContent="center">
          <Button
            color={"white"}
            size={"md"}
            rounded={"sm"}
            borderRadius="4px"
            mt="30px"
            bg={"linear-gradient(90deg,#f55301 0%,#ff9f00 50%,#f55301)"}
            transition={"all ease .4s"}
            h={"50px"}
            _hover={{
              background: "linear-gradient(70deg, #f68920 0%, #fc5934 100%)",
              textDecoration: "none"
            }}
            onClick={onToggle}
          >
            NHẬN TƯ VẤN MIỄN PHÍ
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
