"use client";

import { Box, Button, Center, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import { BsFillCheckCircleFill } from "react-icons/bs";

export const DangkyTc = () => {
  return (
    <Box>
      <Center
        flexDir={"column"}
        minH={"50vh"}
        mt={{ base: "140px", md: "150px", lg: "120px" }}
      >
        <Heading
          fontSize="36px"
          color="blue.700"
          pb={"24px"}
          textAlign="center"
        >
          Đăng ký thành công!
        </Heading>

        <BsFillCheckCircleFill
          style={{ width: "100px", height: "100px", color: "#0078d4" }}
        />

        <Box
          textAlign="center"
          fontWeight={600}
          color={"black"}
          pt={"25px"}
          px={{ base: "20px", md: "100px", lg: "400px" }}
          display="inline"
          fontSize="18px"
        >
          <Text display="inline" color="red">
            Học viện Tài Chính{" "}
          </Text>{" "}
          đã nhận được đăng ký của bạn. Nhà trường sẽ trực tiếp liên hệ với bạn
          trong vòng 24h tới, hãy chú ý điện thoại nha.
        </Box>
        <Text
          textAlign="center"
          fontWeight={600}
          color={"black"}
          pt={"10px"}
          px={{ base: "20px", md: "100px", lg: "400px" }}
        >
          Cảm ơn và hẹn gặp lại bạn tại buổi khai giảng gần nhất tại Học viện
          Tài Chính ^^
        </Text>
        <Button
          as={Link}
          href={"/"}
          color={"white"}
          size={"md"}
          rounded={"sm"}
          mt="30px"
          mb="60px"
          bg={"#007bff"}
          transition={"all ease .4s"}
          borderRadius={"100px"}
          h={"50px"}
          _hover={{
            background: "linear-gradient(70deg, #f68920 0%, #fc5934 100%)",
            transform: "translateY(-4px)"
          }}
        >
          Về Trang chủ
        </Button>
      </Center>
    </Box>
  );
};
