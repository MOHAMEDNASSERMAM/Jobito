import { useEffect, useState } from "react";
import UI from "../../Subject to/User Information/CreateAcont/Up/UP";
import Login from "../../Subject to/User Information/Login/Login";
import "./User_Information.css";
import img from "../../assets/Gemini_Generated_Image_532p06532p06532p.png"

export const User_Information = ({
  setShowHeader,
}: {
  setShowHeader: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isCustomer, setIsCustomer] = useState(true);
  const [isLogin, setIsLogin] = useState(true);
  useEffect(() => {
    setShowHeader(false);

    return () => setShowHeader(true);
  }, [setShowHeader]);
  return (
    <div className="min-h-screen flex">
      <img
      className="img-container"
        src={img}
        alt="illustration"
      />
      {isLogin ? (
        <Login
          setIsLogin={setIsLogin}
          isLogin={isLogin}
          isCustomer={isCustomer}
          setIsCustomer={setIsCustomer}
        />
      ) : (
        <UI
          setIsLogin={setIsLogin}
          isCustomer={isCustomer}
          setIsCustomer={setIsCustomer}
        />
      )}
    </div>
  );
};
