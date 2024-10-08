import briqueProductImg from "../assets/brique2-jpg.jpg";
import hoterProductImg from "../assets/hotel.jpg";
import b13ProductImg from "../assets//jebs1.jpg";

const OurProducts = () => {
  return (
    <section id="منتجاتنا" className="my-10" style={{ direction: "rtl" }}>
      <h1 className="text-4xl mb-4 w-24 mx-auto font-semibold pb-1 border-b-4 border-cyan-600">
        منتجاتنا
      </h1>
      <div className=" flex items-center justify-around gap-4">
        <div className="box flex flex-col justify-between border-4 border-cyan-700 rounded-lg w-1/4 h-96 hover:scale-90 transition-transform cursor-pointer">
          <img src={briqueProductImg} className="w-full h-36 " alt="" />
          <p className=" px-4  my-3">
            <span className="text-lg font-semibold">صناعة الآجر الأحمر: </span>
            هي عملية إنتاج مواد بناء مصنوعة من الطين. يتم تشكيل الطين في قوالب
            ثم تجفيفه وحرقه في أفران خاصة للحصول على صلابة ومتانة. الآجر الأحمر
            يتميز بمقاومته للحرارة والرطوبة
          </p>
          <button className="w-full bg-cyan-600 text-white h-14 font-semibold">
            viwe more
          </button>
        </div>
        <div className="box flex flex-col justify-between border-4 border-cyan-700 rounded-lg w-1/4 h-96 hover:scale-90 transition-transform cursor-pointer">
          <img src={hoterProductImg} className="w-full h-36 " alt="" />
          <p className=" px-4  my-3">
            <span className="text-lg font-semibold">الفندقة :</span> هي صناعة
            تقديم الخدمات المتعلقة بالإقامة والضيافة للزوار والسياح. تشمل إدارة
            وتشغيل الفنادق، وتوفير الإقامة المريحة، والوجبات، والخدمات الأخرى
            مثل التنظيف والترفيه، بهدف ضمان تجربة مريحة ومميزة للنزلاء.
          </p>
          <button className="w-full bg-cyan-600 text-white h-14 font-semibold">
            viwe more
          </button>
        </div>

        <div className="box flex flex-col justify-between border-4 border-cyan-700 rounded-lg w-1/4 h-96 hover:scale-90 transition-transform cursor-pointer">
          <img src={b13ProductImg} className="w-full h-36 " alt="" />
          <p className=" px-4  my-3">
            <span className="text-lg font-semibold">صناعة الجبس :</span> هي
            عملية استخراج وتحضير مادة الجبس من الصخور الجبسية. يُسحق الجبس الخام
            ويُسخن لإزالة الماء، ثم يُطحن ليصبح مسحوقًا يُستخدم في البناء لتغطية
            الجدران والأسقف وصناعة القوالب والزخارف. يتميز الجبس بمرونته وسهولة
          </p>
          <button className="w-full bg-cyan-600 text-white h-14 font-semibold">
            viwe more
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
