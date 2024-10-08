import FRoom from "../assets/family-room.jpg";
import TRoom from "../assets/with-people.jpg";
import SRoom from "../assets/with-people.jpg";
import resturatImg from "../assets/resturant.jpg";
import poolImg from "../assets/pool.jpg";
import hotelImg from "../assets/hotel.jpg";

const Hotel = () => {
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
            <p className="text-white text-xl font-semibold">
              يقدم الفندق مجموعة متنوعة من الغرف والأجنحة الفاخرة المجهزة بأحدث
              وسائل الراحة لتلبية احتياجات جميع الزوار. كما يوفر مطاعم تقدم أشهى
              الأطباق المحلية والعالمية، بالإضافة إلى مرافق ترفيهية تشمل حمامات
              السباحة، مراكز اللياقة البدنية، ومنتجعات صحية لضمان إقامة مميزة
              ومريحة
            </p>
          </article>
        </div>

        <div className="h-32 bg-slate-800/80  text-center border-y-8 border-yellow-600">
          <p className="text-3xl text-white pt-8">
            يستوعب الفندق أكثر من :
            <span className="num-inc text-yellow-600">{" 45 شخص"}</span>
          </p>
        </div>
      </div>
      <section className="my-10" style={{ direction: "rtl" }}>
        <h1 className="text-4xl  w-64 mx-auto font-semibold pb-1 border-b-4 border-cyan-600">
          نقدم لضيوفنا الكرام :
        </h1>
        <div className="flex flex-col items-center justify-around my-5 text-center">
          <div className="w-4/5 bg-white h-[36rem] rounded-lg show-animation">
            <img src={FRoom} alt="" className="w-full h-4/6 rounded-lg " />
            <p className="font-semibold text-2xl pt-4">غرف عائلية</p>
          </div>
          <div className="w-4/5 bg-white h-[36rem] rounded-lg show-animation">
            <img src={TRoom} alt="" className="w-full h-4/6 rounded-lg" />
            <p className="font-semibold text-2xl pt-4">غرف مشتركة</p>
          </div>
          <div className="w-4/5 bg-white h-[36rem] rounded-lg show-animation">
            <img src={SRoom} alt="" className="w-full h-4/6 rounded-lg " />
            <p className="font-semibold text-2xl pt-4">غرف فردية</p>
          </div>
          <div className="w-4/5 bg-white h-[36rem] rounded-lg show-animation">
            <img
              src={resturatImg}
              alt=""
              className="w-full h-4/6 rounded-lg "
            />
            <p className="font-semibold text-2xl pt-4">
              مطعم يقدم أشهى الأطباق
            </p>
          </div>
          <div className="w-4/5 bg-white h-[36rem] rounded-lg show-animation">
            <img src={poolImg} alt="" className="w-full h-4/6 rounded-lg " />
            <p className="font-semibold text-2xl pt-4">
              مسبح للترفيه والإسترخاء
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hotel;
