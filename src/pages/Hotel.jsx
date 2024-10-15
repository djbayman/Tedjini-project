import FRoom from "../assets/family-room-souf.jpg";
import TRoom from "../assets/with-people.jpg";
import SRoom from "../assets/roomS-souf.jpg";
import resturatImg from "../assets/resturant.jpg";
import poolImg from "../assets/pool.jpg";
import hotelImg from "../assets/hotel.jpg";
import hotelTggt from "../assets/hotel1.jpg";
import hotelSouf from "../assets/hotel-souf.jpg";
import { useState } from "react";

let imgsArray = [
  {
    img: FRoom,
    header: "غرفة بسرير كبير",
  },
  {
    img: TRoom,
    header: "غرفة فردية",
  },
  {
    img: SRoom,
    header: "غرفة ثنائية",
  },
  {
    img: SRoom,
    header: "غرفة ثلاثية",
  },
  {
    img: SRoom,
    header: "عائلي جناح",
  },
  {
    img: resturatImg,
    header: "مطعم يقدم أشهى الأطباق",
  },
  {
    img: poolImg,
    header: "مسبح للترفيه والإسترخاء",
  },
];

const Hotel = () => {
  const [paused, setPaused] = useState(false);
  return (
    <div>
      <div
        className="relative -z-20 flex flex-col justify-end gap-40"
        style={{
          backgroundImage: `url(${hotelImg})`,
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
            <p className="text-white text-2xl font-semibold">
              تقدم شركتنا خدمات فندقية متكاملة مصممة خصيصًا لتلبية احتياجات
              العملاء بأعلى معايير الجودة والراحة. نسعى لضمان تجربة استثنائية
              تشمل الإقامة الفاخرة، خدمة الغرف على مدار الساعة، خيارات متعددة من
              المطاعم الراقية، بالإضافة إلى مرافق ترفيهية متنوعة مثل المسابح،
              وقاعات المؤتمرات المجهزة بأحدث التقنيات. فريقنا المتميز يعمل بشغف
              لتقديم أفضل الخدمات الشخصية التي تتجاوز توقعات النزلاء، مما يضمن
              لهم إقامة مريحة وذكريات لا تُنسى.
            </p>
          </article>
        </div>

        <div className="h-32 bg-slate-800/80  text-center border-y-8 border-yellow-600 flex items-center justify-center gap-4">
          <p className="text-2xl text-white pt-8">
            تستوعب الفنادق أكثر من :
            <span className="num-inc text-yellow-600">{" 300 شخص"}</span>
          </p>
          <p className="text-2xl text-white pt-8">
            ويوجد بها أكثر من :
            <span className="num-inc text-yellow-600">{" 160 غرفة"}</span>
          </p>
        </div>
      </div>
      <section className=" my-10" style={{ direction: "rtl" }}>
        <h1 className="text-4xl  w-28 mx-auto font-semibold pb-1 border-b-4 border-cyan-600">
          فروعنا :
        </h1>
        <div className="flex justify-around my-6">
          <div className="w-2/5 h-96 bg-slate-200 rounded-lg">
            <img
              src={hotelTggt}
              className=" h-2/4 w-full rounded-t-lg"
              alt=""
            />
            <div className="ps-4">
              <h3 className="text-xl font-semibold">فندق تجاني -تقرت</h3>
              <p className="font-semibold text-gray-600">
                "تأسس فندقنا في عام 2014، ويُعد وجهة مميزة للإقامة الفاخرة حيث
                يمكنه استيعاب أكثر من 200 نزيل. نقدم مجموعة واسعة من الخدمات
                التي تلبي احتياجات النزلاء المختلفة، بما في ذلك مسبح حديث، حمام
                تقليدي للاسترخاء، وقاعة حفلات مجهزة بالكامل لاستضافة المناسبات
                الخاصة والمؤتمرات. يتميز الفندق بتوفير أجواء راقية وخدمات متميزة
                لضمان راحة ورفاهية الضيوف طوال فترة إقامتهم."
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
              <h3 className="text-xl font-semibold">فندق تجاني -الوادى</h3>
              <p className="font-semibold text-gray-600">
                "تأسس فندقنا في عام 2018، ويُعد وجهة مميزة للإقامة الفاخرة حيث
                يمكنه استيعاب أكثر من 200 نزيل. نقدم مجموعة واسعة من الخدمات
                التي تلبي احتياجات النزلاء المختلفة، بما في ذلك مسبح حديث، حمام
                تقليدي للاسترخاء، وقاعة حفلات مجهزة بالكامل لاستضافة المناسبات
                الخاصة والمؤتمرات. يتميز الفندق بتوفير أجواء راقية وخدمات متميزة
                لضمان راحة ورفاهية الضيوف طوال فترة إقامتهم."
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="my-10 mx-8" style={{ direction: "rtl" }}>
        <h1 className="text-4xl  w-64 mx-auto font-semibold pb-1 border-b-4 border-cyan-600">
          نقدم لضيوفنا الكرام :
        </h1>
        <div
          className=" my-5 slide-container relative overflow-hidden whitespace-nowrap mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="slide-animation inline-block  mx-auto"
            style={{
              width: "1450px",
              animation: "30s slide infinite linear",
              animationPlayState: `${paused ? "paused" : ""}`,
            }}
          >
            <div className=" flex items-center justify-around gap-2 ">
              {imgsArray.map((item, index) => (
                <div
                  className="box  min-w-44 h-52 bg-slate-200 rounded-md me-2 img-slide"
                  // style={{ width: "calc(100% / 7)" }}
                >
                  <img
                    src={item.img}
                    className="w-full
                     h-32 rounded-t-md"
                    alt=""
                  />
                  <h3 className="text-base font-semibold ps-2 mt-3 whitespace-normal">
                    {item.header}
                  </h3>
                </div>
              ))}
            </div>
          </div>
          <div
            className="slide-animation inline-block  mx-auto"
            style={{
              width: "1450px",
              animation: "30s slide infinite linear",
              animationPlayState: `${paused ? "paused" : ""}`,
            }}
          >
            <div className=" flex items-center justify-around gap-2 ">
              {imgsArray.map((item, index) => (
                <div
                  className="box  min-w-44 h-52 bg-slate-200 rounded-md me-2 img-slide"
                  // style={{ width: "calc(100% / 7)" }}
                >
                  <img
                    src={item.img}
                    className="w-full
                     h-32 rounded-t-md"
                    alt=""
                  />
                  <h3 className="text-base font-semibold ps-2 mt-3 whitespace-normal">
                    {item.header}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hotel;
