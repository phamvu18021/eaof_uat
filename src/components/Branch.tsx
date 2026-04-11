"use client";

import { useModal } from "@/components/ModalContext";
import {
  Box,
  Divider,
  Flex,
  HStack,
  Heading,
  Link,
  Text
} from "@chakra-ui/react";
import dynamic from "next/dynamic";

const SectionBranch = dynamic(() =>
  import("@/components/SectionBranch").then((mod) => mod.SectionBranch)
);

interface IBranch {
  name: string;
  overview: string[];
  jobs: string[];
  program: string[];
  person: string[];
  procedure: string[];
  work: string[];
  workjobs: string[];
}

export const Branch = (props: IBranch) => {
  const { name, overview, jobs, program, person, procedure, work, workjobs } =
    props;
  const { onToggle } = useModal();

  return (
    <Box color="blue.800">
      <Flex>
        <Divider
          w="50px"
          pt="40px"
          mr="20px"
          borderColor="#f5750d"
          style={{ borderBottomWidth: "4px" }}
        />
        <Text
          fontWeight="bold"
          textAlign="left"
          pt="12px"
          fontSize="36px"
          color="#00165a"
        >
          {name}
        </Text>
      </Flex>
      <Box pt="26px">
        {overview.map((item, index) => (
          <Text key={index} fontWeight={500} pb="12px">
            {item}
          </Text>
        ))}
      </Box>
      <HStack py="16px">
        <Heading color="#fe9800" as={Link} fontSize="26px" onClick={onToggle}>
          Đăng ký ngay
        </Heading>
      </HStack>
      <SectionBranch title="Thời gian đào tạo" items={jobs} isList />
      <SectionBranch title={`Mục tiêu đào tạo ngành ${name}`} items={program} />
      <SectionBranch
        title={`Học ngành ${name} ra trường làm gì?`}
        items={work}
      />
      <SectionBranch title="" items={workjobs} isList />
      <SectionBranch
        title="Đối tượng dự tuyển được xác định tại thời điểm xét tuyển:"
        items={person}
      />
      <SectionBranch title="Phương thức tuyển sinh" items={procedure} />
    </Box>
  );
};
