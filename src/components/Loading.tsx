"use client";

import { Skeleton, Box } from "@chakra-ui/react";

interface ILoading {
  he?: string;
}

export const Loading = (props: ILoading) => {
  const height = props?.he || "150px";
  return (
    <Skeleton height={height} borderRadius="md" w="100%">
      <Box height={height} />
    </Skeleton>
  );
};
