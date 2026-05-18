import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/tableContent.css";
import { Providers } from "./providers";
import Layout from "@/layouts";
import Script from "next/script";
import { DelayGTM } from "@/components/DelayGTM";

const montserrat = Montserrat({
  weight: ["400", "500", "700"],
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-montserrat"
});

export const metadata: Metadata = {
  title: "Đại học Thái Nguyên - Hệ đào tạo từ xa",
  description:
    "Hệ đào tạo từ xa Đại học Thái Nguyên - Tiết kiệm thời gian và chi phí, bằng cấp được Bộ GD&ĐT công nhận.",
  verification: {
    google: "c2euFsrK3MT0GbnTAe6V_ikDOZqvLntnf6TD76sGiUI",
  },
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className={montserrat.className}>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
      <DelayGTM gtmId="GTM-W57CPPPF" />
    </html>
  );
}
