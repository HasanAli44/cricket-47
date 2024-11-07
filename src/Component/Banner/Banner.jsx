import BannerImg from "../../../public/img/banner-img.png";

const Banner = () => {
  return (
    <div className="bg-[#131313] h-[100vh] text-white  flex items-center justify-center">
      <div>
        <img className="mx-auto" src={BannerImg} alt="" />
        <div className="text-center pt-5">
          <h1 className="text-5xl font-bold">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="pt-3">Beyond Boundaries Beyond Limits</p>
          <div className="border-2 border-[#E7FE29] w-[170px] h-14 rounded-full  mx-auto mt-5">
            <button className="bg-[#E7FE29]    text-black w-40 h-12 mt-[3px]  rounded-full font-bold">
              Claim Free Credit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
