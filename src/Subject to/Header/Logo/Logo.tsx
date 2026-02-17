import Style from "./Logo.module.css";
import LogoIMG from "../../../assets//412ec68f361b4f49b52fb8d584c317ccf197a403.png";
export const Logo = () => {
  return (
    <h1 className={Style.Logo}>
      <img src={LogoIMG} alt="" />
    </h1>
  );
};
