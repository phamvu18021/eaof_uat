import dynamic from "next/dynamic";

const Branch = dynamic(() =>
  import("@/components/Branch").then((mod) => mod.Branch)
);
const LayoutNganh = dynamic(() =>
  import("@/layouts/layoutNganh").then((mod) => mod.LayoutNganh)
);

export const Qtkd = ({ data }: any) => {
  const defaultText1 =
    "Huân chương Hồ Chí Minh năm 2013.\nHuân chương Lao động hạng Nhất, hạng Nhì, hạng Ba\nHuân chương Lao động hạng Nhất lần thứ 2 năm 2018.\n Huân chương Độc lập hạng Nhất, hạng Nhì, hạng Ba\n Huân chương Tự do ISALA hạng Nhất, hạng Nhì, hạng Ba của nước Cộng hòa DCND Lào.\n Cờ thi đua của Chính phủ và nhiều phần thưởng cao quý khác.";
  const text1 = data?.sub_title_1 || defaultText1;
  const defaultText2 =
    "Đảm nhận các công việc chuyên môn như: Quản trị nguồn nhân lực, Quản trị chiến lược, Quản trị sản xuất và tác nghiệp, Quản trị bán hàng, quản trị chất lượng trong công ty, doanh nghiệp\nĐủ khả năng khởi sự doanh nghiệp của riêng mình\nTrở thành giảng viên, trợ giảng, chuyên gia tư vấn, nghiên cứu viên chuyên môn về lĩnh vực QTKD nói chung và lĩnh vực QTDN nói riêng tại các cơ sở đào tạo, cơ sở nghiên cứu khoa học trên phạm vi cả nước";
  const text2 = data?.sub_desc_1 || defaultText2;
  const defaultText3 =
    "Sau 20 năm thành lập khoa Quản Trị Kinh Doanh, với bề dày kinh nghiệm đào tạo, sinh viên tốt nghiệp ra trường 98% có việc làm và đang nắm giữ vị trí cao trong doanh nghiệp.\n";
  const text3 = data?.desc || defaultText3;
  const defaultText4 =
    "Người học sau khi tốt nghiệp ngành Quản trị kinh doanh, chuyên ngành Quản trị doanh nghiệp tại Đại học từ xa AOF E-Leanring nắm vững kiến thức chuyên sâu về chuyên ngành QTDN, ngành QTKD; am hiểu cấu trúc và cơ chế vận hành của tổ chức và doanh nghiệp; có tư duy sáng tạo và logic; có khả năng nghiên cứu độc lập phân tích, đánh giá và hoạch định các chính sách liên quan đến lĩnh vực Quản trị kinh doanh; có kỹ năng thực hành thành thạo về chuyên môn; có tính kỷ luật và chuyên nghiệp cao; có các kỹ năng cần thiết; có khả năng thích ứng nhanh với môi trường làm việc trong nước và quốc tế.\n";
  const text4 = data?.desc_1 || defaultText4;
  const defaultText5 =
    "Sinh viên tốt nghiệp chuyên ngành Quản trị doanh nghiệp tại AOF E-Learning có cơ hội và có khả năng đảm nhận các công việc chuyên môn được đào tạo về lĩnh vực QTDN và các lĩnh vực khác thuộc ngành QTKD trong các cơ quan Nhà nước; các công ty, tổ chức, tập đoàn trong nước và quốc tế; cụ thể:\n";
  const text5 = data?.desc_2 || defaultText5;
  const defaultText6 =
    "Người đã được công nhận tốt nghiệp trung học phổ thông (THPT), trung cấp, cao đẳng, đại học chính quy của Việt Nam hoặc có bằng tốt nghiệp của nước ngoài được công nhận trình độ tương đương.\n";
  const text6 = data?.desc_3 || defaultText6;
  const defaultText7 = "Xét tuyển theo hồ sơ đăng ký (không thi tuyển).\n";
  const text7 = data?.desc_4 || defaultText7;
  return (
    <LayoutNganh
      title={data?.heading || "Ngành quản trị kinh doanh"}
      image={data?.image_heading || "/qtkd-a.webp"}
    >
      <Branch
        name={data?.title || "Quản trị kinh doanh"}
        overview={text3.split("\n")}
        jobs={text1.split("\n")}
        program={text4.split("\n")}
        work={text5.split("\n")}
        workjobs={text2.split("\n")}
        person={text6.split("\n")}
        procedure={text7.split("\n")}
      />
    </LayoutNganh>
  );
};
