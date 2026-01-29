import { Twitter, Linkedin, Facebook, Github, Dribbble } from "lucide-react";
import CircularText from "./CircularText";

export default function Footer() {
    return (
        <footer id="footer" className="text-white px-6 pt-20" style={{ backgroundColor: 'black' }}>
            <div className="max-w-7xl mx-auto">

                {/* TOP – CIRCULAR TEXT & SUBSCRIBE */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-16">
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">
                            Get notified when we launch
                        </h3>
                        <p className="text-gray-400 max-w-md">
                            Stay up to date with the latest news, announcements, and articles.
                        </p>
                    </div>

                    <div className="flex w-full md:w-auto gap-3">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 md:w-72 px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-purple-500 outline-none"
                        />
                        <button className="px-5 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition font-medium">
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* MIDDLE – LINKS */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 mb-16">
                    {/* Brand - Circular Text */}
                    <div className="col-span-2 flex items-center justify-center">
                        <div className="w-48 h-48">
                            <CircularText text="Shine Ride • Shine Ride • " spinDuration={15} />
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h4 className="font-medium mb-4">Product</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li>Overview</li>
                            <li>Features</li>
                            <li>
                                Solutions{" "}
                                <span className="ml-1 text-xs px-2 py-0.5 bg-gray-800 rounded-full">
                                    New
                                </span>
                            </li>
                            <li>Tutorials</li>
                            <li>Pricing</li>
                            <li>Releases</li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-medium mb-4">Company</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li>About us</li>
                            <li>Careers</li>
                            <li>Press</li>
                            <li>News</li>
                            <li>Media kit</li>
                            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="font-medium mb-4">Resources</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li>Blog</li>
                            <li>Newsletter</li>
                            <li>Events</li>
                            <li>Help centre</li>
                            <li>Tutorials</li>
                            <li>Support</li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="font-medium mb-4">Social</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li>Twitter</li>
                            <li>LinkedIn</li>
                            <li>Facebook</li>
                            <li>GitHub</li>
                            <li>AngelList</li>
                            <li>Dribbble</li>
                        </ul>
                    </div>

                    {/* Legal */}

                </div>

                {/* BOTTOM */}
                <div className="border-t border-gray-800 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
                    <p>© 2077 Untitled UI. All rights reserved.</p>

                    <div className="flex gap-4">
                        <Twitter size={18} />
                        <Linkedin size={18} />
                        <Facebook size={18} />
                        <Github size={18} />
                        <Dribbble size={18} />
                    </div>
                </div>

            </div>
        </footer>
    );
}
