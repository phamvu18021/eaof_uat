"use client";

import {
  Box,
  Container,
  Divider,
  Grid,
  GridItem,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList
} from "@chakra-ui/react";
import Image from "next/image";

const TrendList = ({ text }: { text: string }) => {
  const items = text.split("\n");
  return (
    <UnorderedList pt="10px" px="30px" textAlign={"justify"}>
      {items.map((item, index) => (
        <ListItem key={index} style={{ whiteSpace: "pre-line" }}>
          {item}
        </ListItem>
      ))}
    </UnorderedList>
  );
};

export const Trend = ({ trend }: any) => {
  const defaultText1 =
    "Tiết kiệm thời gian học, học phí. Không phát sinh các chi phí khác.\nSố lượng tín chỉ theo đầu vào của sinh viên. Có thể đăng ký nhiều tín chỉ trong 1 kỳ\nĐội ngũ giảng viên hàng đầu, giàu kinh nghiệm đang trực tiếp công tác tại trường\nChủ nhiệm lớp đồng hành, hỗ trợ sinh viên trong suốt thời gian học tập";
  const text1 = trend?.list?.list_1?.sub_1 || defaultText1;

  const defaultText2 =
    "Phương pháp đào tạo e-Learning hiện đại, là xu hướng giáo dục thời 4.0\nBằng tốt nghiệp không ghi hình thức đào tạo, được Bộ GD&ĐT công nhận, mở ra nhiều cơ hội cho người đi làm muốn sở hữu tấm bằng cử nhân giá trị\nBằng có giá trị sử dụng trên toàn quốc, đủ điều kiện học lên cao học, thi công chức theo đúng quy định";
  const text2 = trend?.list?.list_2?.sub_1 || defaultText2;

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
                {trend?.heading?.title || "XU HƯỚNG HỌC TẬP THEO HỆ TỪ XA"}
              </Text>
            </Box>
          </GridItem>
          <GridItem
            textAlign={"center"}
            fontWeight={500}
            lineHeight={"30px"}
            fontSize={"17px"}
            color="#4d546b"
          >
            <Text pt={"12px"}>
              {trend?.heading?.desc ||
                "Giải pháp tối ưu cho người đi làm muốn học thêm bằng Đại học"}
            </Text>
            <Text>
              {trend?.heading?.sub_desc || "Tiện lợi – Hiện đại - Tiết kiệm"}
            </Text>
          </GridItem>
        </SimpleGrid>
        <SimpleGrid
          mt="30px"
          spacing={"8"}
          gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        >
          <Grid
            h={"460px"}
            boxShadow={{
              base: "none",
              lg: "0px 0px 10px 0px rgba(138,138,138,1)"
            }}
            gridTemplateColumns={{
              base: "1fr",
              md: " 1fr",
              lg: "repeat(2, 1fr)"
            }}
          >
            <GridItem>
              <Image
                src={trend?.list?.list_1?.image || "/TX22.webp"}
                alt="Học Viện Tài Chính"
                width={1080}
                height={1080}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "-50px 0px"
                }}
              />
            </GridItem>
            <GridItem>
              <Box bg={"white"} w={{ base: "100%", lg: "300px" }} h={"100%"}>
                <Box display={"flex"} pt="20px">
                  <Divider
                    ml={{ base: "30px", lg: "-30px" }}
                    w={"60px"}
                    pt={"30px"}
                    mr={"20px"}
                    borderColor={"#f5750d"}
                    style={{ borderBottomWidth: "4px" }}
                  />
                  <Text
                    fontWeight={"bold"}
                    textAlign={"left"}
                    pt={"12px"}
                    fontSize={"24px"}
                    color={"#00165a"}
                  >
                    {trend?.list?.list_1?.title || "Hệ từ xa"}
                  </Text>
                </Box>
                <Text px="30px" color="red">
                  {trend?.list?.list_1?.desc || "Lợi thế sinh viên nhận được"}
                </Text>
                <TrendList text={text1} />
              </Box>
            </GridItem>
          </Grid>
          <Grid
            mt={{ base: "150px", md: "400px", lg: "0px" }}
            mb={{ base: "450px", md: "450px", lg: "0px" }}
            h={"460px"}
            boxShadow={{
              base: "none",
              lg: "0px 0px 10px 0px rgba(138,138,138,1)"
            }}
            gridTemplateColumns={{
              base: "1fr",
              md: " 1fr",
              lg: "repeat(2, 1fr)"
            }}
          >
            <GridItem>
              <Image
                src={trend?.list?.list_2?.image || "/XT3.webp"}
                alt="Học Viện Tài Chính"
                width={500}
                height={800}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </GridItem>
            <GridItem>
              <Box bg={"white"} w={{ base: "100%", lg: "300px" }} h={"100%"}>
                <Box display={"flex"} pt="20px">
                  <Divider
                    ml={{ base: "30px", lg: "-30px" }}
                    w={"60px"}
                    pt={"30px"}
                    mr={"20px"}
                    borderColor={"#f5750d"}
                    style={{ borderBottomWidth: "4px" }}
                  />
                  <Text
                    fontWeight={"bold"}
                    textAlign={"left"}
                    pt={"12px"}
                    fontSize={"24px"}
                    color={"#00165a"}
                  >
                    {trend?.list?.list_2?.title || "Hệ từ xa"}
                  </Text>
                </Box>
                <Text px="30px" color="red">
                  {trend?.list?.list_2?.desc || "Tiềm năng phát triển"}
                </Text>
                <TrendList text={text2} />
              </Box>
            </GridItem>
          </Grid>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
