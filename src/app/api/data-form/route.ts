import { fetchAuth } from "@/ultil/fetchAuth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const type = searchParams.get("type") || "";
  const api_url = process.env.API_URL_TSEH || "";
  let url: string = "";
  let uuid: string = "";
  let divId: string = "";
  let divClass: string = "";
  try {
    const responeWordpress = await fetchAuth({
      url: `${api_url}/form`,
      revalidate: 1
    });
    const data: any[] = await responeWordpress.json();
    const htmlString = data?.length > 0 ? data[0]?.acf?.[String(type)] : "";

    const getFormRegex = /GetForm\("([^"]+)", "([^"]+)"\)/;
    const divRegex = /<div id="([^"]+)" class="([^"]+)"/;
    const getFormMatch = htmlString.match(getFormRegex);
    const divMatch = htmlString.match(divRegex);

    if (getFormMatch && divMatch) {
      url = getFormMatch[1];
      uuid = getFormMatch[2];

      divId = divMatch[1];
      divClass = divMatch[2];
    }
  } catch (error) {
    console.error(error);
  }
  return NextResponse.json({ url, uuid, divId, divClass });
}
