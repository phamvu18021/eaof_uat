"use client";

import { Loading } from "@/components/Loading";
import { useModal } from "@/components/ModalContext";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const Banner = dynamic(() => import("./Banner").then((mod) => mod.Banner), {
  loading: () => <Loading />
});

const ListTeacher = dynamic(
  () => import("./ListTeacher").then((mod) => mod.ListTeacher),
  {
    loading: () => <Loading />
  }
);

const Event = dynamic(() => import("./Event").then((mod) => mod.Event), {
  loading: () => <Loading />
});

const Power = dynamic(() => import("./Power").then((mod) => mod.Power), {
  loading: () => <Loading />
});
const Testi = dynamic(() => import("./Testi").then((mod) => mod.Testi));

const Trend = dynamic(() => import("./Trend").then((mod) => mod.Trend));
const ScrollView = dynamic(() =>
  import("@/components/ScrollView").then((mod) => mod.ScrollView)
);

export const Home = ({ home_content }: any) => {
  const { isOpen, onOpen } = useModal();

  useEffect(() => {
    setTimeout(() => {
      !isOpen && onOpen && onOpen();
    }, 3500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Banner banner={home_content?.acf?.banner} />
      <ScrollView>
        <ListTeacher why={home_content?.acf?.why} />
        <Power object={home_content?.acf?.object} />
        <Trend trend={home_content?.acf?.trend} />
        <Testi review={home_content?.acf?.review} />
        <Event />
      </ScrollView>
    </>
  );
};
