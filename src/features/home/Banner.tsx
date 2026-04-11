import { Box, Container } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const BannerFooter = dynamic(() =>
  import("@/components/BannerFooter").then((mod) => mod.BannerFooter)
);
const SwiperNavButtons = dynamic(() =>
  import("@/components/SwiperNavButtons").then((mod) => mod.SwiperNavButtons)
);

export const CardTeacher = ({
  title,
  image
}: {
  title: string;
  image: string;
}) => {
  return (
    <Image
      priority
      src={image}
      alt={title}
      width={1920}
      height={780}
      style={{ width: "100%", height: "auto" }}
    />
  );
};

export const Banner = ({ banner }: any) => {
  const teachers = [
    {
      title:
        banner?.list_background?.background_1?.title ||
        "ĐẠI HỌC TỪ XA HỌC VIỆN TÀI CHÍNH TUYỂN SINH 2024   ",
      avt: banner?.list_background?.background_1?.image || `/b1.webp`
    },
    {
      title:
        banner?.list_background?.background_2?.title ||
        "ĐẠI HỌC TỪ XA HỌC VIỆN TÀI CHÍNH TUYỂN SINH 2024",
      avt: banner?.list_background?.background_2?.image || `/b2.webp`
    },
    {
      title:
        banner?.list_background?.background_3?.title ||
        "ĐẠI HỌC TỪ XA HỌC VIỆN TÀI CHÍNH TUYỂN SINH 2024",
      avt: banner?.list_background?.background_3?.image || `/b3.webp`
    },
    {
      title:
        banner?.list_background?.background_4?.title ||
        "ĐẠI HỌC TỪ XA HỌC VIỆN TÀI CHÍNH TUYỂN SINH 2024",
      avt: banner?.list_background?.background_4?.image || `/b4.webp`
    }
  ];

  return (
    <Box pt={{ base: "100px", md: "0" }}>
      <Container maxW="8xl" mt={{ base: "5px", md: "100px", lg: "0" }}>
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          loop={true}
          modules={[Autoplay, EffectFade, Navigation]}
          className="mySwiper"
        >
          {teachers?.map((teacher, index) => (
            <SwiperSlide key={index} className="swiperSlide">
              <CardTeacher title={teacher.title} image={teacher.avt} />
            </SwiperSlide>
          ))}
          <SwiperNavButtons />
        </Swiper>
        <BannerFooter footer_banner={banner?.footer_banner} />
      </Container>
    </Box>
  );
};
