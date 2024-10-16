import bricsImg from "../assets/factory.jpg";
import brique10 from "../assets/p2.jpg";
import bulldozer from "../assets/bulldozer.webp";
import fabricationMachine from "../assets/fabrication-machine-removebg-preview.jpg";
import electKlin from "../assets/elec_klin.jpeg";
import briqueStock from "../assets/brique-stock.jpg";
import hotelTggt from "../assets/hotel1.jpg";
import hotelSouf from "../assets/hotel-souf.jpg";
import { useEffect } from "react";
import { useState } from "react";

const Brique = () => {
  const [count, setCount] = useState(0);
  let start = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      start += 1000;
      setCount((prev) => (prev = start));
      if (start >= 41000) {
        setCount(41000);
        clearInterval(interval);
      }
    }, 100);
  }, [start]);

  return (
    <div style={{ direction: "rtl" }}>
      <div
        className="relative -z-20 flex flex-col justify-end gap-16"
        style={{
          backgroundImage: `url(${bricsImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "calc(100vh - 12vh)",
          direction: "rtl",
        }}
      >
        <div className="over-lay w-full h-full bg-cyan-900/50 absolute top-0 -z-10"></div>
        <div className="w-11/12 mx-auto overflow-hidden">
          <article
            className="w-4/5 mx-auto "
            style={{ animation: "translateText 4s linear " }}
          >
            <p className="text-white text-xl font-semibold">
              شركة **[اسم الشركة]** هي شركة رائدة في تصنيع وتوزيع الآجر الأحمر
              عالي الجودة، المخصص للبناء والتشييد. تتميز منتجاتنا بالقوة
              والمتانة، حيث تم تصنيعها وفقًا لأعلى معايير الصناعة لضمان تحملها
              لعوامل الطقس المختلفة، مما يجعلها مثالية لاستخدامها في مجموعة
              واسعة من المشاريع، بدءًا من المنازل السكنية وصولًا إلى المباني
              التجارية والصناعية. تسعى شركتنا إلى تلبية احتياجات عملائنا من خلال
              توفير منتجات موثوقة وصديقة للبيئة، تتميز بالتصميم الجمالي
              والكفاءة. كما نلتزم بتقديم خدمة عملاء ممتازة وضمان تسليم المنتجات
              في الوقت المحدد.
            </p>
          </article>
        </div>

        <div className="h-32 bg-slate-800/80  text-center border-y-8 border-yellow-600">
          <p className="text-3xl text-white pt-8">
            الطاقة الإنتاجية للمصنع :
            <span className="num-inc text-yellow-600">{count}</span>
          </p>
        </div>
      </div>
      <section className=" my-10" style={{ direction: "rtl" }}>
        <h1 className="text-4xl  w-28 mx-auto font-semibold pb-1 border-b-4 border-cyan-600">
          فروعنا :
        </h1>
        <div className="flex items-center gap-20 justify-center flex-wrap my-6">
          <div className="w-2/5 h-96 bg-slate-200 rounded-lg">
            <img
              src={hotelTggt}
              className=" h-2/4 w-full rounded-t-lg"
              alt=""
            />
            <div className="ps-4 pb-2">
              <h3 className="text-xl font-semibold">
                شركة إنتاج مواد البناء SARL SPMC
              </h3>
              <p className="font-semibold text-gray-600 ">
                تأسست في عام 1990 وتقع في ولاية تقرت، هي شركة رائدة في صناعة
                الآجر الأحمر. مع فريق عمل مكون من حوالي 500 عامل مؤهل، تلتزم
                الشركة بتقديم منتجات عالية الجودة تلبي احتياجات السوق المحلية
                والدولية. تتميز الشركة بقدرتها الإنتاجية التي تصل إلى 41,000 طن
                من الآجر الأحمر سنويًا، مما يجعلها واحدة من أبرز الشركات في مجال
                البناء في المنطقة. بفضل الخبرة الطويلة والتكنولوجيا الحديثة
                المستخدمة في عمليات التصنيع، تضمن إنتاج مواد البناء توفير منتجات
                متينة ومستدامة تساهم في تطوير مشاريع البناء والتشييد المتنوعة.
              </p>
            </div>
          </div>
          <div className="w-2/5 h-96 bg-slate-200 rounded-lg">
            <img
              src={hotelSouf}
              className=" h-2/4 w-full rounded-t-lg"
              alt=""
            />
            <div className="ps-4">
              <h3 className="text-xl font-semibold">
                شركة أم علي للأجر SARL SOAB
              </h3>
              <p className="font-semibold text-gray-600">
                تأسست عام 2001 في ولاية تبسة، متخصصة في إنتاج الآجر الأحمر بجودة
                فائقة. يعمل بالشركة حوالي 350 موظفاً يسهمون في تلبية احتياجات
                قطاع البناء بمنتجات قوية وموثوقة. تصل الطاقة الإنتاجية السنوية
                للشركة إلى نحو 28,000 طن من الآجر الأحمر، مما يجعلها لاعباً
                مهماً في دعم مشاريع البناء على المستويين المحلي والإقليمي. تلتزم
                **أم علي للأجر** بتقديم مواد بناء عالية الجودة، موجهة لتعزيز
                البنية التحتية وتلبية متطلبات العملاء باحترافية ودقة.
              </p>
            </div>
          </div>
          <div className="w-2/5 h-96 bg-slate-200 rounded-lg">
            <img
              src={hotelSouf}
              className=" h-2/4 w-full rounded-t-lg"
              alt=""
            />
            <div className="ps-4">
              <h3 className="text-xl font-semibold">شركة البلاسيتك للتغليف</h3>
              <p className="font-semibold text-gray-600">
                شركة **تجيني للبلاستيك**، التي تأسست في عام 2024 في ولاية تقرت،
                متخصصة في صناعة المواد البلاستيكية. توظف الشركة حوالي 200 عامل،
                وتلعب دورًا رئيسيًا في تزويد مصنع الآجر باحتياجاته من مواد
                التغليف البلاستيكية. بفضل الخبرة والتكنولوجيا الحديثة، تلتزم
                **تجيني للبلاستيك** بتقديم حلول تغليف عالية الجودة تلبي متطلبات
                المصنع، مما يضمن حماية المنتجات وتوفيرها بأفضل شكل للأسواق.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="my-10">
        <h1 className="text-4xl  w-24 mx-auto font-semibold pb-1 border-b-4 border-cyan-600">
          :أنواعه
        </h1>
        <div className="flex items-start justify-around my-8">
          <div className="w-1/4 bg-white h-64 rounded-lg">
            <img
              src={brique10}
              alt=""
              className="w-full h-4/6 rounded-lg show-animation"
            />
            <p className="font-semibold ps-3 mt-2">صناعة الآجر 12 ثقب</p>
            <p className="font-semibold ps-3">أبعاده: 180 * 100 * 250</p>
          </div>
          <div className="w-1/4 bg-white h-64 rounded-lg show-animation">
            <img src={brique10} alt="" className="w-full h-4/6 rounded-lg" />
            <p className="font-semibold ps-3 mt-2">صناعة الآجر 8 ثقب</p>
            <p className="font-semibold ps-3">أبعاده: 180 * 100 * 250</p>
          </div>
          <div className="w-1/4 bg-white h-64 rounded-lg show-animation">
            <img src={brique10} alt="" className="w-full h-4/6 rounded-lg " />
            <p className="font-semibold ps-3 mt-2">صناعة الآجر 6 ثقب</p>
            <p className="font-semibold ps-3">أبعاده: 180 * 100 * 250</p>
          </div>
        </div>
      </section>
      <section className="my-10">
        <h1 className="text-4xl  w-[11rem] mx-auto font-semibold pb-1 border-b-4 border-cyan-600">
          مراحل صنعه :
        </h1>
        <div className="flex flex-col items-center justify-around my-5 ">
          <div className="w-4/5 bg-white h-[36rem] rounded-lg show-animation">
            <h3>1- مرحلة تحضير المواد الخام :</h3>
            <p className="font-semibold text-2xl pt-4">
              بعد الاستخراج، يتم تحضير المواد الخام عن طريق إزالة الشوائب مثل
              الحجارة أو المواد العضوية. ثم يتم خلط الطين بالماء للحصول على
              عجينة متجانسة.
            </p>
            <img src={bulldozer} alt="" className="w-full h-3/6 rounded-lg " />
          </div>
          <div className="w-4/5 bg-white h-[36rem] rounded-lg show-animation">
            <h3>2- التشكيل:</h3>
            <p className="font-semibold text-2xl pt-4">
              يتم تشكيل الأجر باستخدام قوالب معدنية أو آلات خاصة تضغط العجينة
              لتأخذ شكل الطوب المطلوب. يمكن تشكيله يدويًا أو باستخدام آلات
              ميكانيكية، حسب مستوى الإنتاج المطلوب.
            </p>
            <img
              src={fabricationMachine}
              alt=""
              className="w-full h-3/6 rounded-lg "
            />
          </div>
          <div className="w-4/5 bg-white h-[36rem] rounded-lg show-animation">
            <h3>3- مرحلة التجفيف :</h3>
            <p className="font-semibold text-2xl pt-4">
              بعد التشكيل، يتم وضع الأجر في مناطق مخصصة لتجفيفه بشكل طبيعي أو
              صناعي. تستمر هذه العملية من عدة أيام إلى أسابيع، حيث يسمح للطوب
              بفقدان الرطوبة الزائدة تدريجيًا لتجنب التشققات أثناء الحرق.
            </p>
            <img src={bulldozer} alt="" className="w-full h-3/6 rounded-lg " />
          </div>
          <div className="w-4/5 bg-white h-[36rem] rounded-lg show-animation">
            <h3>4- مرحلة الحرق :</h3>
            <p className="font-semibold text-2xl pt-4">
              بعد التجفيف، يتم إدخال الأجر إلى أفران حرارية عالية. تتراوح درجات
              الحرارة بين 800 إلى 1200 درجة مئوية حسب نوع الطوب. تهدف هذه
              العملية إلى إكساب الطوب الصلابة والمتانة المطلوبة.
            </p>
            <img src={electKlin} alt="" className="w-full h-3/6 rounded-lg " />
          </div>
          <div className="w-4/5 bg-white h-[36rem] rounded-lg show-animation">
            <h3>5- مرحلة التبريد والتعبئة :</h3>
            <p className="font-semibold text-2xl mb-4">
              بعد الحرق، يُترك الأجر ليبرد تدريجيًا لتجنب التشققات الناتجة عن
              التغير السريع في درجات الحرارة. بعد اكتمال التبريد، يتم فرز الأجر
              بناءً على الجودة، ثم تعبئته وتخزينه أو نقله إلى مواقع الاستخدام.
            </p>
            <img
              src={briqueStock}
              alt=""
              className="w-full h-3/6 rounded-lg "
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brique;
