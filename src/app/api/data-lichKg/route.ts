import { NextRequest, NextResponse } from "next/server";
import { fetchAuth } from "@/ultil/fetchAuth";

export async function GET(req: NextRequest) {
  const api_url = process.env.API_URL_TSEH || "";
  let filteredLines: string[] = [];
  try {
    const responeWordpress = await fetchAuth({
      url: `${api_url}/posts?slug=lich-khai-giang`,
      revalidate: 10
    });
    if (!responeWordpress.ok) {
      throw new Error(
        `Posts fetch failed with status: ${responeWordpress.statusText}`
      );
    }

    const data: any[] = await responeWordpress.json();
    const htmlString = data?.length > 0 ? data[0]?.content?.rendered : ``;
    const textContent = htmlString.replace(/(&#8211;|<[^>]*>)/g, "");
    const lines = textContent.split("\n");
    filteredLines = lines?.filter((line: string) => line.trim() !== "");
    filteredLines = filteredLines?.map((line: string) => line?.trim());
  } catch (error) {
    console.error(error);
  }

  return NextResponse.json({ list: filteredLines || [] });
}
