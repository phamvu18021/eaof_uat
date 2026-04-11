"use client";

import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  HStack,
  Heading,
  Icon,
  ListItem,
  UnorderedList
} from "@chakra-ui/react";
import { BiPlus } from "react-icons/bi";

export const Accs = ({
  accs
}: {
  accs: { title: string; detail: { title: string; list: string[] }[] }[];
}) => (
  <Accordion defaultIndex={[0]} allowMultiple>
    {accs.map((acc, index) => (
      <AccordionItem border="none" key={index} py="12px" rounded="sm">
        <AccordionButton bg="gray.50" py="16px" rounded="sm">
          <Box flex="1" textAlign="left">
            <HStack>
              <Heading fontSize={{ base: "sm", md: "md" }}>{acc.title}</Heading>
            </HStack>
          </Box>
          <Icon as={BiPlus} />
        </AccordionButton>
        <AccordionPanel pb={4} color="gray.900">
          {acc?.detail?.map((item, index) => (
            <Box key={index}>
              <Heading as="h4" size="sm">
                {item?.title}
              </Heading>
              <UnorderedList>
                {item?.list?.map((listItem, i) => (
                  <ListItem key={i}>{listItem}</ListItem>
                ))}
              </UnorderedList>
            </Box>
          ))}
        </AccordionPanel>
      </AccordionItem>
    ))}
  </Accordion>
);
