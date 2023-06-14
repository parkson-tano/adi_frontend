import Cart from "../../../Cart";
import Compair from "../../../Helpers/icons/Compair";
import ThinBag from "../../../Helpers/icons/ThinBag";
import ThinLove from "../../../Helpers/icons/ThinLove";
import ThinPeople from "../../../Helpers/icons/ThinPeople";
import SearchBox from "../../../Helpers/SearchBox";

export default function Middlebar({ className,type }) {
  return (
    <div className={`w-full h-[86px] bg-white ${className}`}>
      <div className="container-x mx-auto h-full">
        <div className="relative h-full">
          <div className="flex justify-between items-center h-full">
            <div>
                  <a href="/">
                    <img
                        width="120"
                        height="36"
                        src={`${process.env.PUBLIC_URL}/assets/images/logo-3.png`}
                        alt="logo"
                    />
                  </a>
            </div>
            {/* <div className="w-[517px] h-[44px]">
              <SearchBox type={type} className="search-com" />
            </div> */}
           
              <div>
                <button type="button">
                  <span>
                    <ThinPeople />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
