import "./Company_Account.css";

type CompanyRegisterProps = {
  isCustomer: boolean;
  setIsCustomer: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CompanyRegister: React.FC<CompanyRegisterProps> = ({
  isCustomer,
  setIsCustomer,
  setIsLogin,
}) => {
  return (
    <div className="Company_Account">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Company Account</h1>
          <button
            onClick={() => setIsLogin(true)}
            className="text-sm border px-4 py-2 rounded-lg hover:bg-gray-100"
          >
            Sign In
          </button>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Row 1 */}
          <div className="grid md:grid-cols-3 gap-4">
            <Input label="Company Name" />
            <Input label="Company ID" />
            <Input label="Company Phone" />
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-3 gap-4">
            <Input label="Tax Number" />
            <Input label="Commercial Register" />
            <Input label="License Number" />
          </div>

          {/* Row 3 */}
          <Input label="Company Email" />

          {/* Row 4 */}
          <Input label="Company Address" />

          {/* Row 5 */}
          <div className="grid md:grid-cols-2 gap-4">
            <Input label="Password" type="password" />
            <Input label="Confirm Password" type="password" />
          </div>

          <Input label="Responsible National ID" />

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#" className="text-indigo-500 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold text-lg
               from-indigo-500 to-purple-500
              hover:scale-[1.01] transition  button-accen"
          >
            Create Company
          </button>
          <button
            onClick={() => setIsCustomer(!isCustomer)}
            className="butenSwitch"
          >
            Switch to Customer Account
          </button>
        </form>
      </div>
    </div>
  );
};

import React from "react";

type InputProps = {
  label: string;
  type?: string;
};

const Input: React.FC<InputProps> = ({ label, type = "text" }) => {
  return (
    <div>
      <label className="block text-sm font-medium mb-1 text-gray-600">
        {label}
      </label>
      <input
        type={type}
        className="w-full border rounded-lg px-4 py-2 outline-none
        focus:ring-2 focus:ring-indigo-400"
      />
    </div>
  );
};

export default Input;
