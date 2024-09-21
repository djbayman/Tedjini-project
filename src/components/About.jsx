import aboutImg from "../assets/navvis-factory-planning2-header-removebg-preview.png";

const About = () => {
  return (
    <div
      id="من-نحن"
      className="flex items-center justify-between my-10 gap-10"
      style={{ direction: "rtl" }}
    >
      <img src={aboutImg} className="w-1/2" alt="" />
      <div className="w-1/2">
        <h2 className="w-24 text-4xl pb-1 mb-4 border-b-4 border-cyan-600 font-semibold">
          من نحن
        </h2>
        <p className="text-xl">
          شركة تجاني هي شركة رائدة في صناعة الآجر الأحمر، الفندقة وصناعات
          الإسمنت الأبيض ، كما لديها عدة فروع في مختلف ولايات الوطن. لها عدة
          مساهمات في تنمية إقتصاد البلاد .
        </p>
      </div>
    </div>
  );
};

export default About;
