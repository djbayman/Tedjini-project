import { useState } from "react";
import logo from "../assets/file1.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [onHever, setOnHover] = useState(false);

  const dropDown = (
    <div className="w-32 h-28 bg-cyan-700 absolute top-10 right-0 rounded-md border-t-2 border-white text-sm transition-transform">
      <ul className="">
        <Link to="/brique" className="text-white">
          <li className="w-32 p-2 hover:bg-cyan-800 rounded-md">صناعة الآجر</li>
        </Link>
        <Link to="/hotel" className="text-white">
          <li className="w-32 p-2 hover:bg-cyan-800 rounded-md">
            خدمة الفندقة
          </li>
        </Link>
        <Link to="/jebs" className="text-white">
          <li className="w-32 p-2 hover:bg-cyan-800 rounded-md">
            صناعة الإسمنت الأبيض
          </li>
        </Link>
      </ul>
    </div>
  );

  return (
    <div
      className=" top-0 sticky z-10 "
      style={{ direction: "rtl", height: "calc(100vh - 88vh)" }}
    >
      <nav className="w-full flex items-center justify-between bg-cyan-700		 px-4 py-8 text-white h-20  ">
        <div className="flex items-center py-4 gap-3">
          <img src={logo} className="w-20 h-20" alt="" />
          <h1 className="logo font-bold text-xl ">مجمع تجاني</h1>
        </div>
        <ul className="flex items-center font-semibold ">
          <li className="ms-2 px-4 py-2 hover:bg-cyan-800 transition-colors rounded-md cursor-pointer">
            <a href="/#" className="text-white">
              الرئيسية
            </a>
          </li>
          <li className="ms-2 px-4 py-2 hover:bg-cyan-800 transition-colors rounded-md cursor-pointer">
            <a href="#من-نحن" className="text-white">
              من نحن
            </a>
          </li>
          <li
            className="relative flex items-center gap-4 ms-2 px-4 py-2 hover:bg-cyan-800 transition-colors rounded-md cursor-pointer"
            onMouseEnter={() => setOnHover(true)}
            onMouseLeave={() => setOnHover(false)}
          >
            <a href="#منتجاتنا" className="text-white">
              منتجاتنا
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`transition-transform size-4 ${
                onHever ? "rotate-180" : ""
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
            {onHever && dropDown}
          </li>
          <li className="ms-2 px-4 py-2 hover:bg-cyan-800 transition-colors rounded-md cursor-pointer">
            <a href="#إتصل-بنا" className="text-white">
              إتصل بنا
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
