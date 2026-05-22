"use client";

import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ScrollViews = dynamic(() =>
  import("@/components/ScrollView").then((mod) => mod.ScrollViews)
);

const Banners = dynamic(() => import("./Banner").then((mod) => mod.Banners));
const Program = dynamic(() => import("./Program").then((mod) => mod.Program));

const Categorys = dynamic(() =>
  import("./Categorys").then((mod) => mod.Categorys)
);
const Event = dynamic(() => import("./Event").then((mod) => mod.Event));

const ReasonsGrid = dynamic(() =>
  import("./ListBranch").then((mod) => mod.ReasonsGrid)
);

const Wellcome = dynamic(() => import("./Welcome").then((mod) => mod.Wellcome));

const ListAbout = dynamic(() =>
  import("./ListAbout").then((mod) => mod.ListAbout)
);

const Contact = dynamic(() => import("./Contact").then((mod) => mod.Contact));

const Testimonials = dynamic(() =>
  import("./Testimonials").then((mod) => mod.Testimonials)
);

const AdmissionInfo = dynamic(() =>
  import("./AdmissionInfo").then((mod) => mod.AdmissionInfo)
);

const DiplomaSection = dynamic(() =>
  import("./DiplomaSection").then((mod) => mod.DiplomaSection)
);

export const Home = () => {
  // const { isOpen, onOpen } = useModal();
  const [home_content, setHomeContent] = useState<any>(null);
  useEffect(() => {
    const getHomeContent = async () => {
      try {
        const res = await fetch(`/api/content-page/?type=trang-chu`, {
          next: { revalidate: 3 }
        });
        if (!res.ok) {
          throw new Error(`Posts fetch failed with status: ${res.statusText}`);
        }
        const data = await res.json();
        setHomeContent(data?.contentPage[0]);
      } catch (error) {
        console.error(error);
      }
    };
    getHomeContent();
  }, []);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     if (!isOpen && onOpen) onOpen();
  //   }, 6000);

  //   return () => window.clearTimeout(timeout);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <>
      <Banners banners={home_content?.acf?.banners} />
      <Program chuong_trinhs={home_content?.acf?.chuong_trinhs} />
      <ScrollViews fallback={<Box height="400px" />}>
        <ReasonsGrid ly_do={home_content?.acf?.ly_do} />
      </ScrollViews>
      <ScrollViews fallback={<Box height="300px" />}>
        <Wellcome about={home_content?.acf?.about} />
      </ScrollViews>
      <ScrollViews fallback={<Box height="300px" />}>
        <Box py={20}>
          <Categorys cac_nganh_dao_tao={home_content?.acf?.cac_nganh_dao_tao} />
        </Box>
      </ScrollViews>
      <ScrollViews fallback={<Box height="300px" />}>
        <AdmissionInfo item_6={home_content?.acf?.item_6} />
      </ScrollViews>
      <ScrollViews fallback={<Box height="300px" />}>
        <ListAbout receive={home_content?.acf?.receive} />
      </ScrollViews>
      <ScrollViews fallback={<Box height="300px" />}>
        <DiplomaSection item_7={home_content?.acf?.item_7} />
      </ScrollViews>
      <ScrollViews fallback={<Box height="300px" />}>
        <Contact item_8={home_content?.acf?.item_8} />
      </ScrollViews>
      <ScrollViews fallback={<Box height="300px" />}>
        <Testimonials item_5={home_content?.acf?.item_5} />
      </ScrollViews>
      <ScrollViews fallback={<Box height="300px" />}>
        <Event />
      </ScrollViews>
    </>
  );
};
