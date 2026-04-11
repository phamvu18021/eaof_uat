import styled from "@emotion/styled";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useSwiper } from "swiper/react";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();
  const NavButtonsContainer = styled.div`
    position: relative;
    z-index: 20000;
    top: -80px;
    right: 6%;
    display: flex;
    justify-content: right;
    margin-top: 50px;
    padding-bottom: 30px;
    @media (max-width: 768px) {
      top: -70px;
      right: 2%;
    }
  `;

  const NavButton = styled.button`
    display: flex;
    width: 53px;
    height: 53px;
    border: none;
    outline: none;
    border-radius: 100px;
    background-color: hsl(0, 0%, 100%);
    color: #000000;
    margin: 0px 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
    @media (max-width: 768px) {
      width: 40px;
      height: 40px;
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
          priority
          style={{ width: "22px", height: "auto" }}
        />
      </NavButton>
      <NavButton onClick={() => swiper.slidePrev()}>
        <Image
          alt={"home image"}
          src={"/s-right.svg"}
          width={64}
          height={64}
          priority
          style={{ width: "22px", height: "auto" }}
        />
      </NavButton>
    </NavButtonsContainer>
  );
};
