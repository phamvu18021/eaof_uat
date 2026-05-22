import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const URL =
    process.env.NEXT_PUBLIC_DOMAIN_TSEH || "https://tuyensinh-ehou.vn";
  return {
    rules: {
      userAgent: "*",
      allow: ["/public/"],
      disallow: ["/api/", "/private/"]
    },
    sitemap: `${URL}/sitemap.xml`
  };
}
