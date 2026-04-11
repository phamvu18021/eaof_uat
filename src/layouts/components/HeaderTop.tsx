import {
  Container,
  Divider,
  Flex,
  HStack,
  Text,
  VStack
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Image from "next/image";

const Logo = dynamic(() =>
  import("@/layouts/components/Logo").then((mod) => mod.Logo)
);
const ScrollView = dynamic(() =>
  import("@/components/ScrollView").then((mod) => mod.ScrollView)
);

const International = ({ header }: any) => {
  return (
    <HStack color={"whiteAlpha.800"} spacing={6}>
      <Flex alignItems={"center"}>
        <Image
          alt={"home image"}
          src={"/s-phone1.svg"}
          width={64}
          height={64}
          priority
          style={{ width: "25px", height: "auto", marginRight: "10px" }}
        />
        <VStack color="white" fontSize={{ base: ".5rem", lg: "15px" }}>
          <Text fontWeight={600}>
            {header?.desc_1 || "Hotline: 094.162.8017"}
          </Text>
          <Divider borderColor={"gray.400"} />
          <Text>{header?.desc_2 || "Thứ 2 - Thứ 7"}</Text>
        </VStack>
      </Flex>
      <Flex alignItems={"center"}>
        <Image
          alt={"home image"}
          src={"/s-site1.svg"}
          width={64}
          height={64}
          priority
          style={{ width: "25px", height: "auto", marginRight: "10px" }}
        />
        <VStack color="white" fontSize={{ base: ".5rem", lg: "15px" }}>
          <Text fontWeight={600}>
            {header?.title || "Trạm Tuyển Sinh - AUM"}
          </Text>
          <Divider borderColor={"gray.400"} />
          <Text>
            {header?.desc || "116 Trần Vỹ, Mai Dịch, Cầu Giấy, Hà Nội"}
          </Text>
        </VStack>
      </Flex>
    </HStack>
  );
};

export const HeaderTop = ({ header }: any) => {
  return (
    <Container maxW={"6xl"}>
      <HStack align={"center"} justify={"space-between"} w={"100%"}>
        <ScrollView>
          <Logo color={"#007180"} />
        </ScrollView>

        <International header={header} />
      </HStack>
    </Container>
  );
};
