"use client";

import { Button, ButtonProps } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface SocialButtonProps extends ButtonProps {
  icon: string;
  href: string;
  colorScheme?: string;
  children: ReactNode;
}

export const SocialButton = ({
  icon,
  href,
  colorScheme,
  children,
  ...props
}: SocialButtonProps) => (
  <Button
    leftIcon={
      <Image
        alt={"home image"}
        src={icon}
        width={64}
        height={64}
        priority
        style={{ width: "20px", height: "auto" }}
      />
    }
    colorScheme={colorScheme}
    w="full"
    as={Link}
    href={href}
    {...props}
  >
    {children}
  </Button>
);
