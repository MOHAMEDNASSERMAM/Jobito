import Style from "./HeaderActions.module.css";
import { useNavigate } from "react-router-dom";
export const HeaderActions = () => {
  const navigate = useNavigate();
  return (
    <section className={Style.faButter}>
      <button
        className={Style.ButUserInformation}
        onClick={() => {
          navigate("/user-information");
        }}
      >
        <i className="fa-solid fa-user"></i>
      </button>
    </section>
  );
};
