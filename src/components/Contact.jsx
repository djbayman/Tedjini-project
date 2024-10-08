import { useLocation } from "react-router-dom";

const Contact = () => {
  const location = useLocation();

  return (
    <footer
      id="إتصل-بنا"
      className="mt-4 bg-cyan-600 flex p-20 text-white"
      style={{ direction: "rtl" }}
    >
      <div className="info w-1/2">
        <h2 className="font-semibold ">إتصل بنا</h2>
        <h3 className="text-lg flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 hover:text-cyan-700 transition-colors"
          >
            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
            <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
          </svg>

          <span> العنوان:</span>
        </h3>
        <h3 className="text-lg flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 hover:text-cyan-700 transition-colors"
          >
            <path
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
              clipRule="evenodd"
            />
          </svg>

          <span> رقم الهاتف:</span>
        </h3>
        <h3 className="text-lg flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 hover:text-cyan-700 transition-colors"
          >
            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
          </svg>

          <span> الإيمايل: </span>
        </h3>
      </div>
      <div className="contact">
        <form
          className="w-2/3"
          action="https://formsubmit.co/djaballahayman20@gmail.com"
          method="POST"
        >
          <input
            type="email"
            name="email"
            className="mb-2 rounded-md w-full h-10 focus:outline-none ps-2  text-lg text-black"
            placeholder="أدخل بريدك الإلكتروني"
          />
          <textarea
            name="message"
            rows="2"
            cols="50"
            className="rounded-md  w-full focus:outline-none ps-2 pt-2  text-lg text-black"
            placeholder="أكتب لنا رسالة"
          />
          <button className="px-3 py-2  font-semibold w-24 bg-white  text-cyan-900  rounded-lg">
            إرسال
          </button>
          <input
            type="hidden"
            name="_next"
            value={`http://localhost:3000${location.pathname}`}
          ></input>
          <input type="hidden" name="_captcha" value="false"></input>
          <input type="hidden" name="_subject" value="New Message"></input>
        </form>
      </div>
    </footer>
  );
};

export default Contact;
