import { useState } from "react";
import { Link } from "react-router-dom";
import { getUsersAPI } from "../services/allAPIs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const users = await getUsersAPI();

      if (!users) {
        toast.error("⚠️ Server not running. Please start JSON Server!", {
          position: "top-center",
        });
        return;
      }

      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        toast.success("✅ Login successful!", { position: "top-center" });

        setTimeout(() => {
          if (user.role === "admin") {
            window.location.href = "/adminHome";
          } else {
            window.location.href = "/home";
          }
        }, 1200);
      } else {
        toast.warn("❌ Invalid email or password!", { position: "top-center" });
      }
    } catch (error) {
      console.error(error);
      toast.error("⚠️ Unable to connect to server.", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white px-6 py-10 relative">
      <ToastContainer />

      <div className="flex justify-center w-full md:w-2/3">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8"
        >
          <h2 className="text-3xl font-semibold text-center mb-6 text-blue-300">
            Welcome Back
          </h2>

          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500/40 outline-none"
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500/40 outline-none"
              required
            />

            <button
              type="submit"
              className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-all duration-300 shadow-md"
            >
              Login
            </button>
          </div>

          <div className="mt-6 text-center text-sm text-gray-400">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-blue-400 hover:underline hover:text-blue-300"
            >
              Register
            </Link>
          </div>
        </form>
      </div>

      <div className="hidden md:block absolute right-10 top-1/2 -translate-y-1/2 w-[320px] bg-gray-800/60 p-6 rounded-2xl shadow-lg border border-gray-500">
        <h3 className="text-xl font-semibold mb-4 text-blue-400 text-center">
          Sample Login Credentials
        </h3>

        <div className="space-y-4 text-sm text-gray-300">
          <div className="bg-gray-900/60 p-3 rounded-lg">
            <p className="font-semibold text-blue-300 mb-1">User:</p>
            <p>Email: user@gmail.com</p>
            <p>Password: user123</p>
          </div>

          <div className="bg-gray-900/60 p-3 rounded-lg">
            <p className="font-semibold text-blue-300 mb-1">Admin:</p>
            <p>Email: admin@gmail.com</p>
            <p>Password: admin123</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
