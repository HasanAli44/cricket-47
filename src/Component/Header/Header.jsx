import LogoImg from "../../../public/img/logo.png";
import CoinImg from "../../../public/img/Coin.png";
const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100 xl:px-32">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Fixture</a>
              </li>
              <li>
                <a>Teams</a>
              </li>
              <li>
                <a>Schedules</a>
              </li>
            </ul>
          </div>
          <a href="#">
            <img src={LogoImg} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex py-5">
          <ul className=" menu-horizontal px-1">
            <li className="font-medium mr-10">
              <a className="hover:text-[#E7FE29]" href="#">
                Home
              </a>
            </li>
            <li className="font-medium mr-10">
              <a className="hover:text-[#E7FE29]" href="#">
                Fixture
              </a>
            </li>
            <li className="font-medium mr-10">
              <a className="hover:text-[#E7FE29]" href="#">
                Teams
              </a>
            </li>
            <li className="font-medium mr-10">
              <a className="hover:text-[#E7FE29]" href="#">
                Schedules
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="flex bg-white border py-3 px-4 rounded-xl">
            0 Coin <img className="ml-2" src={CoinImg} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
