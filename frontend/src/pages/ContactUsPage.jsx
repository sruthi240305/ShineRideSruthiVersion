import React from 'react';
import Layout from '@/components/Layout';
import Breadcrumbs from '@/components/Breadcrumbs';
import CustomerSupportForm from '@/components/forms/CustomerSupportForm';
import { Mail, Phone, MapPin, MessageSquare, Clock } from 'lucide-react';

const ContactUsPage = () => {
    return (
        <Layout>
            <div className="min-h-screen bg-black text-white pt-24 px-6 pb-20">
                <div className="max-w-7xl mx-auto">
                    <Breadcrumbs items={[{ label: 'Home', link: '/' }, { label: 'Contact Us' }]} />

                    {/* Hero Section */}
                    <div className="mt-12 text-center mb-20">
                        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                            Get in Touch
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Have questions about our premium car wash services? We're here to provide you with the best experience possible.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Contact Info Card */}
                        <div className="space-y-10">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-purple-500/30 transition-colors">
                                    <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6">
                                        <Mail className="text-purple-400" size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Email Support</h3>
                                    <p className="text-gray-400 text-sm mb-4">Our team is here to help with any technical or service issues.</p>
                                    <a href="mailto:support@shineride.com" className="text-purple-400 font-semibold hover:underline">support@shineride.com</a>
                                </div>

                                <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-blue-500/30 transition-colors">
                                    <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6">
                                        <Phone className="text-blue-400" size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Call Sales</h3>
                                    <p className="text-gray-400 text-sm mb-4">Speak with our sales team about corporate plans or bulk bookings.</p>
                                    <a href="tel:+18001234567" className="text-blue-400 font-semibold hover:underline">+91 1800-123-4567</a>
                                </div>
                            </div>

                            <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="text-green-400" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Main Office</h4>
                                        <p className="text-gray-400">123 Shine Ride Way, Vadavalli, Coimbatore, Tamil Nadu 641041</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
                                        <Clock className="text-yellow-400" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Hours of Operation</h4>
                                        <p className="text-gray-400">Monday - Friday: 9:00 AM - 8:00 PM</p>
                                        <p className="text-gray-400">Saturday - Sunday: 10:00 AM - 6:00 PM</p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative overflow-hidden rounded-3xl bg-purple-600 p-8 text-white group cursor-pointer">
                                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform"></div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold mb-2 flex items-center gap-3">
                                        <MessageSquare size={24} />
                                        Live Chat
                                    </h3>
                                    <p className="text-purple-100 mb-6 max-w-xs">Prefer chatting? Get instant answers from our support team now.</p>
                                    <button className="px-6 py-2 bg-white text-purple-600 font-bold rounded-full hover:shadow-lg transition-shadow">
                                        Start Chatting
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Form Section */}
                        <div className="bg-zinc-900/30 border border-white/5 rounded-[2.5rem] p-10 backdrop-blur-sm">
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold mb-3 text-white">Send us a message</h2>
                                <p className="text-gray-400">We respond to all inquiries within 24 hours.</p>
                            </div>
                            <CustomerSupportForm />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ContactUsPage;
