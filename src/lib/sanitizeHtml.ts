import sanitizeHtml from "sanitize-html";

export const clean = (dirty: string) => {
  if (!dirty) return "";
  // Tự động nâng cấp http:// thành https:// để giải quyết lỗi Mixed Content (không an toàn)
  const secure = dirty.replace(/http:\/\//g, "https://");
  return sanitizeHtml(secure, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
    allowedAttributes: {
      a: ["href", "name", "target"],
      img: ["src", "srcset", "alt", "title", "width", "height", "loading"],
      "*": ["class", "id"]
    },
    allowedSchemes: ["http", "https", "ftp", "mailto", "tel"],
    selfClosing: [
      "img",
      "br",
      "hr",
      "area",
      "base",
      "basefont",
      "input",
      "link",
      "meta"
    ]
  });
};
