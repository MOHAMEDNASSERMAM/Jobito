import { SignUpPage } from "../Customer Account/Customer_Account";
import { CompanyRegister } from "../Company_Account/Company_Account";
import type { Dispatch, SetStateAction } from "react";
interface UIProps {
  isCustomer: boolean;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
  setIsCustomer: Dispatch<SetStateAction<boolean>>;
}

export default function UI({ setIsLogin, isCustomer, setIsCustomer }: UIProps) {
  return (
    <>
      {isCustomer ? (
        <SignUpPage
          isCustomer={isCustomer}
          setIsCustomer={setIsCustomer}
          setIsLogin={setIsLogin}
        />
      ) : (
        <CompanyRegister
          setIsLogin={setIsLogin}
          isCustomer={isCustomer}
          setIsCustomer={setIsCustomer}
        />
      )}
    </>
  );
}
