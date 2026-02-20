import "./Company_Account.css";
import { useState } from "react";

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("كلمات المرور غير متطابقة");
      return;
    }

    setLoading(true);
    setError("");
    const { confirmPassword, ...dataToSend } = formData;

    try {
      const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...dataToSend, role: "company" }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("تم التسجيل بنجاح! يمكنك الآن تسجيل الدخول");
        setIsLogin(true);
      } else {
        setError(data.message || "فشل التسجيل");
      }
    } catch (err) {
      setError("خطأ في الاتصال بالسيرفر");
    } finally {
      setLoading(false);
    }
  };

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

        <form onSubmit={handleRegister} className="space-y-5">
          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

          <div>
            <label className="block text-sm font-medium mb-1">
              Company Name
            </label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Company Email
            </label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Confirm Password
              </label>
              <input
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl font-semibold text-lg button-accen"
          >
            {loading ? "جاري التحميل..." : "Create Company"}
          </button>

          <button
            type="button"
            onClick={() => setIsCustomer(true)}
            className="w-full butenSwitch"
          >
            Switch to Customer Account
          </button>
        </form>
      </div>
    </div>
  );
};
