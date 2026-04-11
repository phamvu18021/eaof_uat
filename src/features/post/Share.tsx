"use client";

import { IconButton, Stack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export const Share = ({ url }: { url?: string }) => {
  const domain = process.env.NEXT_PUBLIC_DOMAIN || "";

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(`${domain}/${url}`);
      alert("Link đã được sao chép!");
    } catch (err) {
      alert("Không thể sao chép link, hãy thử lại.");
    }
  };

  return (
    <Stack
      spacing={"8px"}
      flexDir={{ base: "row", xl: "column" }}
      pos={"sticky"}
      top={"120px"}
    >
      <IconButton
        icon={
          <Image
            alt="icon"
            src={"/s-facebooksss.svg"}
            width={64}
            height={64}
            priority
            style={{ width: "18x", height: "auto" }}
          />
        }
        as={Link}
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          `${domain}/${url}`
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="facebook"
        rounded={"full"}
        p={"8px"}
        variant={"outline"}
        w={"35px"}
      />
      <IconButton
        icon={
          <Image
            alt="icon"
            src={"/s-mails.svg"}
            width={64}
            height={64}
            priority
            style={{ width: "18x", height: "auto" }}
          />
        }
        as={Link}
        href={`mailto:?subject=${encodeURIComponent(
          "Bài viết trang Evstep"
        )}&body=${encodeURIComponent(`Xem bài viết tại: ${domain}/${url}`)}`}
        aria-label="email"
        rounded={"full"}
        p={"8px"}
        variant={"outline"}
        w={"35px"}
      />
      <IconButton
        icon={
          <Image
            alt="icon"
            src={"/s-share.svg"}
            width={64}
            height={64}
            priority
            style={{ width: "18x", height: "auto" }}
          />
        }
        aria-label="link"
        rounded={"full"}
        variant={"outline"}
        p={"8px"}
        w={"35px"}
        onClick={handleCopyLink}
      />
    </Stack>
  );
};
