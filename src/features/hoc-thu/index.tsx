"use client";

import dynamic from "next/dynamic";

const InfoContact = dynamic(() =>
  import("@/components/Accs").then((mod) => mod.InfoContact)
);
const Trylearning = dynamic(() =>
  import("@/components/Contact").then((mod) => mod.Trylearning)
);

export interface LienheProps {
  initialData?: any;
}

export const Lienhe = ({ initialData }: LienheProps) => {
  const home_content = initialData;
  return (
    <>
      <Trylearning banner={home_content?.acf?.banner} />
      <InfoContact thong_tin={home_content?.acf?.thong_tin} />
    </>
  );
};
