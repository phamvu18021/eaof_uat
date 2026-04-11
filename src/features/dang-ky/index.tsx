import { FormWrapper } from "@/components/FormWrapper";
import {
  Box,
  Container,
  Divider,
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
    <UnorderedList
      mt="20px"
      fontSize={{ base: "14px", md: "16px", lg: "16px" }}
      color="white"
      spacing="15px"
    >
      {items.map((item, index) => (
        <ListItem key={index} style={{ whiteSpace: "pre-line" }}>
          {item}
        </ListItem>
      ))}
    </UnorderedList>
  );
};

export const Lienhe = ({ dk }: any) => {
  const defaultText2 =
    "Chương trình do Học Viện Tài Chính đào tạo và cấp bằng, được Bộ GD&ĐT công nhận\n Thời gian học nhanh, tiết kiệm chi phí. Học 100% Online mọi lúc mọi nơi\n Chỉ xét tuyển hồ sơ đầu vào. Không phải thi tuyển";
  const text2 = dk?.sub_1 || defaultText2;
  return (
    <>
      <Box
        bg="#1d1d1d67"
        bgSize="cover"
        bgRepeat={"no-repeat"}
        position="relative"
      >
        <Image
          priority
          alt="Mountains"
          src={dk?.image || "/dang-ky-bg.webp"}
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            zIndex: "-1"
          }}
        />
        <Container maxW="6xl">
          <SimpleGrid columns={{ base: 1, lg: 3 }}>
            <GridItem
              colSpan={{ base: 1, lg: 2 }}
              pt={{ base: "100px", md: "128px", lg: "0px" }}
              pb={{ base: "0", md: "0px", lg: "100px" }}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              justifyContent={"center"}
            >
              <Box ml={0} display={"flex"}>
                <Divider
                  w={"50px"}
                  pt={"15px"}
                  mr={"20px"}
                  borderColor={"#f5750d"}
                  style={{ borderBottomWidth: "4px" }}
                />
                <Text
                  fontWeight={"500"}
                  textAlign={"left"}
                  fontSize={{ base: "16px", md: "16px", lg: "18px" }}
                  color={"#ffffff"}
                >
                  {dk?.title || "ĐẠI HỌC TỪ XA – VIỆN TÀI CHÍNH"}
                </Text>
              </Box>
              <Text
                fontWeight={"bold"}
                textAlign={"left"}
                pt={"12px"}
                fontSize={{ base: "26px", md: "26px", lg: "34px" }}
                color={"white"}
              >
                {dk?.desc_1 || "ĐĂNG KÝ TƯ VẤN MIỄN PHÍ"}
              </Text>
              <Text
                fontWeight={"bold"}
                textAlign={"left"}
                pt={"12px"}
                fontSize={{ base: "26px", md: "26px", lg: "34px" }}
                color={"white"}
              >
                {dk?.desc_2 || "NHẬN LỘ TRÌNH HỌC TẬP NHANH CHÓNG"}
              </Text>
              <TrendList text={text2} />
            </GridItem>
            <GridItem
              pt={{ base: "50px", md: "128px", lg: "128px" }}
              display={"flex"}
              justifyContent={"center"}
              flexDirection={"column"}
              pb={{ base: "50px", lg: "140px" }}
              pl={{ lg: "30px", md: "0", base: "0" }}
            >
              <FormWrapper />
            </GridItem>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
};
