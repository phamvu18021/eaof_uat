import { Box, VStack } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const BtnMes = dynamic(() =>
  import("@/components/BtnCTA").then((mod) => mod.BtnMes)
);
const BtnPhone = dynamic(() =>
  import("@/components/BtnCTA").then((mod) => mod.BtnPhone)
);

export const Cta = ({ cta }: any) => {
  return (
    <>
      <Box
        pos={"fixed"}
        top={"50%"}
        right={"0"}
        transform={"translateY(-50%)"}
        className="CTA"
        zIndex={5}
      >
        <VStack>
          <BtnMes
            label={cta?.item_1?.label || "facebook"}
            value={
              cta?.item_1?.value ||
              "https://www.facebook.com/cunhantructuyenhvtc/"
            }
            aria-label="messenter"
          />
          <BtnPhone
            label={cta?.item_2?.label || "094.162.8017"}
            value={cta?.item_2?.value || "tel:0941628017"}
            aria-label="phone"
          />
        </VStack>
      </Box>
    </>
  );
};
