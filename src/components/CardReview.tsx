import { Box, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { AiFillStar } from "react-icons/ai";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
SwiperCore.use([Navigation, Autoplay]);

export const CardReview = ({
  title,
  desc,
  image
}: {
  title: string;
  desc: string;
  image: string;
}) => {
  const CardContainer = styled.div`
    position: relative;
    width: 270px;
    height: 330px;

    border-radius: 16px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid #ffffff;
    background-color: #ffffff;
    color: #000000;
    &:hover {
      height: 360px;
      transition: all 0.6s ease;
      .t {
        box-shadow: 0px 0px 0px 5px rgba(252, 185, 0, 1);
        transition: opacity 0.3s ease;
      }
      .stars {
        opacity: 1;
      }
    }
  `;

  const ImgNameContainer = styled.div`
    width: 100%;
    height: 210px;
    margin-left: auto;
    margin-right: auto;
    margin-top: -45px;
  `;

  const Image = styled.img`
    display: block;
    width: 85px;
    height: 85px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 70px;
    box-shadow: 0px 0px 0px 5px;
    object-fit: cover;
  `;

  const Name = styled.h3`
    text-align: justify;
    padding: 16px;
    font-size: 14px;
    line-height: 26px;
    color: #454545;
  `;
  const StarsContainer = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    opacity: 0; /* Hidden by default */
    transition: opacity 0.3s ease;
    font-size: 24px;
    color: rgba(252, 185, 0, 1);
    margin-top: 15px;
  `;
  return (
    <Box
      height={{ base: "800px", lg: "600px" }}
      pt={{ base: "500px", lg: "330px" }}
      pb={"60px"}
    >
      <CardContainer>
        <ImgNameContainer>
          <Image src={image} alt="image" width={85} height={85} className="t" />
          <Name>
            <Text
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
          </Name>
          <Text fontWeight={700} size="md" color={"black"} textAlign={"center"}>
            {title}
          </Text>
          <StarsContainer className="stars">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </StarsContainer>
        </ImgNameContainer>
      </CardContainer>
    </Box>
  );
};
