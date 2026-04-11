"server only";

import { Loading } from "@/components/Loading";
import { fetchAuth } from "@/ultil/fetchAuth";
import { fetchSeo } from "@/ultil/seo";
import { replaceSeoRM } from "@/ultil/seoRankMath";
import ReactHtmlParser from "html-react-parser";
import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";

const Qtkd = dynamic(
  () => import("@/features/nganh-qtkd").then((mod) => mod.Qtkd),
  {
    loading: () => <Loading />
  }
);

interface IPostPage {
  home_content: any;
  head: string;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const api_rm_url = process.env.API_RMS_URL || "";
  const api_url_data = process.env.API_URL || "";
  const api_url = `${api_rm_url}/quan-tri-kinh-doanh`;
  const type = "quan-tri-kinh-doanh";

  try {
    const res = await fetchSeo({ url: api_url, revalidate: 3600 });
    if (!res.ok) {
      throw new Error(`Posts fetch failed with status: ${res.statusText}`);
    }
    const resData = await fetchAuth({
      url: `${api_url_data}/${type}`,
      revalidate: 3600
    });
    const head = await res.json();
    const data = await resData.json();
    const home_content = data ? data[0] : null;
    return {
      props: {
        head: head?.head || null,
        home_content: home_content || null
      }
    };
  } catch (error) {
    return {
      props: {
        head: null,
        home_content: null
      }
    };
  }
};

const Page = (props: IPostPage) => {
  return (
    <>
      {props.head && (
        <div>
          <Head>{ReactHtmlParser(replaceSeoRM(props.head))}</Head>
        </div>
      )}
      <Qtkd data={props.home_content?.acf?.quan_tri_kinh_doanh} />
    </>
  );
};

export default Page;
