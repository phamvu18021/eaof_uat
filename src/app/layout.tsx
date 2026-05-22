import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/tableContent.css";
import { Providers } from "./providers";
import Layout from "@/layouts";
import Script from "next/script";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-roboto"
});

export const metadata: Metadata = {
  title: "Trường Đại học Mở Hà Nội - Tuyển sinh từ xa",
  description:
    "Trang tuyển sinh chính thức Trường Đại học Mở Hà Nội. Đào tạo từ xa chất lượng cao, tiết kiệm thời gian và chi phí, bằng cấp được Bộ GD&ĐT công nhận."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={roboto.className}>
        <noscript>
          <iframe
            title="Google Tag Manager"
            src="https://www.googletagmanager.com/ns.html?id=GTM-P45V2GW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P45V2GW');
          `}
        </Script>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
