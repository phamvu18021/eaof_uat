/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import { Box, Heading, Skeleton } from "@chakra-ui/react";
import { FormGetFly } from "./FormGetFly";
import { FormSam } from "./FormSam";
import { FormGoogle } from "./FormGoogle";

interface FormData {
  type: "form-getfly" | "form-sam" | "form-google" | "unknown";
  url: string;
  uuid: string;
  divId: string;
  divClass: string;
}

export const FormWrapper = ({
  title,
  color,
  type = "form_main"
}: {
  title?: string;
  color?: string;
  type?: "form_main" | "form_poup";
}) => {
  const [formData, setFormData] = useState<FormData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFormData = async () => {
      const key = `form-data-form-main`;
      const cacheExpireMs = 1000 * 60 * 60 * 6; // 6 tiếng

      try {
        // Kiểm tra có đang chạy ở client không (tránh lỗi SSR)
        if (typeof window === "undefined") return;

        const cached = localStorage.getItem(key);

        if (cached) {
          const parsed = JSON.parse(cached);
          // Nếu cache còn hạn thì dùng luôn
          if (parsed.expires > Date.now()) {
            setFormData(parsed.data);
            setIsLoading(false);
            return;
          } else {
            // Cache hết hạn thì xoá
            localStorage.removeItem(key);
          }
        }

        // Không có cache hoặc cache hết hạn → gọi API
        const res = await fetch(`/api/gen-form/?type=${type}`);
        if (!res.ok) {
          throw new Error(`Posts fetch failed with status: ${res.statusText}`);
        }

        const data = await res.json();
        setFormData(data);

        // Lưu cache mới
        localStorage.setItem(
          key,
          JSON.stringify({
            data,
            expires: Date.now() + cacheExpireMs
          })
        );
      } catch (error) {
        console.error("Error fetching form data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFormData();
  }, [type]);

  if (isLoading) {
    return (
      <Skeleton height="38vh">
        <Box height="38vh"></Box>
      </Skeleton>
    );
  }

  if (!formData) {
    return <Heading color="red.500">Unable to load form</Heading>;
  }

  return (
    <>
      {title && (
        <Heading
          as={"h2"}
          size={{ base: "md", md: "lg" }}
          textAlign={"center"}
          color={color}
          pt={"10px"}
          pb={"16px"}
        >
          {title}
        </Heading>
      )}
      {formData.type === "form-getfly" && <FormGetFly {...formData} />}
      {formData.type === "form-sam" && <FormSam {...formData} />}
      {formData.type === "form-google" && (
        <FormGoogle url={formData.url} divId={formData.divId} />
      )}
    </>
  );
};
