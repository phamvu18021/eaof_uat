"use client";

import { Loading } from "@/components/Loading";
import nextDynamic from "next/dynamic";
import { useEffect, useState } from "react";

const LichKg = nextDynamic(
  () => import("@/features/lich-khai-giang").then((mod) => mod.LichKg),
  { loading: () => <Loading /> }
);

export default function Page() {
  const [homeContent, setHomeContent] = useState<any>(null);

  useEffect(() => {
    const getHomeContent = async () => {
      try {
        const res = await fetch(`/api/content-page/?type=khai-giang`, {
          next: { revalidate: 3 }
        } as any);
        const data = await res.json();
        setHomeContent(data?.contentPage?.[0]);
      } catch (error) {
        console.error(error);
      }
    };
    getHomeContent();
  }, []);

  return <LichKg list={homeContent?.acf?.section_1} />;
}
