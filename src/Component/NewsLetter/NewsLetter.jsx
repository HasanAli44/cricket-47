import "./style.css";

const NewsLetter = () => {
  return (
    <div className="px-32 -mb-32 mt-20  z-10">
      <div
        className={`newsletter-bg bg-cover bg-center h-screen border-4 border-white rounded-2xl items-center justify-center`}
      >
        <div>
          <h3 className="text-3xl font-bold">Subscribe to our Newsletter</h3>
          <p className="pt-5">
            Get the latest updates and news right in your inbox!
          </p>
          <input
            className="pl-5 pr-20 py-3 mt-10 rounded-xl mr-5"
            type="text"
            placeholder="Enter your email"
          />
          <button className="bg-[#E7FE29] font-bold text-black py-3 px-10 rounded-xl">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
