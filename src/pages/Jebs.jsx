import jebsImg from "../assets/jebs.webp";
import brique10 from "../assets/p2.jpg";

const Jebs = () => {
  return (
    <div>
      <div
        className="relative -z-20 flex flex-col justify-between"
        style={{
          backgroundImage: `url(${jebsImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "calc(100vh - 12vh)",
          direction: "rtl",
        }}
      >
        <div className="over-lay w-full h-full bg-cyan-900/50 absolute top-0 -z-10"></div>
        <div className="flex items-start justify-around pt-5">
          <div className="w-1/4 bg-white h-64 rounded-lg">
            <img src={brique10} alt="" className="w-full h-4/6 rounded-lg" />
            <p className="font-semibold ps-3 mt-2">صناعة الآجر 12 ثقب</p>
            <p className="font-semibold ps-3">أبعاده: 180 * 100 * 250</p>
          </div>
          <div
            className="w-1/4 bg-white h-64 rounded-lg"
            style={{ direction: "rtl" }}
          >
            <img src={brique10} alt="" className="w-full h-4/6 rounded-lg" />
            <p className="font-semibold ps-3 mt-2">صناعة الآجر 12 ثقب</p>
            <p className="font-semibold ps-3">أبعاده: 180 * 100 * 250</p>
          </div>
          <div
            className="w-1/4 bg-white h-64 rounded-lg"
            style={{ direction: "rtl" }}
          >
            <img src={brique10} alt="" className="w-full h-4/6 rounded-lg" />
            <p className="font-semibold ps-3 mt-2">صناعة الآجر 12 ثقب</p>
            <p className="font-semibold ps-3">أبعاده: 180 * 100 * 250</p>
          </div>
        </div>
        <div className="h-32 bg-slate-800/80  text-center border-y-8 border-yellow-600">
          <p className="text-3xl text-white pt-8">الطاقة الإنتاجية للمصنع : </p>
        </div>
      </div>
    </div>
  );
};

export default Jebs;
