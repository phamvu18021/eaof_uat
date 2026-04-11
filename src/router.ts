export type TMenus = {
  path: string;
  title: string;
  childs?: {
    path: string;
    title: string;
  }[];
}[];

export const menus = [
  {
    path: "/", // the url
    title: "Trang chủ"
  },
  {
    path: "/gioi-thieu", // the url
    title: "Giới thiệu"
  },

  {
    path: "#", // the url
    title: "Ngành học",
    childs: [
      {
        path: "/nganh-quan-tri-kinh-doanh",
        title: "Quản trị kinh doanh"
      },

      {
        path: "/nganh-ke-toan",
        title: "Kế toán"
      }
    ]
  },
  {
    path: "/lich-khai-giang", // the url
    title: "Lịch khai giảng"
  },
  {
    path: "/dang-ky", // the url
    title: "Đăng ký"
  },
  {
    path: "/ban-tin", // the url
    title: "Bản tin",
    childs: [
      { path: "/tin-tuc", title: "Tin tức" },
      { path: "/thong-bao", title: "Thông báo" }
    ]
  }
];
