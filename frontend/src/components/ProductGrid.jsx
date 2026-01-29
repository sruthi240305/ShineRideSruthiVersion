import React, { useState } from 'react';
import { ShoppingCart, Eye, Heart, Star, Plus } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import Breadcrumbs from '@/components/Breadcrumbs';

const carWashServices = [
    {
        title: "Premium Exterior Wash",
        offer: "Up to 25% off",
        description: "High-pressure foam wash, hand rinse & shine",
        rating: 5,
        reviews: 320,
        highlights: ["Fast Service", "Scratch-safe wash"],
        price: 25,
        action: "Book Now",
        image: "https://images.pexels.com/photos/372810/pexels-photo-372810.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        title: "Complete Interior Cleaning",
        offer: "Up to 30% off",
        description: "Vacuuming, dashboard polish, seat cleaning",
        rating: 4,
        reviews: 210,
        highlights: ["Odor removal", "Deep interior care"],
        price: 40,
        action: "Book Now",
        image: "https://images.pexels.com/photos/3354675/pexels-photo-3354675.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        title: "Full Car Detailing",
        offer: "Up to 35% off",
        description: "Exterior and interior deep cleaning with wax",
        rating: 5,
        reviews: 455,
        highlights: ["Premium finish", "Long-lasting shine"],
        price: 75,
        action: "Book Now",
        image: "https://images.pexels.com/photos/5233258/pexels-photo-5233258.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        title: "Basic Exterior Wash",
        offer: "Up to 15% off",
        description: "Quick exterior wash and dry",
        rating: 4,
        reviews: 180,
        highlights: ["Quick service", "Budget friendly"],
        price: 15,
        action: "Book Now",
        image: "https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        title: "Interior Vacuum Only",
        offer: "Up to 10% off",
        description: "Seat, floor, and boot vacuuming",
        rating: 4,
        reviews: 140,
        highlights: ["Quick clean", "Dust removal"],
        price: 10,
        action: "Book Now",
        image: "https://images.pexels.com/photos/6873007/pexels-photo-6873007.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        title: "Seat Shampoo Cleaning",
        offer: "Up to 20% off",
        description: "Deep shampoo cleaning for car seats",
        rating: 5,
        reviews: 260,
        highlights: ["Stain removal", "Fresh fragrance"],
        price: 35,
        action: "Book Now",
        image: "https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        title: "Leather Seat Care",
        offer: "Up to 25% off",
        description: "Leather cleaning and conditioning",
        rating: 5,
        reviews: 195,
        highlights: ["Crack prevention", "Soft finish"],
        price: 45,
        action: "Book Now",
        image: "https://images.pexels.com/photos/4489744/pexels-photo-4489744.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        title: "Dashboard Polishing",
        offer: "Up to 15% off",
        description: "Dashboard and console polish",
        rating: 4,
        reviews: 130,
        highlights: ["UV protection", "Gloss finish"],
        price: 20,
        action: "Book Now",
        image: "https://images.pexels.com/photos/1050734/pexels-photo-1050734.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
];

export default function ProductGrid() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen pt-24 px-6 text-white" style={{ backgroundColor: 'var(--bg-foundation)' }}>
            <div className="max-w-7xl mx-auto">
                <Breadcrumbs items={[{ label: 'Dashboard', link: '/customer-dashboard' }, { label: 'Services' }]} />
                <h1 className="text-3xl font-semibold mt-6 mb-8" style={{ color: 'var(--active)' }}>Available Services</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {carWashServices.map((product, index) => (
                        <div
                            key={index}
                            className="bg-[#121212] border border-[#27272a] rounded-3xl p-5 flex flex-col gap-4 transition-all hover:bg-[#18181b] hover:border-[#3f3f46] group"
                        >
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden rounded-2xl bg-[#18181b]">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Title & Desc */}
                            <div>
                                <h3 className="text-white font-bold text-lg leading-tight mb-1 truncate">
                                    {product.title}
                                </h3>
                                <p className="text-[#a1a1aa] text-xs line-clamp-2">
                                    {product.description}
                                </p>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center gap-2">
                                <div className="flex items-center text-yellow-500">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={14} fill={i < product.rating ? "currentColor" : "none"} />
                                    ))}
                                </div>
                                <span className="text-[#a1a1aa] text-xs font-medium">({product.reviews})</span>
                            </div>

                            {/* Highlights */}
                            <div className="flex flex-wrap gap-2">
                                {product.highlights.map((tag, idx) => (
                                    <span key={idx} className="bg-[#18181b] text-[var(--active)] text-[10px] px-2.5 py-1 rounded-md font-semibold border border-[#27272a]">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Price & Action */}
                            <div className="mt-auto pt-4 border-t border-[#27272a] flex items-center justify-between">
                                <div className="flex flex-col">
                                    <span className="text-[#a1a1aa] text-xs font-medium">Price from</span>
                                    <span className="text-white font-black text-2xl">₹{product.price}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => navigate('/customer-dashboard/payment')}
                                        className="px-6 py-3 rounded-2xl font-bold text-sm transition-all transform hover:scale-105"
                                        style={{ backgroundColor: 'var(--active)', color: 'var(--active-text)' }}
                                    >
                                        {product.action}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
