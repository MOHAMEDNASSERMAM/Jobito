import "./SignUpPage.css";
import { useState } from "react";

type SignUpPageProps = {
  isCustomer: boolean;
  setIsCustomer: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SignUpPage: React.FC<SignUpPageProps> = ({
  isCustomer,
  setIsCustomer,
  setIsLogin,
}) => {
  const [formData, setFormData] = useState({
    full_name: "",
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
        body: JSON.stringify({ ...dataToSend, role: "student" }),
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
    <div className="SignUpPage">
      <form
        onSubmit={handleRegister}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md flex flex-col gap-5 relative z-10"
      >
        <div className="flex align-items-center justify-between mb-5">
          <h2 className="text-3xl font-bold text-center text-main">Sign Up</h2>
          <button
            onClick={() => setIsLogin(true)}
            className="text-sm border px-4 py-2 rounded-lg hover:bg-gray-100"
            type="button"
          >
            Sign In
          </button>
        </div>

        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

        <div>
          <input
            name="full_name"
            placeholder="Full Name"
            value={formData.full_name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accen"
          />
        </div>

        <div>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accen"
          />
        </div>

        <div>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accen"
          />
        </div>

        <div>
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accen"
          />
        </div>

        <button type="submit" className="button-accen" disabled={loading}>
          {loading ? "جاري التحميل..." : "Sign Up"}
        </button>

        <button
          className="text-indigo-500 hover:underline"
          type="button"
          onClick={() => setIsCustomer(!isCustomer)}
        >
          Switch to a Company Account
        </button>
      </form>
    </div>
  );
};
