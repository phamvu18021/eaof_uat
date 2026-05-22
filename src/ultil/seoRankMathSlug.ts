function removeTrailingSlashFromCanonical(linkString: string) {
  return linkString.replace(
    /(link rel="canonical" href="https:\/\/ehou\.aum\.edu\.vn\/[^/]+)\/"/g,
    '$1"'
  );
}

export const seoRankMathSlug = (input: string) => {
  input = removeTrailingSlashFromCanonical(input);
  input = input.replace(
    `link rel="canonical" href="https://admin.tuyensinh-ehou.vn/`,
    `link rel="canonical" href="https://tuyensinh-ehou.vn/vi/`
  );
  input = input.replace(
    `meta property="og:url" content="https://ehou.aum.edu.vn`,
    `meta property="og:url" content="https://tuyensinh-ehou.vn`
  );

  input = input.replace(
    `"@id":"https://admin.tuyensinh-ehou.vn/#organization"`,
    `"@id":"https://tuyensinh-ehou.vn/#organization"`
  );
  input = input.replace(
    `https://admin.tuyensinh-ehou.vn/#logo`,
    `https://tuyensinh-ehou.vn/#logo`
  );
  input = input.replace(
    `https://admin.tuyensinh-ehou.vn/#website`,
    `https://tuyensinh-ehou.vn/#website`
  );
  input = input.replace(
    `https://admin.tuyensinh-ehou.vn/#webpage`,
    `https://tuyensinh-ehou.vn/#webpage`
  );
  input = input.replace(
    `"url":"https://ehou.aum.edu.vn"`,
    `"url":"https://tuyensinh-ehou.vn"`
  );

  input = input.replace(
    `"@type":"WebPage","@id":"https://ehou.aum.edu.vn`,
    `"@type":"WebPage","@id":"https://tuyensinh-ehou.vn`
  );

  input = input.replace(
    `#webpage","url":"https://ehou.aum.edu.vn`,
    `#webpage","url":"https://tuyensinh-ehou.vn`
  );

  input = input.replace(
    `"mainEntityOfPage":{"@id":"https://admin.tuyensinh-ehou.vn/`,
    `"mainEntityOfPage":{"@id":"https://tuyensinh-ehou.vn/`
  );
  input = input.replace(
    `"worksFor":{"@id":"https://admin.tuyensinh-ehou.vn/#organization`,
    `"worksFor":{"@id":"https://tuyensinh-ehou.vn/#organization`
  );

  input = input.replace(
    `"sameAs":["https://ehou.aum.edu.vn"]`,
    `"sameAs":["https://tuyensinh-ehou.vn"]`
  );
  input = input.replace("noindex", "index");
  input = input.replace("nofollow", "follow");
  return input;
};
