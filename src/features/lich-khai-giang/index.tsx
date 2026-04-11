import dynamic from "next/dynamic";

const Frame = dynamic(() =>
  import("@/components/Frame").then((mod) => mod.Frame)
);

export const LichKg = ({ data }: any) => {
  return (
    <>
      <Frame data={data} />
    </>
  );
};
