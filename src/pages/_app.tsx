import Layout from "@/layouts";
import theme from "@/theme";
import { ChakraProvider } from "@chakra-ui/provider";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import "@/styles/globals.css";
import dynamic from "next/dynamic";

const ModalProvider = dynamic(() =>
  import("@/components/ModalContext").then((mod) => mod.ModalProvider)
);

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <ChakraProvider theme={theme}>
        <ModalProvider>
          <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
        </ModalProvider>
      </ChakraProvider>
    </>
  );
};

export default App;
