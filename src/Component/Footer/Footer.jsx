import LogoFooter from "../../../public/img/logo-footer.png";

const Footer = () => {
  return (
    <div className="bg-[#131313] pt-10 pb-10 text-white   z-0">
      <img className="mx-auto pt-32" src={LogoFooter} alt="" />
      <div className="grid grid-cols-3 gap-10 px-32 pt-20">
        <div>
          <h3 className="text-2xl font-semibold">About Us</h3>
          <p className="pt-5 text-gray-400">
            We are a passionate team <br /> dedicated to providing the best{" "}
            <br />
            services to our customers.
          </p>
        </div>
        <div>
          <p className="text-2xl font-semibold pb-5">Quick Links</p>
          <ul className="pl-5 text-gray-400">
            <li className="pb-3 list-disc">
              <a href="#">Home</a>
            </li>
            <li className="pb-3 list-disc">
              <a href="#">Services</a>
            </li>
            <li className="pb-3 list-disc">
              <a href="#">About</a>
            </li>
            <li className="pb-3 list-disc">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-2xl">Subscribe</p>
          <p className="my-5 text-gray-400">
            Subscribe to our newsletter <br /> for the latest updates.
          </p>
          <input
            className="px-5 py-3 rounded-tl-full rounded-bl-full"
            type="text"
            placeholder="Enter your email"
          />
          <button className="bg-[#E7FE29] font-bold text-black py-3 px-5 rounded-tr-full rounded-br-full">
            Subscribe
          </button>
        </div>
      </div>
      <div className="border border-gray-600 mt-10"></div>
      <p className="text-gray-400 text-center pt-10">
        @2024 Your Company All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
