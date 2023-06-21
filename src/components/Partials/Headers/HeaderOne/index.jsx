import ThinBag from "../../../Helpers/icons/ThinBag";
import Middlebar from "./Middlebar";
import Navbar from "./Navbar";
import TopBar from "./TopBar";
import { Link } from "react-router-dom";
import Arrow from "../../../Helpers/icons/Arrow";
import { useAuth } from "../../../../context/auth-context";

export default function HeaderOne({ className, drawerAction,type=1 }) {
    const { user } = useAuth();
  return (
    <header className={` ${className || ""} header-section-wrapper relative`}>
      <TopBar className="quomodo-shop-top-bar" />
      <Middlebar
        type={type}
        className="quomodo-shop-middle-bar lg:block hidden"
      />
      <div className="quomodo-shop-drawer lg:hidden block w-full h-[60px] bg-white">
        <div className="w-full h-full flex justify-between items-center px-5">
          <div onClick={drawerAction}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <div>
            {type === 3 ? (
              <a href="/">
                <img
                  width="120"
                  height="36"
                  src={`${process.env.PUBLIC_URL}/assets/images/logo-3.png`}
                  alt="logo"
                />
              </a>
            ) : type === 4 ? (
              <a href="/">
                <img
                  width="120"
                  height="36"
                  src={`${process.env.PUBLIC_URL}/assets/images/logo-4.svg`}
                  alt="logo"
                />
              </a>
            ) : (
              <a href="/">
                <img
                  width="120"
                  height="36"
                  src={`${process.env.PUBLIC_URL}/assets/images/logo-3.png`}
                  alt="logo"
                />
              </a>
            )}
          </div>
          <div className="cart relative cursor-pointer">
            <div className="become-seller-btn">
              {user ? (
                <Link to="/import-product">
                  <div className="black-btn w-[161px] h-[40px] flex justify-center items-center cursor-pointer">
                    <div className="flex space-x-2 items-center">
                      <span className="text-sm font-600">Start Importing</span>
                      <span>
                        <svg
                          className="fill-current"
                          width="6"
                          height="10"
                          viewBox="0 0 6 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="1.08984"
                            width="6.94106"
                            height="1.54246"
                            transform="rotate(45 1.08984 0)"
                            fill="white"
                          />
                          <rect
                            x="6"
                            y="4.9082"
                            width="6.94106"
                            height="1.54246"
                            transform="rotate(135 6 4.9082)"
                            fill="white"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ) : (
                <Link to="/login">
                  <div className="black-btn w-[161px] h-[40px] flex justify-center items-center cursor-pointer">
                    <div className="flex space-x-2 items-center">
                      <span className="text-sm font-600">Start Importing</span>
                      <span>
                        <svg
                          className="fill-current"
                          width="6"
                          height="10"
                          viewBox="0 0 6 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="1.08984"
                            width="6.94106"
                            height="1.54246"
                            transform="rotate(45 1.08984 0)"
                            fill="white"
                          />
                          <rect
                            x="6"
                            y="4.9082"
                            width="6.94106"
                            height="1.54246"
                            transform="rotate(135 6 4.9082)"
                            fill="white"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <Navbar type={type} className="quomodo-shop-nav-bar lg:block hidden" />
    </header>
  );
}
