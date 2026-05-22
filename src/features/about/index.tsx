"use client";

import { BannerGt } from "./components/BannerGt";
import { AboutUs } from "./components/IntroEln";

export interface AboutProps {
  initialData?: any;
}

export const About = ({ initialData }: AboutProps) => {
  const home_content = initialData;
  return (
    <>
      <BannerGt item={home_content?.acf?.item} />
      <AboutUs item={home_content?.acf?.item} />
    </>
  );
};
