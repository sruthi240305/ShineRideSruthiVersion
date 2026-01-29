import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Love the simplicity of the service and the prompt customer support. We can't imagine working without it.",
    name: "Lulu Meyers",
    role: "PM, Hourglass",
    company: "Web Design Agency",
  },
];

export default function Login() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [animating, setAnimating] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const handlePrev = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    if (animating) return;
    setAnimating(true);

    setTimeout(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
      setAnimating(false);
    }, 250);
  };

  const handleSignIn = () => {
    if (email === "customer@gmail.com" && password === "1234") {
      localStorage.setItem("user", JSON.stringify({ role: "customer", email }));
      navigate("/customer-dashboard");
    } else if (email === "employee@gmail.com" && password === "1234") {
      localStorage.setItem("user", JSON.stringify({ role: "staff", email }));
      navigate("/staff-dashboard");
    } else if (email === "admin@gmail.com" && password === "1234") {
      localStorage.setItem("user", JSON.stringify({ role: "admin", email }));
      navigate("/admin-dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center text-white px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT – LOGIN FORM */}
        <div className="bg-black/40 backdrop-blur-lg rounded-xl p-8 max-w-md w-full">
          <h1 className="text-2xl font-semibold mb-2">Welcome back</h1>
          <p className="text-sm text-gray-400 mb-6">
            Welcome back! Please enter your details.
          </p>

          <form autoComplete="off">
            {/* Email */}
            <label className="text-sm text-gray-300">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
              className="w-full mt-1 mb-4 px-4 py-2 rounded-md bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            {/* Password */}
            <label className="text-sm text-gray-300">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
              className="w-full mt-1 mb-4 px-4 py-2 rounded-md bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-sm mb-6">
              <label className="flex items-center gap-2 text-gray-400">
                <input type="checkbox" className="accent-purple-600" />
                Remember for 30 days
              </label>
              <button type="button" className="text-purple-400 hover:underline">
                Forgot password
              </button>
            </div>

            {/* Sign in */}
            <button
              type="button"
              onClick={handleSignIn}
              className="w-full bg-purple-600 hover:bg-purple-700 transition rounded-md py-2 font-medium mb-4"
            >
              Sign in
            </button>

            {/* Google */}
            <button type="button" className="w-full border border-gray-700 rounded-md py-2 flex items-center justify-center gap-2 hover:bg-gray-900 transition">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="google"
                className="w-5 h-5"
              />
              Sign in with Google
            </button>
          </form>

          {/* Signup */}
          <p className="text-sm text-gray-400 mt-6 text-center">
            Don't have an account?{" "}
            <span
              className="text-purple-400 hover:underline cursor-pointer"
              onClick={() => navigate('/signup')}
            >
              Sign up
            </span>
          </p>
        </div>

        {/* RIGHT – TESTIMONIAL */}
        <div className="hidden md:flex flex-col justify-between h-full px-6">
          <div
            className={`transition-all duration-300 ease-in-out transform
            ${animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}
          `}
          >
            <p className="text-3xl font-light leading-relaxed">
              "{testimonials[currentTestimonial].quote}"
            </p>

            <div className="mt-6">
              <p className="font-semibold">
                {testimonials[currentTestimonial].name}
              </p>
              <p className="text-sm text-gray-400">
                {testimonials[currentTestimonial].role}
                <br />
                {testimonials[currentTestimonial].company}
              </p>
            </div>
          </div>

          {/* Slider arrows */}
          <div className="flex gap-3 mt-10">
            <button
              onClick={handlePrev}
              className="p-2 border border-gray-700 rounded-full hover:bg-gray-800 transition"
            >
              <ArrowLeft size={18} />
            </button>

            <button
              onClick={handleNext}
              className="p-2 border border-gray-700 rounded-full hover:bg-gray-800 transition"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}