import logo from "../assets/file1.png";

const Navbar = () => {
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
          <li className="mx-4 px-4 py-2 hover:bg-cyan-800 transition-colors rounded-md cursor-pointer">
            <a href="/#" className="text-white">
              الرئيسية
            </a>
          </li>
          <li className="mx-4 px-4 py-2 hover:bg-cyan-800 transition-colors rounded-md cursor-pointer">
            <a href="#من-نحن" className="text-white">
              من نحن
            </a>
          </li>
          <li className="mx-4 px-4 py-2 hover:bg-cyan-800 transition-colors rounded-md cursor-pointer">
            <a href="#منتجاتنا" className="text-white">
              منتجاتنا
            </a>
          </li>
          <li className="mx-4 px-4 py-2 hover:bg-cyan-800 transition-colors rounded-md cursor-pointer">
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
