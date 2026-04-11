"use client";

import {
  Box,
  Button,
  Container,
  Divider,
  GridItem,
  HStack,
  Heading,
  Icon,
  SimpleGrid,
  Text,
  VStack
} from "@chakra-ui/react";
import type { As } from "@chakra-ui/system";
import Link from "next/link";
import { AiOutlineBarChart } from "react-icons/ai";
import { LiaIndustrySolid } from "react-icons/lia";

export const categotys = [
  {
    image: "/quan-tri-kinh-doanh-fix.png",
    path: "/nganh-quan-tri-kinh-doanh",
    title: "Ngành quản trị kinh doanh",
    icon: AiOutlineBarChart,
    desc: "Ngành Quản trị kinh doanh chuẩn bị cho người học những năng lực cần thiết cho việc quản lý các loại hình tổ chức khác nhau, từ các doanh nghiệp cho đến các đơn vị thuộc khu vực"
  },

  {
    image: "/ke-toan-fix.png",
    path: "nganh-ke-toan",
    title: "Ngành kế toán",
    icon: LiaIndustrySolid,
    desc: "Kế toán là công việc thu thập và xử lý dữ liệu kinh doanh, tài chính của tổ chức để cung cấp thông tin cho việc ra quyết định quản lý"
  }
];

export const Item = ({
  path,
  title,
  desc,
  icon
}: {
  path: string;
  title: string;
  desc: string;
  icon?: As;
}) => {
  return (
    <Box
      as={Link}
      href={path || "/"}
      pos="relative"
      transition={"all ease .4s"}
      color={"#004956"}
      p={{ base: "16px", md: "20px", lg: "24px" }}
      border={"1px solid"}
      borderColor={"gray.300"}
      rounded={"sm"}
      boxShadow="2xl"
      overflow={"hidden"}
      mb={"40px"}
      _hover={{
        color: " white",

        "& Icon": {
          color: "white"
        },
        "& .desc-text": {
          color: "white"
        },
        "& svg": {
          color: "white"
        },
        "& Button": {
          color: "white"
        },
        "& .Layerr": {
          top: "0"
        }
      }}
    >
      <Box
        className="Layerr"
        zIndex={"1"}
        pos={"absolute"}
        top={"calc(100%)"}
        h={"100%"}
        w={"100%"}
        left={0}
        bg={"linear-gradient(to left , rgb(40,116,252) ,rgb(2,3,129) )"}
        transition={"0.5s"}
      ></Box>
      <Box zIndex={"2"} pos={"relative"}>
        <Heading as={"h2"} size={{ base: "md" }}>
          {title}
        </Heading>
        <HStack spacing={"12px"} pt={"16px"}>
          <Icon
            as={icon}
            width={{ base: "50px", md: "100px" }}
            height={{ base: "50px", md: "100px" }}
            alt="Ngành kế toán HVTC"
            color={" #4054B2"}
            mt={"-28px"}
          />

          <VStack align={"start"}>
            <Text
              className="desc-text"
              color={"gray.500"}
              fontSize={{ base: ".8rem", md: "sm" }}
            >
              {desc}
            </Text>
            <Button mt={"22px"} variant={"link"} color={"#004956"}>
              Xem chi tiết
            </Button>
          </VStack>
        </HStack>
      </Box>
    </Box>
  );
};

export const Categorys = () => {
  return (
    <Box bg={"white"} py={"82px"}>
      <Container maxW="6xl">
        <SimpleGrid
          spacing={"8"}
          gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          marginBottom={"10px"}
        >
          <GridItem>
            <Box display={"flex"}>
              <Divider
                w={"50px"}
                pt={"40px"}
                mr={"20px"}
                borderColor={"#f5750d"}
                style={{ borderBottomWidth: "4px" }}
              />
              <Text
                fontWeight={"bold"}
                textAlign={"left"}
                pt={"12px"}
                fontSize={"36px"}
                color={"#00165a"}
              >
                Xu hướng học tập theo hệ từ xa
              </Text>
            </Box>
          </GridItem>
          <GridItem
            textAlign={"center"}
            fontWeight={600}
            lineHeight={"30px"}
            fontSize={"18px"}
          >
            <Text pt={"12px"} color={"#fe9800"}>
              Giải pháp tối ưu cho người đi làm muốn học thêm bằng Đại học
            </Text>
            <Text color={"#fe1100"}>Tiện lợi – Hiện đại - Tiết kiệm</Text>
          </GridItem>
        </SimpleGrid>
        <SimpleGrid pt={"24px"} spacing={"8"} columns={{ base: 1, md: 2 }}>
          {categotys?.map((categoty, index) => (
            <Item
              key={index}
              path={categoty.path}
              title={categoty.title}
              desc={categoty.desc}
              icon={categoty.icon}
            />
          ))}
        </SimpleGrid>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="100%"
          bgPosition="center"
        >
          <Button
            color={"white"}
            size={"2xl"}
            rounded={"sm"}
            fontSize={"15px"}
            lineHeight={"63px"}
            p={"0 40px"}
            transform={"skew(-15deg, 0)"}
            bg={"linear-gradient(135deg,#00525c 0%,#007180 100%)"}
            transition={"all ease .4s"}
            _hover={{
              background: "linear-gradient(135deg,#007180 0%,#00525c100%)"
            }}
          >
            <Text transform={"skew( 15deg, 0)"}>Xem thêm</Text>
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
