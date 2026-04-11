"use client";
import { useSize } from "@/hooks/useSizeWindow";
import type { As } from "@chakra-ui/system";
import {
  Box,
  Container,
  Divider,
  Flex,
  GridItem,
  Heading,
  Icon,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { BsAlarm, BsFillPeopleFill } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import { GoPersonFill } from "react-icons/go";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiInputMethodLine
} from "react-icons/ri";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { A11y, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

export const CardTeacher = ({
  title,
  desc,
  icon
}: {
  title: string;
  desc: string;

  icon?: As;
}) => {
  return (
    <Box
      h="345px"
      bg="white"
      pos="relative"
      transition={"all ease .4s"}
      color={"#004956"}
      py={{ base: "16px", md: "20px", lg: "24px" }}
      px={{ base: "16px", md: "20px", lg: "18px" }}
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
      <Flex
        zIndex={"2"}
        pos={"relative"}
        flexDirection="column"
        alignItems="center"
      >
        <Icon
          as={icon}
          alt="Ngành kế toán HVTC"
          color={" #4054B2"}
          borderRadius="full"
          boxSize="50px"
        />
        <Heading mt="20px" textAlign="center" as={"h2"} fontSize={"20px"}>
          {title}
        </Heading>
        <Text
          mt="10px"
          className="desc-text"
          color={"gray.500"}
          fontSize={"15px"}
          textAlign={"justify"}
          style={{ whiteSpace: "pre-line" }}
          css={{
            display: "-webkit-box",
            WebkitLineClamp: "8",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis"
          }}
        >
          {desc}
        </Text>
      </Flex>
    </Box>
  );
};

export const StyledSwiperSlide = styled(SwiperSlide)`
  background-position: center;
  background-size: cover;
  width: 300px;
`;

export const SwiperNavButtons = () => {
  const swiper = useSwiper();
  const NavButtonsContainer = styled.div`
    display: flex;
    justify-content: right;
    margin-top: 50px;
    right: inherit;
    padding-bottom: 30px;
  `;
  const NavButton = styled.button`
    display: flex;
    width: 40px;
    height: 40px;
    border: none;
    outline: none;
    background-color: hsl(0, 0%, 100%);
    color: #000000;
    margin: 0px 1rem;
    box-shadow: 0px 0px 10px 10px rgba(196, 196, 196, 0.6);
    transition: all 0.5s;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    &:hover {
      background-color: hsl(
        40.08298755186722,
        96.7871485943775%,
        48.82352941176471%
      );
      cursor: pointer;
      color: #ffffff;
    }
  `;
  return (
    <NavButtonsContainer className="swiper-nav-btns">
      <NavButton onClick={() => swiper.slideNext()}>
        <RiArrowLeftSLine />
      </NavButton>
      <NavButton onClick={() => swiper.slidePrev()}>
        <RiArrowRightSLine />
      </NavButton>
    </NavButtonsContainer>
  );
};

export const ListTeacher = ({ why }: any) => {
  const { size } = useSize();
  const teachers = [
    {
      title: why?.list_why?.List_1?.list_1?.title || "Tiết kiệm chi phí ",
      desc:
        why?.list_why?.List_1?.list_1?.desc ||
        "Chủ động lựa chọn thời gian, địa điểm học tập phù hợp. Học ngay tại nhà hay bất cứ đâu, tiết kiệm tối đa chi phí phát sinh",

      icon: AiOutlineDollarCircle
    },
    {
      title: why?.list_why?.List_1?.list_2?.title || "Thời gian học ngắn ",
      desc:
        why?.list_why?.List_1?.list_2?.desc ||
        "Nhận bằng chỉ từ 2 đến 4 năm đào tạo tùy thuộc điều kiện đầu vào. Đăng ký học theo tín chỉ, sinh viên có thể học vượt đẩy nhanh thời gian đào tạo",

      icon: BsAlarm
    },
    {
      title: why?.list_why?.List_1?.list_3?.title || "Phương pháp hiện đại ",
      desc:
        why?.list_why?.List_1?.list_3?.desc ||
        "Chương trình học áp dụng phương pháp đào tạo trực tuyến theo hình thức E-Learning hiện đại, tạo ra môi trường học tập và trao đổi online thuận lợi nhất cho sinh viên",

      icon: RiInputMethodLine
    },
    {
      title: why?.list_why?.list_2?.list_4?.title || "Giảng viên đầu ngành  ",
      desc:
        why?.list_why?.list_2?.list_4?.desc ||
        "Đội ngũ giảng viên có chuyên môn cao, giàu kinh nghiệm đào tạo, hiện đang trực tiếp công tác tại trường ",

      icon: GoPersonFill
    },
    {
      title: why?.list_why?.list_2?.list_5?.title || "Bằng tốt nghiệp ",
      desc:
        why?.list_why?.list_2?.list_5?.desc ||
        "Tốt nghiệp sinh viên được nhận Bằng cử nhân do Học Viện Tài Chính cấp, được Bộ GD&ĐT công nhận, có giá trị tương đương bằng chính quy, Đủ điều kiện học lên cao học, xét bậc lương, thi công chức theo đúng quy định ",

      icon: FaUserGraduate
    },
    {
      title: why?.list_why?.list_2?.list_6?.title || "Cơ hội việc làm  ",
      desc:
        why?.list_why?.list_2?.list_6?.desc ||
        "Dễ dàng hơn khi xin việc, xét bậc lương tăng khả năng thăng tiến, đủ điều kiện thi cao học, công chức theo đúng quy định của Nhà nước ",

      icon: BsFillPeopleFill
    }
  ];

  return (
    <Box mt={{ base: "0", md: "30px", lg: "50px" }}>
      <Container maxW={"6xl"}>
        <SimpleGrid
          pt={"30px"}
          spacing={"8"}
          gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          marginBottom={"60px"}
        >
          <GridItem>
            <Box display={"flex"}>
              <Divider
                w={"70px"}
                pt={"40px"}
                mr={"20px"}
                borderColor={"#fe9800"}
                style={{ borderBottomWidth: "4px" }}
              />

              <Box
                fontWeight="bold"
                textAlign={"left"}
                pt={"12px"}
                fontSize={"36px"}
                color="#00165a"
                fontFamily="Lexend"
                display="inline"
              >
                {why?.title?.heading?.title || "TẠI SAO NÊN HỌC TỪ XA TẠI"}
                &nbsp;
                <Text fontWeight={700} display="inline" color="#fe9800">
                  {why?.title?.heading?.sub_title || "AOF E-LEARNING?"}
                </Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem
            textAlign={"left"}
            fontSize={"18px"}
            color={"#4d546b"}
            fontWeight={"500"}
          >
            <Text pt={"20px"} lineHeight={"30px"}>
              {why?.title?.sub?.desc ||
                "Bạn đang muốn tìm trường Đại Học chất lượng, phương pháp học hiện đại, tiết kiệm thời gian chi phí?"}
            </Text>
            <Text color="#fe9800" lineHeight={"30px"}>
              {why?.title?.sub?.sub_desc ||
                "Chương trình Đại học HỆ TỪ XA tại AOF sẽ giúp bạn điều đó!"}
            </Text>
          </GridItem>
        </SimpleGrid>
        <Box>
          <Swiper
            autoplay={{ delay: 3000 }}
            loop={true}
            slidesPerView={
              size.width < 768
                ? 1
                : size.width < 992
                  ? 2
                  : size.width < 1280
                    ? 3
                    : size.width < 1536
                      ? 4
                      : 4
            }
            spaceBetween={30}
            modules={[Navigation, A11y, Autoplay]}
            className="mySwiper"
          >
            {teachers?.map((teacher, index) => (
              <StyledSwiperSlide key={index}>
                <CardTeacher
                  title={teacher.title}
                  desc={teacher.desc}
                  icon={teacher.icon}
                />
              </StyledSwiperSlide>
            ))}
            <SwiperNavButtons />
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};
