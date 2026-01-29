import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
    {
        quote:
            "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
        name: "Caitlyn King",
        role: "Head of Design",
        company: "Layers",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        quote: "The onboarding experience was seamless and the UI feels premium.",
        name: "Daniel Moore",
        role: "Product Manager",
        company: "Flowbase",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        quote: "Secure, fast, and beautifully designed. Highly recommended for teams.",
        name: "Aisha Khan",
        role: "Founder",
        company: "Nextify",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
];

export default function Signup() {
    const navigate = useNavigate();
    const [current, setCurrent] = useState(0);

    return (
        // 🔥 FULL SCREEN WRAPPER (THIS FIXES EVERYTHING)
        <div className="min-h-screen w-full bg-black text-white flex items-center justify-center">

            {/* MAIN CONTAINER */}
            <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 px-6">

                {/* ================= LEFT – TESTIMONIAL ================= */}
                <div className="hidden md:flex items-center">
                    <div className="max-w-md">

                        {/* Stars */}
                        <div className="flex gap-1 text-yellow-400 mb-6">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={18} fill="currentColor" />
                            ))}
                        </div>

                        {/* Quote */}
                        <p className="text-3xl font-light leading-relaxed mb-8 transition-all duration-500">
                            “{testimonials[current].quote}”
                        </p>

                        {/* Profile */}
                        <div className="flex items-center gap-4">
                            <img
                                src={testimonials[current].image}
                                className="w-12 h-12 rounded-full"
                            />
                            <div>
                                <p className="font-medium">{testimonials[current].name}</p>
                                <p className="text-sm text-gray-400">
                                    {testimonials[current].role}, {testimonials[current].company}
                                </p>
                            </div>
                        </div>

                        {/* Controls */}
                        <div className="flex items-center gap-4 mt-10 text-gray-400">
                            <button
                                onClick={() =>
                                    setCurrent(current === 0 ? testimonials.length - 1 : current - 1)
                                }
                                className="hover:text-white transition"
                            >
                                <ArrowLeft size={18} />
                            </button>

                            <div className="flex gap-2">
                                {testimonials.map((_, i) => (
                                    <span
                                        key={i}
                                        className={`w-2 h-2 rounded-full ${i === current ? "bg-purple-500" : "bg-gray-600"
                                            }`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={() =>
                                    setCurrent(current === testimonials.length - 1 ? 0 : current + 1)
                                }
                                className="hover:text-white transition"
                            >
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* ================= RIGHT – SIGNUP FORM ================= */}
                <div className="flex items-center justify-center md:justify-end">
                    <div className="bg-black/40 backdrop-blur-xl p-8 rounded-xl w-full max-w-md">

                        <h2 className="text-2xl font-semibold mb-2">Sign up</h2>
                        <p className="text-sm text-gray-400 mb-6">
                            Start your 30-day free trial.
                        </p>

                        <label className="text-sm">Name</label>
                        <input
                            className="w-full mt-1 mb-4 px-4 py-2 bg-gray-900 border border-gray-700 rounded-md"
                            placeholder="Enter your name"
                        />

                        <label className="text-sm">Email</label>
                        <input
                            className="w-full mt-1 mb-4 px-4 py-2 bg-gray-900 border border-gray-700 rounded-md"
                            placeholder="Enter your email"
                        />

                        <label className="text-sm">Password</label>
                        <input
                            type="password"
                            className="w-full mt-1 px-4 py-2 bg-gray-900 border border-gray-700 rounded-md"
                            placeholder="Create a password"
                        />
                        <p className="text-xs text-gray-500 mt-1 mb-6">
                            Must be at least 8 characters.
                        </p>

                        <button className="w-full bg-purple-600 hover:bg-purple-700 transition py-2 rounded-md font-medium mb-4">
                            Get started
                        </button>

                        <button className="w-full border border-gray-700 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-900 transition">
                            <img
                                src="https://www.svgrepo.com/show/475656/google-color.svg"
                                className="w-5 h-5"
                            />
                            Sign up with Google
                        </button>

                        <p className="text-sm text-gray-400 mt-6 text-center">
                            Already have an account?{" "}
                            <span
                                onClick={() => navigate("/login")}
                                className="text-purple-400 cursor-pointer hover:underline"
                            >
                                Log in
                            </span>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
