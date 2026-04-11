"use client";

import {
  Heading,
  IconButton,
  IconButtonProps,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Tooltip
} from "@chakra-ui/react";
import Image from "next/image";
import dynamic from "next/dynamic";

const FormWrapper = dynamic(() =>
  import("@/components/FormWrapper").then((mod) => mod.FormWrapper)
);
const ScrollView = dynamic(() =>
  import("@/components/ScrollView").then((mod) => mod.ScrollView)
);

export const BtnPhone = ({
  label,
  value
}: {
  label?: string;
  value?: string;
}) => {
  return (
    <Tooltip label={label} placement="left" bg={"red.500"} hasArrow>
      <IconButton
        icon={
          <Image
            alt={"home image"}
            src={"/s-phones.svg"}
            width={64}
            height={64}
            priority
            style={{ width: "18px", height: "auto" }}
          />
        }
        rounded={"full"}
        color={"white"}
        bg={"red.500"}
        p={"8px"}
        as={"a"}
        href={value}
        aria-label={label!}
      />
    </Tooltip>
  );
};

export const BtnZalo = (props: IconButtonProps) => {
  return (
    <Tooltip label={"Zalo chat"} placement="left" bg={"blue.500"} hasArrow>
      <IconButton
        icon={
          <Image
            alt={"home image"}
            src={"/s-zalo.svg"}
            width={64}
            height={64}
            priority
            style={{ width: "18px", height: "auto" }}
          />
        }
        rounded={"full"}
        color={"white"}
        bg={"blue.500"}
        p={"8px"}
        as={"a"}
        href={"https://zalo.me/0917452118"}
        {...props}
      />
    </Tooltip>
  );
};

export const BtnMes = ({
  label,
  value
}: {
  label?: string;
  value?: string;
}) => {
  return (
    <Tooltip label={label} placement="left" bg={"blue.500"} hasArrow>
      <IconButton
        icon={
          <Image
            alt={"home image"}
            src={"/s-facebooks.svg"}
            width={64}
            height={64}
            priority
            style={{ width: "18px", height: "auto" }}
          />
        }
        rounded={"full"}
        color={"white"}
        bg={"blue.500"}
        p={"8px"}
        transition={"width ease .4s"}
        as={"a"}
        href={value}
        aria-label={label!}
      />
    </Tooltip>
  );
};

export const BtnEmail = (props: IconButtonProps) => {
  return (
    <Popover placement="left" trigger="hover">
      <PopoverTrigger>
        <IconButton
          icon={
            <Image
              alt={"home image"}
              src={"/s-mail.svg"}
              width={64}
              height={64}
              priority
              style={{ width: "18px", height: "auto" }}
            />
          }
          rounded={"full"}
          color={"white"}
          bg={"orange.500"}
          p={"8px"}
          {...props}
        />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader as={Heading} size={"md"} textAlign={"center"}>
          Để lại thông tin
        </PopoverHeader>
        <PopoverBody>
          <ScrollView>
            <FormWrapper type="form_poup" />
          </ScrollView>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
