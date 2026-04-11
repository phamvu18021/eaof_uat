import styled from "@emotion/styled";
import Image from "next/image";
import { useEffect, useState } from "react";
interface BackToTopButtonWrapperProps {
  showButton: boolean;
}
const BackToTopButtonWrapper = styled.div<BackToTopButtonWrapperProps>`
  position: fixed;
  bottom: ${(props) => (props.showButton ? "150px" : "150px")};
  right: 50px;
  width: 40px;
  height: 40px;
  z-index: 999;
  background: linear-gradient(-190deg, #f7c42a, #f5750d);
  border-radius: 25px;
  text-align: center;
  border: 2px solid #e7e7e7;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  opacity: ${(props) => (props.showButton ? "1" : "0")};
  overflow: hidden;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    bottom: 140px;
    background: darken(#222, 15%);
    box-shadow: 0 10px 5px rgba(0, 0, 0, 0.1);
  }
`;

const ArrowIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  opacity: 1;
`;

export const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const toggleHeight = window.innerHeight * 0.6;

    const handleScroll = () => {
      if (window.scrollY > toggleHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <BackToTopButtonWrapper showButton={showButton} onClick={scrollToTop}>
      <ArrowIcon>
        <Image
          alt={"home image"}
          src={"/s-up.svg"}
          width={64}
          height={64}
          priority
          style={{ width: "30px", height: "auto" }}
        />
      </ArrowIcon>
    </BackToTopButtonWrapper>
  );
};
