import IpTvMobileMenu from "./IpTvMobileMenu";
import logo from "../../../assets/logoip.webp";

const IpMobile = () => {
  return (
    <div className="lg:hidden flex items-center justify-between w-full px-[20px] py-3">
      <a href="/">
        <img src={logo} alt="" className="w-[190px] h-[45px]" />
      </a>

      <IpTvMobileMenu />
    </div>
  );
};

export default IpMobile;
