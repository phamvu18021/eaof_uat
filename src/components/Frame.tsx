import { useModal } from "@/components/ModalContext";
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
import Image from "next/image";

export const Frame = ({ data }: any) => {
  const { onToggle } = useModal();
  return (
    <>
      <Box
        pt={"70px"}
        bgRepeat={"no-repeat"}
        bgSize="cover"
        w={"100%"}
        bg="#1d1d1dad"
        position="relative"
      >
        <Image
          priority
          alt="Mountains"
          src={data?.image || "/AOF-bg-lkg.webp"}
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            zIndex: "-1"
          }}
        />

        <Container maxW={"6xl"}>
          <Text
            mt={{ lg: "30px", md: "50px", base: "50px" }}
            fontSize={{ base: "16px", lg: "18px" }}
            textAlign={"center"}
            color={"white"}
          >
            {data?.title_1 || "HỌC VIỆN TÀI CHÍNH"}
          </Text>
          <Text
            fontSize={{ base: "16px", lg: "18px" }}
            textAlign={"center"}
            color={"white"}
          >
            {data?.title_2 ||
              "Chất lượng – uy tín – hiệu quả - chuyên nghiệp – hiện đại"}
          </Text>
          <Text
            textAlign={"center"}
            fontSize={{ lg: "48px", base: "24px", md: "36px" }}
            fontWeight={700}
            pt={{ lg: "50px", base: "30px" }}
            color={"#fe9800"}
          >
            {data?.title_3 || "LỊCH KHAI GIẢNG ĐẠI HỌC HỆ TỪ XA"}
          </Text>
          <Text
            mt={"24px"}
            fontSize={{ base: "16px", lg: "24px" }}
            textAlign={"center"}
            color={"white"}
          >
            {data?.title_4 || "Lịch khai giảng dự kiến Hệ từ xa khóa mới nhất"}
          </Text>

          <SimpleGrid
            spacing="30px"
            gridTemplateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)"
            }}
            mt="73px"
          >
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              flexDirection={"column"}
              bg=" linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);"
              borderRadius={"18px"}
            >
              <Flex
                mt="27px"
                lineHeight="50px"
                textAlign={"center"}
                fontSize="50px"
                fontWeight="700"
                color="#222222"
                flexDirection="column"
                alignItems="center"
              >
                {data?.time?.ngay || "1"}
                <Divider
                  w={"40px"}
                  textAlign={"center"}
                  borderColor={"#ff7300"}
                  pt="5px"
                  style={{ borderBottomWidth: "4px" }}
                />
              </Flex>
              <Text lineHeight="45px" textAlign={"center"} fontSize="24px">
                Ngày
              </Text>
            </Flex>
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              flexDirection={"column"}
              bg=" linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);"
              borderRadius={"18px"}
            >
              <Flex
                mt="27px"
                lineHeight="50px"
                textAlign={"center"}
                fontSize="50px"
                fontWeight="700"
                color="#222222"
                flexDirection="column"
                alignItems="center"
              >
                {data?.time?.thang || "1"}
                <Divider
                  w={"40px"}
                  textAlign={"center"}
                  borderColor={"#ff7300"}
                  pt="5px"
                  style={{ borderBottomWidth: "4px" }}
                />
              </Flex>
              <Text lineHeight="45px" textAlign={"center"} fontSize="24px">
                Tháng
              </Text>
            </Flex>
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              flexDirection={"column"}
              bg=" linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);"
              borderRadius={"18px"}
            >
              <Flex
                mt="27px"
                lineHeight="50px"
                textAlign={"center"}
                fontSize="50px"
                fontWeight="700"
                color="#222222"
                flexDirection="column"
                alignItems="center"
              >
                {data?.time?.nam || "2024"}
                <Divider
                  w={"40px"}
                  textAlign={"center"}
                  borderColor={"#ff7300"}
                  pt="5px"
                  style={{ borderBottomWidth: "4px" }}
                />
              </Flex>
              <Text lineHeight="45px" textAlign={"center"} fontSize="24px">
                Năm
              </Text>
            </Flex>
            <Box
              px="15px"
              borderRadius={"18px"}
              pb="10px"
              bg=" linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);"
            >
              <Text
                textAlign={"center"}
                lineHeight="50px"
                fontSize="24px"
                fontWeight="700"
              >
                Địa điểm tổ chức
              </Text>
              <Text fontSize="18px" textAlign={"justify"}>
                {data?.location ||
                  "Hội trường Học viện Tài chính, Số 58 Lê Văn Hiến, phường Đức Thắng, quận Bắc Từ Liêm, thành phố Hà Nội"}
              </Text>
            </Box>
          </SimpleGrid>

          <Text
            fontSize={"18px"}
            lineHeight={"24px"}
            textAlign={"center"}
            fontWeight={"600"}
            mt={"80px"}
            color={"#ffffff"}
          >
            Đăng Ký nhận thông tin chi tiết lịch khai giảng mới nhất
          </Text>
          <Flex
            mt="40px"
            pb="100px"
            justifyContent="center"
            alignItems="center"
          >
            <Button
              color={"white"}
              size={"lg"}
              rounded={"sm"}
              borderRadius="4px"
              bg={"linear-gradient(90deg,#f55301 0%,#ff9f00 50%,#f55301)"}
              transition={"all ease .4s"}
              h={"50px"}
              _hover={{
                background: "linear-gradient(70deg, #f68920 0%, #fc5934 100%)"
              }}
              onClick={onToggle}
            >
              ĐĂNG KÝ NGAY
            </Button>
          </Flex>
        </Container>
      </Box>
    </>
  );
};
