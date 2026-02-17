import { SignUpPage } from "../Customer Account/Customer_Account";
import { CompanyRegister } from "../Company_Account/Company_Account";
import { useState } from "react";

export default function UI({
  setIsLogin,
  isCustomer,
  setIsCustomer,
}: {
  isCustomer: boolean;
  setIsLogin: (isLogin: boolean) => void;
  setIsCustomer: (isCustomer: boolean) => void;
}) {


  return (
    <>
      {isCustomer ? (
        <SignUpPage isCustomer={isCustomer} setIsCustomer={setIsCustomer} setIsLogin={setIsLogin} />
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
