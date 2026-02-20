type LoginProps = {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  setIsCustomer: React.Dispatch<React.SetStateAction<boolean>>;
  isCustomer: boolean;
  isLogin: boolean;
};

import { useState } from "react";
import "./Login.css";

export const LoginPage: React.FC<LoginProps> = ({
  isCustomer,
  setIsCustomer,
  setIsLogin,
}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert("تم تسجيل الدخول بنجاح!");
        setIsLogin(true);
      } else {
        setError(data.message || "فشل تسجيل الدخول");
      }
    } catch (err) {
      setError("خطأ في الاتصال بالسيرفر");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="Company_Account">
      <form onSubmit={handleLogin} className="space-y-5">
        <h2 className="text-3xl font-bold">Login</h2>

        {error && <div className="text-red-500">{error}</div>}

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Password</label>
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>

        <button
          type="submit"
          className="button-accen w-full"
          disabled={loading}
        >
          {loading ? "جاري التحميل..." : "Log In"}
        </button>

        <button
          type="button"
          onClick={() => setIsCustomer(true)}
          className="butenSwitch w-full"
        >
          Switch to Customer Account
        </button>
      </form>
    </div>
  );
};

// default export for ease of importing
export default LoginPage;
