import { Check } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OrderTracking() {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  // Define steps
  // We determine 'active' based on current progress.
  const steps = [
    { label: "Ordered", position: 0 },
    { label: "Shipped", position: 33 },
    { label: "Out for delivery", position: 66 },
    { label: "Delivered", position: 100 },
  ];

  useEffect(() => {
    let animationFrameId;
    const duration = 6000; // 6 seconds to fill
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      if (elapsed < duration) {
        const currentProgress = (elapsed / duration) * 100;
        setProgress(currentProgress);
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setProgress(100);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="p-6 rounded-3xl w-full bg-[#121212] border border-[#27272a]">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white">Arriving Sunday</h2>
        <button className="text-sm font-bold hover:text-white transition-colors text-[#a1a1aa]">See all orders</button>
      </div>

      {/* Status Title */}
      <h3 className="text-center font-bold text-lg mb-8 text-white">
        {progress < 33 ? "Ordered" :
          progress < 66 ? "Shipped" :
            progress < 99 ? "Out for Delivery" : "Delivered"}
      </h3>

      {/* Progress Bar Container - Relative to this block */}
      <div className="relative mb-12 px-4">
        {/* We use a specific layout for the bar that sits BEHIND the steps. 
            The steps need to be distributed evenly. 
            So we create a container for the steps and the bar fits within it.
        */}

        <div className="relative">
          {/* The Bar Background */}
          <div className="absolute left-0 right-0 top-3 h-1 bg-[#27272a]" />

          {/* The Active Bar */}
          <div
            className="absolute left-0 top-3 h-1 bg-white transition-all duration-75 ease-linear"
            style={{ width: `${progress}%` }}
          />

          {/* Steps Flex Container */}
          <div className="relative flex justify-between items-start w-full z-10">
            {steps.map((step, i) => {
              const isActive = progress >= step.position;
              // Logic to ensure the previous steps stay active
              // We assume ordered is 0, shipped is 33, etc.
              // If progress is 50, Ordered(0) and Shipped(33) are active.

              return (
                <div key={i} className="flex flex-col items-center w-20">
                  {/* Circle */}
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center border-2 transition-all duration-300 bg-[#121212] ${isActive
                      ? "border-white text-black scale-110"
                      : "border-[#27272a] text-transparent"
                      }`}
                    style={{ backgroundColor: isActive ? 'white' : '#121212' }}
                  >
                    <Check size={14} className={isActive ? "opacity-100 text-black" : "opacity-0"} />
                  </div>
                  {/* Label */}
                  <span className={`text-xs font-bold mt-3 text-center transition-colors duration-300 ${isActive ? 'text-white' : 'text-[#52525b]'}`}>
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="border border-[#27272a] rounded-2xl p-4 bg-[#18181b]">
          <h4 className="font-bold mb-2 text-white">Shipped with Amazon</h4>
          <p className="text-sm mb-3 text-[#a1a1aa]">Tracking ID: 366829163358</p>
          <div className="flex flex-col gap-2">
            <button className="text-sm font-semibold text-white hover:underline text-left">See all updates</button>
            <button
              onClick={() => navigate('/customer-dashboard/yourprofile/addresses?highlight=1')}
              className="text-sm font-semibold text-white hover:underline text-left"
            >
              Update delivery instructions
            </button>
          </div>
        </div>

        <div className="border border-[#27272a] rounded-2xl p-4 bg-[#18181b]">
          <h4 className="font-bold mb-2 text-white">Shipping Address</h4>
          <p className="text-sm leading-relaxed text-[#a1a1aa]">
            Tanya Sri <br />
            31/8a Anand Illam Thiru Murugan Nagar, <br />
            Vadavalli <br />
            Coimbatore, Tamil Nadu 641041
          </p>
        </div>

        <div className="border border-[#27272a] rounded-2xl p-4 bg-[#18181b]">
          <h4 className="font-bold mb-2 text-white">Order Info</h4>
          <button
            onClick={() => navigate('/customer-dashboard/yourprofile/orders/1/details')}
            className="text-sm font-semibold text-white hover:underline"
          >
            View order details
          </button>
        </div>
      </div>
    </div>
  );
}
