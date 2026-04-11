import dynamic from "next/dynamic";

const Branch = dynamic(() =>
  import("@/components/Branch").then((mod) => mod.Branch)
);
const LayoutNganh = dynamic(() =>
  import("@/layouts/layoutNganh").then((mod) => mod.LayoutNganh)
);

export const Kt = ({ data }: any) => {
  const defaultText1 =
    "Thí sinh tốt nghiệp THPT hoặc tốt nghiệp trình độ trung cấp trúng tuyển sẽ học theo chương trình đào tạo 4 năm\nThí sinh tốt nghiệp Cao đẳng, Đại học chính quy hoặc “Cử nhân thực hành” chính quy sẽ học theo chương trình đào tạo từ 2,0-2,5 năm.\nThí sinh tốt nghiệp Đại học chính quy của nước ngoài thì văn bằng phải được công nhận theo quy định của Bộ Giáo dục và Đào tạo. Thí sinh thuộc diện này cũng học theo chương trình đào tạo tương ứng như trên.";
  const text1 = data?.sub_title_1 || defaultText1;
  const defaultText2 =
    "Đảm nhận ngay công việc chuyên môn như: kế toán viên, nhân viên tài chính, kiểm soát viên tại các doanh nghiệp, các tập đoàn, tổng công ty thuộc mọi lĩnh vực, mọi thành phần kinh tế\nLàm việc chuyên môn tại Kiểm toán nhà nước; các công ty kiểm toán độc lập; các tổ chức tài chính - tín dụng; các cơ quan quản lý nhà nước\n Làm việc tại các công ty thiết kế phần mềm về kế toán, quản trị doanh nghiệp\n Đủ khả năng khởi nghiệp cung cấp dịch vụ kế toán, tư vấn kế toán, tài chính, thuế cho các doanh nghiệp\n Trở thành giảng viên, trợ giảng, chuyên gia tư vấn, nghiên cứu viên chuyên môn về lĩnh vực Kế toán nói chung và lĩnh vực Kế toán doanh nghiệp nói riêng";
  const text2 = data?.sub_desc_1 || defaultText2;
  const defaultText3 =
    "Kế toán là một ngành gắp gắn với 60 năm phát triển của nhà trường. Hiện tại ngành Kế Toán là một trong những ngành đào tạo thế mạnh của trường được nhiều sinh viên tin tưởng và theo học \n";
  const text3 = data?.desc || defaultText3;
  const defaultText4 =
    "Người học sau khi tốt nghiệp ngành Kế toán, chuyên ngành Kế toán doanh nghiệp tại Đại học từ xa AOF E-Learning nắm vững kiến thức cơ bản về tài chính, kinh doanh, quản lý kinh tế; có kiến thức chuyên sâu về chuyên ngành Kế toán doanh nghiệp thuộc ngành Kế toán; có tư duy sáng tạo và logic; nghiên cứu độc lập, phân tích, đánh giá và hoạch định chính sách liên quan đến kế toán; có khả năng giải quyết các vấn đề liên quan về tài chính, kế toán; có kỹ năng thực hành chuyên môn thành thạo về Kế toán doanh nghiệp; có tính kỷ luật tốt và tác phong chuyên nghiệp, tuân thủ đạo đức nghề nghiệp; có các kỹ năng cần thiết để thực hiện các nghiệp vụ về kế toán; có khả năng thích ứng nhanh với môi trường làm việc trong nước và quốc tế.\n";
  const text4 = data?.desc_1 || defaultText4;
  const defaultText5 =
    "Sinh viên tốt nghiệp chuyên ngành Kế toán doanh nghiệp có đủ năng lực đảm nhận các công việc về Kế toán doanh nghiệp và các lĩnh vực khác thuộc ngành Kế toán trong các công ty, tổ chức, tập đoàn trong và ngoài nước, các cơ quan Nhà nước; cụ thể:\n";
  const text5 = data?.desc_2 || defaultText5;
  const defaultText6 =
    "Người đã được công nhận tốt nghiệp trung học phổ thông (THPT), trung cấp, cao đẳng, đại học chính quy của Việt Nam hoặc có bằng tốt nghiệp của nước ngoài được công nhận trình độ tương đương\n";
  const text6 = data?.desc_3 || defaultText6;
  const defaultText7 = "Xét tuyển theo hồ sơ đăng ký (không thi tuyển).\n";
  const text7 = data?.desc_4 || defaultText7;
  return (
    <LayoutNganh
      title={data?.heading || "Ngành kế toán"}
      image={data?.image_heading || "/kt-a.webp"}
    >
      <Branch
        name={data?.title || "Kế toán"}
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
