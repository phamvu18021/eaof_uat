export const replaceSeoRM = (input: string) => {
  if (!input) return "";

  // Replace all occurrences of admin.tuyensinh-ehou.vn and ehou.aum.edu.vn with tuyensinh-ehou.vn,
  // except when followed by /wp-content or /wp-includes (WordPress static/media assets)
  input = input.replace(
    /https:\/\/(?:admin\.tuyensinh-ehou\.vn|ehou\.aum\.edu\.vn)(?!\/wp-content|\/wp-includes)/g,
    "https://tuyensinh-ehou.vn"
  );

  input = input.replace("noindex", "index");
  input = input.replace("nofollow", "follow");

  // === Thêm canonical nếu chưa có ===
  const ogUrlMatch = input.match(
    /<meta[^>]*property=["']og:url["'][^>]*content=["']([^"']+)["'][^>]*>/
  );
  const hasCanonical = /<link[^>]*rel=["']canonical["']/.test(input);

  if (ogUrlMatch && !hasCanonical) {
    // Xóa dấu / ở cuối ogUrl nếu có
    const ogUrl = ogUrlMatch[1].replace(/\/$/, "");
    const canonicalTag = `<link rel="canonical" href="${ogUrl}" />`;

    // Thêm ngay sau thẻ og:url
    input = input.replace(ogUrlMatch[0], `${ogUrlMatch[0]}\n${canonicalTag}`);
  }

  // Đảm bảo tất cả thẻ canonical và og:url không có dấu / ở cuối URL
  input = input.replace(
    /(<link\s+rel=["']canonical["']\s+href=["'][^"']+)\/+(["'])/g,
    "$1$2"
  );
  input = input.replace(
    /(<meta\s+property=["']og:url["']\s+content=["'][^"']+)\/+(["'])/g,
    "$1$2"
  );

  return input;
};
