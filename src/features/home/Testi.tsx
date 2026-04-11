import { useSize } from "@/hooks/useSizeWindow";
import {
  Box,
  Container,
  Divider,
  GridItem,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import Image from "next/image";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
SwiperCore.use([Navigation, Autoplay]);

const CardReview = dynamic(() =>
  import("@/components/CardReview").then((mod) => mod.CardReview)
);

export const StyledSwiperSlide = styled(SwiperSlide)`
  background-position: center;
  background-size: cover;
  width: 300px;
`;

export const SwiperNavButtons = () => {
  const swiper = useSwiper();
  const NavButtonsContainer = styled.div`
    position: relative;
    z-index: 10;
    top: -500px;
    display: flex;
    justify-content: right;
    margin-top: 50px;
    right: inherit;
    padding-bottom: 30px;
    @media (max-width: 768px) {
      top: -470px;
      justify-content: center;
    }
  `;
  const NavButton = styled.button`
    display: flex;
    width: 40px;
    height: 40px;
    border: none;
    outline: none;
    border-radius: 100px;
    background-color: hsl(0, 0%, 100%);
    color: #000000;
    margin: 0px 1rem;
    box-shadow: 0px 0px 15px 12px rgba(196, 196, 196, 0.6);
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
        <Image
          alt={"home image"}
          src={"/s-left.svg"}
          width={64}
          height={64}
          style={{ width: "22px", height: "auto" }}
        />
      </NavButton>
      <NavButton onClick={() => swiper.slidePrev()}>
        <Image
          alt={"home image"}
          src={"/s-right.svg"}
          width={64}
          height={64}
          style={{ width: "22px", height: "auto" }}
        />
      </NavButton>
    </NavButtonsContainer>
  );
};

export const Testi = ({ review }: any) => {
  const { size } = useSize();

  const teachers = [
    {
      title: review?.list_review?.list_1?.title || "Trần Vân Anh ",
      desc:
        review?.list_review?.list_1?.desc ||
        "Mình đã từng tốt nghiệp hệ chính quy, vì thế đây là cơ hội để được trải nghiệm thêm một cách thức học mới. Mình rất vui khi học tập cùng các bạn và anh chị đang đi làm nên học hỏi được rất nhiều điều bổ ích",
      avt: review?.list_review?.list_1?.image || `/testi-02.webp`
    },
    {
      title: review?.list_review?.list_2?.title || "Nguyễn Thanh Huệ ",
      desc:
        review?.list_review?.list_2?.desc ||
        "Mình học ngành Kế toán e-Learning tại AOF. Trước đây mình đã học Cao đẳng kế toán. Hệ từ xa rất phù hợp với bản thân mình, khi mà mình phải đi làm ban ngày và chỉ sắp xếp thời gian học được buổi tối",
      avt: review?.list_review?.list_2?.image || `/testi-03.webp`
    },
    {
      title: review?.list_review?.list_3?.title || "Nguyễn Quang Trường  ",
      desc:
        review?.list_review?.list_3?.desc ||
        "Nhà trường đã áp dụng khoa học kỹ thuật, phần mềm giáo dục để hỗ trợ trong công tác giảng dạy, đó là bước tiến lớn của xã hội và là xu hướng giáo dục toàn cầu. Tôi tiết kiệm được khá nhiều thời gian và chi phí khi tham gia chương trình học tập này",
      avt: review?.list_review?.list_3?.image || `/testi-01.webp`
    },
    {
      title: review?.list_review?.list_4?.title || "Nguyễn Thái Học",
      desc:
        review?.list_review?.list_4?.desc ||
        "Mình công nhận giáo trình và cách dạy ở đây rất hay, bài bản, dễ nhớ. Kiến thức thực tế hữu ích, cách học linh động giúp mình dễ dàng sắp xếp thời gian dành cho công việc và gia đình",
      avt: review?.list_review?.list_4?.image || `/testi-04.webp`
    },
    {
      title: review?.list_review?.list_1?.title || "Trần Vân Anh ",
      desc:
        review?.list_review?.list_1?.desc ||
        " Mình đã từng tốt nghiệp hệ chính quy, vì thế đây là cơ hội để được trải nghiệm thêm một cách thức học mới. Mình rất vui khi học tập cùng các bạn và anh chị đang đi làm nên học hỏi được rất nhiều điều bổ ích",
      avt: review?.list_review?.list_1?.image || `/testi-02.webp`
    },
    {
      title: review?.list_review?.list_2?.title || "Nguyễn Thanh Huệ ",
      desc:
        review?.list_review?.list_2?.desc ||
        "Mình học ngành Kế toán e-Learning tại AOF. Trước đây mình đã học Cao đẳng kế toán. Hệ từ xa rất phù hợp với bản thân mình, khi mà mình phải đi làm ban ngày và chỉ sắp xếp thời gian học được buổi tối",
      avt: review?.list_review?.list_2?.image || `/testi-03.webp`
    },
    {
      title: review?.list_review?.list_3?.title || "Nguyễn Quang Trường  ",
      desc:
        review?.list_review?.list_3?.desc ||
        "Nhà trường đã áp dụng khoa học kỹ thuật, phần mềm giáo dục để hỗ trợ trong công tác giảng dạy, đó là bước tiến lớn của xã hội và là xu hướng giáo dục toàn cầu. Tôi tiết kiệm được khá nhiều thời gian và chi phí khi tham gia chương trình học tập này",
      avt: review?.list_review?.list_3?.image || `/testi-01.webp`
    },
    {
      title: review?.list_review?.list_4?.title || "Nguyễn Thái Học",
      desc:
        review?.list_review?.list_4?.desc ||
        "Mình công nhận giáo trình và cách dạy ở đây rất hay, bài bản, dễ nhớ. Kiến thức thực tế hữu ích, cách học linh động giúp mình dễ dàng sắp xếp thời gian dành cho công việc và gia đình",
      avt: review?.list_review?.list_4?.image || `/testi-04.webp`
    }
  ];

  return (
    <Box bg={"#007180"}>
      <Container
        maxW={"6xl"}
        backgroundImage={"/maptesti.png"}
        bgRepeat="no-repeat"
        backgroundPosition="center"
      >
        <SimpleGrid
          pos={"absolute"}
          pt={"80px"}
          spacing={"8"}
          gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          marginBottom={"60px"}
        >
          <GridItem>
            <Box display={"flex"} top={"0"}>
              <Divider
                w={"70px"}
                pt={"40px"}
                mr={"20px"}
                borderColor={"#fe9800"}
                style={{ borderBottomWidth: "4px" }}
              />
              <Text
                fontWeight={"bold"}
                textAlign={"left"}
                fontSize={"36px"}
                color={"#fe9800"}
              >
                {review?.heading_review?.title ||
                  "SINH VIÊN NÓI GÌ VỀ HỆ TỪ XA CỦA HỌC VIỆN TÀI CHÍNH?"}
              </Text>
            </Box>
            <Text
              pr="10px"
              fontSize={"18px"}
              color="white"
              textAlign={{ base: "center", lg: "right" }}
            >
              {review?.heading_review?.desc ||
                "Hãy lắng nghe cảm nhận của các bạn sinh viên"}
            </Text>
          </GridItem>
        </SimpleGrid>

        <Swiper
          autoplay={{ delay: 2500 }}
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
          modules={[Navigation, Autoplay]}
        >
          {teachers?.map((teacher, index) => (
            <StyledSwiperSlide key={index}>
              <CardReview
                title={teacher.title}
                desc={teacher.desc}
                image={teacher.avt}
              />
            </StyledSwiperSlide>
          ))}

          <SwiperNavButtons />
        </Swiper>
      </Container>
    </Box>
  );
};
