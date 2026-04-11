export const replaceSeoRM = (input: string) => {
  input = input.replace(
    `link rel="canonical" href="https://nologin.eaof.vn`,
    `link rel="canonical" href="https://eaof.vn`
  );

  input = input.replace(
    `meta property="og:url" content="https://nologin.eaof.vn`,
    `meta property="og:url" content="https://eaof.vn`
  );

  input = input.replace(
    `"@id":"https://nologin.eaof.vn/#organization"`,
    `"@id":"https://eaof.vn/#organization"`
  );

  input = input.replace(
    `https://nologin.eaof.vn/#logo`,
    `https://eaof.vn/#logo`
  );

  input = input.replace(
    `https://nologin.eaof.vn/#website`,
    `https://eaof.vn/#website`
  );
  input = input.replace(
    `https://nologin.eaof.vn/#webpage`,
    `https://eaof.vn/#webpage`
  );
  input = input.replace(
    `"url":"https://nologin.eaof.vn"`,
    `"url":"https://eaof.vn"`
  );

  input = input.replace(
    `"@type":"WebPage","@id":"https://nologin.eaof.vn`,
    `"@type":"WebPage","@id":"https://eaof.vn`
  );

  input = input.replace(
    `#webpage","url":"https://nologin.eaof.vn`,
    `#webpage","url":"https://eaof.vn`
  );

  input = input.replace(
    `"mainEntityOfPage":{"@id":"https://nologin.eaof.vn`,
    `"mainEntityOfPage":{"@id":"https://eaof.vn/`
  );
  input = input.replace(
    `"worksFor":{"@id":"https://nologin.eaof.vn/#organization`,
    `"worksFor":{"@id":"https://eaof.vn/#organization`
  );

  input = input.replace(
    `"sameAs":["https://nologin.eaof.vn"]`,
    `"sameAs":["https://eaof.vn"]`
  );
  input = input.replace("noindex", "index");
  input = input.replace("nofollow", "follow");
  return input;
};

export const replaceSeoRMSlug = (input: string | null) => {
  if (!input) return "";
  input = input.replace(
    `link rel="canonical" href="https://nologin.eaof.vn/`,
    `link rel="canonical" href="https://eaof.vn/tin-tuc/`
  );
  input = input.replace(
    `meta property="og:url" content="https://nologin.eaof.vn`,
    `meta property="og:url" content="https://eaof.vn/tin-tuc`
  );

  input = input.replace(
    `"@id":"https://nologin.eaof.vn/#organization"`,
    `"@id":"https://eaof.vn/#organization"`
  );
  input = input.replace(
    `https://nologin.eaof.vn/#logo`,
    `https://eaof.vn/#logo`
  );
  input = input.replace(
    `https://nologin.eaof.vn/#website`,
    `https://eaof.vn/#website`
  );
  input = input.replace(
    `https://nologin.eaof.vn/#webpage`,
    `https://eaof.vn/#webpage`
  );
  input = input.replace(
    `"url":"https://nologin.eaof.vn"`,
    `"url":"https://eaof.vn"`
  );

  input = input.replace(
    `"@type":"WebPage","@id":"https://nologin.eaof.vn`,
    `"@type":"WebPage","@id":"https://eaof.vn/tin-tuc`
  );

  input = input.replace(
    `#webpage","url":"https://nologin.eaof.vn`,
    `#webpage","url":"https://eaof.vn/tin-tuc`
  );

  input = input.replace(
    `"mainEntityOfPage":{"@id":"https://nologin.eaof.vn/`,
    `"mainEntityOfPage":{"@id":"https://eaof.vn/`
  );
  input = input.replace(
    `"worksFor":{"@id":"https://nologin.eaof.vn/#organization`,
    `"worksFor":{"@id":"https://eaof.vn/#organization`
  );

  input = input.replace(
    `"sameAs":["https://nologin.eaof.vn"]`,
    `"sameAs":["https://eaof.vn/tin-tuc"]`
  );

  input = input.replace("noindex", "index");
  input = input.replace("nofollow", "follow");
  return input;
};

export const replaceSeoRMSlugTB = (input: string | null) => {
  if (!input) return "";
  input = input.replace(
    `link rel="canonical" href="https://nologin.eaof.vn/`,
    `link rel="canonical" href="https://eaof.vn/thong-bao/`
  );
  input = input.replace(
    `meta property="og:url" content="https://nologin.eaof.vn`,
    `meta property="og:url" content="https://eaof.vn/thong-bao`
  );

  input = input.replace(
    `"@id":"https://nologin.eaof.vn/#organization"`,
    `"@id":"https://eaof.vn/#organization"`
  );
  input = input.replace(
    `https://nologin.eaof.vn/#logo`,
    `https://eaof.vn/#logo`
  );
  input = input.replace(
    `https://nologin.eaof.vn/#website`,
    `https://eaof.vn/#website`
  );
  input = input.replace(
    `https://nologin.eaof.vn/#webpage`,
    `https://eaof.vn/#webpage`
  );
  input = input.replace(
    `"url":"https://nologin.eaof.vn"`,
    `"url":"https://eaof.vn"`
  );

  input = input.replace(
    `"@type":"WebPage","@id":"https://nologin.eaof.vn`,
    `"@type":"WebPage","@id":"https://eaof.vn/thong-bao`
  );

  input = input.replace(
    `#webpage","url":"https://nologin.eaof.vn`,
    `#webpage","url":"https://eaof.vn/thong-bao`
  );

  input = input.replace(
    `"mainEntityOfPage":{"@id":"https://nologin.eaof.vn/`,
    `"mainEntityOfPage":{"@id":"https://eaof.vn/`
  );
  input = input.replace(
    `"worksFor":{"@id":"https://nologin.eaof.vn/#organization`,
    `"worksFor":{"@id":"https://eaof.vn/#organization`
  );

  input = input.replace(
    `"sameAs":["https://nologin.eaof.vn"]`,
    `"sameAs":["https://eaof.vn/thong-bao"]`
  );

  input = input.replace("noindex", "index");
  input = input.replace("nofollow", "follow");
  return input;
};

export const replaceSeoRMSlugBantin = (input: string | null) => {
  if (!input) return "";
  input = input.replace(
    `link rel="canonical" href="https://nologin.eaof.vn/`,
    `link rel="canonical" href="https://eaof.vn/ban-tin/`
  );
  input = input.replace(
    `meta property="og:url" content="https://nologin.eaof.vn`,
    `meta property="og:url" content="https://eaof.vn/ban-tin`
  );

  input = input.replace(
    `"@id":"https://nologin.eaof.vn/#organization"`,
    `"@id":"https://eaof.vn/#organization"`
  );
  input = input.replace(
    `https://nologin.eaof.vn/#logo`,
    `https://eaof.vn/#logo`
  );
  input = input.replace(
    `https://nologin.eaof.vn/#website`,
    `https://eaof.vn/#website`
  );
  input = input.replace(
    `https://nologin.eaof.vn/#webpage`,
    `https://eaof.vn/#webpage`
  );
  input = input.replace(
    `"url":"https://nologin.eaof.vn"`,
    `"url":"https://eaof.vn"`
  );

  input = input.replace(
    `"@type":"WebPage","@id":"https://nologin.eaof.vn`,
    `"@type":"WebPage","@id":"https://eaof.vn/ban-tin`
  );

  input = input.replace(
    `#webpage","url":"https://nologin.eaof.vn`,
    `#webpage","url":"https://eaof.vn/ban-tin`
  );

  input = input.replace(
    `"mainEntityOfPage":{"@id":"https://nologin.eaof.vn/`,
    `"mainEntityOfPage":{"@id":"https://eaof.vn/`
  );
  input = input.replace(
    `"worksFor":{"@id":"https://nologin.eaof.vn/#organization`,
    `"worksFor":{"@id":"https://eaof.vn/#organization`
  );

  input = input.replace(
    `"sameAs":["https://nologin.eaof.vn"]`,
    `"sameAs":["https://eaof.vn/ban-tin"]`
  );

  input = input.replace("noindex", "index");
  input = input.replace("nofollow", "follow");
  return input;
};
