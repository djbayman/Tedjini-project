import briqueProductImg from "../assets/factory.jpg";
import hotelProductImg from "../assets/hotel.jpg";
import b13ProductImg from "../assets//jebs1.jpg";
import ciramiceImg from "../assets/ceramic-img.webp";
import promotionImg from "../assets/promoteur-immo1200x800-px.jpg";
import shopingCenterImg from "../assets/ben-aknon-shoping-center.jpg";
import { Link } from "react-router-dom";

let arrayOfProducts = [
  {
    product: "صناعة الآجر الأحمر",
    defenition:
      "هي عملية إنتاج مواد بناء مصنوعة من الطين. يتم تشكيل الطين في قوالب ثم تجفيفه وحرقه في أفران خاصة للحصول على صلابة ومتانة. الآجر الأحمر يتميز بمقاومته للحرارة والرطوبة ويستخدم بشكل واسع في بناء الجدران والأسقف نظرًا لقوته وعمره الطويل.",

    img: `${briqueProductImg}`,
  },
  {
    product: "خدمة الفندقة",
    defenition:
      " هي صناعة تقديم الخدمات المتعلقة بالإقامة والضيافة للزوار والسياح. تشمل إدارة وتشغيل الفنادق، وتوفير الإقامة المريحة، والوجبات، والخدمات الأخرى مثل التنظيف والترفيه، بهدف ضمان تجربة مريحة ومميزة للنزلاء.",
    img: `${hotelProductImg}`,
  },
  {
    product: "صناعة الجبس",
    defenition:
      "هي عملية استخراج وتحضير مادة الجبس من الصخور الجبسية. يُسحق الجبس الخام ويُسخن لإزالة الماء، ثم يُطحن ليصبح مسحوقًا يُستخدم في البناء لتغطية الجدران والأسقف وصناعة القوالب والزخارف. يتميز الجبس بمرونته وسهولة تشكيله، ويستخدم على نطاق واسع في التشطيبات المعمارية.",
    img: `${b13ProductImg}`,
  },
  {
    product: "صناعة الخزف الصناعي",
    defenition:
      "وهو مادة عالية الجودة تستخدم لتغطية الأرضيات والجدران، نظرًا لمتانته ومظهره الجمالي. يتميز البلاط الخزفي بمقاومته العالية للتآكل، الماء، والخدوش، مما يجعله مثاليًا للاستخدام في المنازل، المكاتب، وحتى المناطق التجارية.",
    img: `${ciramiceImg}`,
  },
  {
    product: "الترقية العقارية",
    defenition:
      "هي عملية تطوير أو تحسين العقارات بشكل شامل، سواء كانت أراضي، مبانٍ سكنية أو تجارية، بهدف زيادة قيمتها وجعلها أكثر جاذبية من الناحية الاقتصادية أو الوظيفية. تشمل الترقية العقارية مجموعة من الأنشطة التي تتطلب تخطيطًا دقيقًا واستثمارًا ماليًا لتحقيق عوائد أكبر من خلال بيع العقارات أو تأجيرها.",
    img: `${promotionImg}`,
  },
  {
    product: "المركز التجاري",
    defenition:
      "هو مجمع كبير يضم مجموعة متنوعة من المحلات التجارية، المطاعم، والخدمات، ويهدف إلى تلبية احتياجات المستهلكين في مكان واحد. يُعتبر المركز التجاري وجهة تجمع بين التسوق، الترفيه، وتناول الطعام، وغالبًا ما يتم تصميمه ليكون مريحًا وجاذبًا للزوار من مختلف الفئات.",
    img: `${shopingCenterImg}`,
  },
];

const OurProducts = () => {
  return (
    <section id="منتجاتنا" className="my-10" style={{ direction: "rtl" }}>
      <h1 className="text-4xl mb-4 w-24 mx-auto font-semibold pb-1 border-b-4 border-cyan-600">
        منتجاتنا
      </h1>
      <div className="flex  items-center justify-between gap-4 flex-wrap w-11/12 mx-auto">
        {arrayOfProducts.map((product) => (
          <div
            className="box flex flex-col justify-between flex-wrap border-4 border-cyan-700 rounded-lg  hover:scale-105 transition-transform cursor-pointer"
            style={{ width: "45%", height: "75vh" }}
          >
            <Link to="/brique" className="text-black h-full">
              <img src={product.img} className="w-full h-1/2 " alt="" />
              <div className="flex flex-col items-center justify-between h-1/2 ">
                <p className=" px-4  my-3">
                  <span className="text-lg font-semibold">
                    {product.product}:
                  </span>
                  {" " + product.defenition}
                </p>
                <button className="w-full  bg-cyan-600 text-white h-14 font-semibold">
                  للإطلاع على المزيد
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProducts;
