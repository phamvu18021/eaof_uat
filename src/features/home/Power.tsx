import { useModal } from "@/components/ModalContext";
import {
  Box,
  Button,
  Container,
  Flex,
  GridItem,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { ReactNode } from "react";

const Timer = dynamic(() =>
  import("@/components/Timer").then((mod) => mod.Timer)
);

type ListitemsProps = {
  children: ReactNode;
};

const Listitems = ({ children }: ListitemsProps) => {
  return (
    <Text
      style={{ whiteSpace: "pre-line" }}
      textAlign={"justify"}
      pt={"10px"}
      fontSize={"18px"}
      css={{
        display: "-webkit-box",
        WebkitLineClamp: "8",
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }}
    >
      {children}
    </Text>
  );
};

export const Power = ({ object }: any) => {
  const { onToggle } = useModal();

  return (
    <Box bg="#edf2f7" py={"80px"} bgRepeat="no-repeat">
      <Container maxW="6xl">
        <SimpleGrid
          spacing={"8"}
          gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        >
          <GridItem>
            <Image
              priority
              src={object?.image || `/b7.webp`}
              width={1080}
              height={1080}
              alt="image"
              style={{ maxHeight: "480px", objectFit: "contain" }}
            />

            <Box
              color={"#00165a"}
              mt="25px"
              fontSize={"24px"}
              fontWeight="600"
              textAlign="center"
            >
              Thời gian nhận hồ sơ xét tuyển
            </Box>
            <Flex justifyContent="center">
              <Timer time={object?.list?.time} />
            </Flex>
          </GridItem>
          <GridItem>
            <Box>
              <Text
                fontWeight={"bold"}
                textAlign={"left"}
                fontSize={"24px"}
                color={"#fe9800"}
              >
                {object?.list?.title || "TUYỂN SINH 2024"}
              </Text>
              <Text textAlign={"left"} pt={"12px"} fontSize={"18px"}>
                {object?.list?.desc ||
                  "Xét tuyển theo hồ sơ học bạ THPT, Văn bằng; Nhận hồ sơ liên tục trong năm"}
              </Text>
            </Box>
            <Box>
              <Text
                fontWeight={"bold"}
                textAlign={"left"}
                pt={"12px"}
                fontSize={"24px"}
                color={"#fe9800"}
              >
                {object?.list?.title_2 || "Đợt khai giảng: 4/2024"}
              </Text>
              <Text
                fontWeight={"bold"}
                textAlign={"left"}
                pt={"12px"}
                fontSize={"18px"}
                color={"#00165a"}
              >
                {object?.list?.desc_2 || "1. Đối tượng tuyển sinh"}
              </Text>
              <Listitems>
                {object?.list?.list_sub_1 ||
                  "Sinh viên đang theo tại các trường đại học, cao đẳng.\n Cán bộ, công chức, người đang làm việc tại các cơ quan, tổ chức, doanh nghiệp nhà nước, tư nhân, … đã có bằng tốt nghiệp THPT.\n Những người đã có bằng tốt nghiệp THPT hoặc tương đương trở lên."}
              </Listitems>

              <Text
                fontWeight={"bold"}
                textAlign={"left"}
                pt={"12px"}
                fontSize={"18px"}
                color={"#00165a"}
              >
                {object?.list?.desc_3 || "2. Thời gian và thủ tục đăng ký"}
              </Text>
              <Listitems>
                {object?.list?.sub_2 ||
                  "Thời gian học: Căn cứ vào hồ sơ, văn bằng của sinh viên nộp trong hồ sơ xét tuyển.\n Cách đăng ký: Học viên vui lòng liên hệ theo hotline hoặc đăng ký theo form để được hỗ trợ tư vấn chi tiết về chương trình, lộ trình học và thủ tục đăng ký chương trình đại học từ xa của trường."}
              </Listitems>
            </Box>

            <Flex justifyContent="center" pt="25px">
              <Button
                color={"white"}
                size={"2xl"}
                rounded={"sm"}
                fontSize={"18px"}
                lineHeight={"63px"}
                p={"0 40px"}
                transform={"skew(-15deg, 0)"}
                bg={"linear-gradient(135deg,#035762 0%,#009eb3 100%)"}
                transition={"all ease .4s"}
                _hover={{
                  background: "linear-gradient(135deg,#009eb3 0%, #035762 100%)"
                }}
                onClick={onToggle}
              >
                <Text transform={"skew( 15deg, 0)"}>ĐĂNG KÝ NGAY</Text>
              </Button>
            </Flex>
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
