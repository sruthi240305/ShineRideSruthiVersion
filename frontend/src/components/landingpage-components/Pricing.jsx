import { useState } from "react";
import { Check, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import FeatureModal from "./FeatureModal";

const plans = [
    {
        name: "Basic plan",
        price: "₹800/mth",
        description: "Billed annually.",
        features: [
            "Access to all basic features",
            "Basic reporting and analytics",
            "Up to 10 individual users",
            "20 GB individual data",
            "Basic chat and email support",
        ],
    },
    {
        name: "Business plan",
        price: "₹1600/mth",
        description: "Billed annually.",
        features: [
            "200+ integrations",
            "Advanced reporting and analytics",
            "Up to 20 individual users",
            "40 GB individual data",
            "Priority chat and email support",
        ],
        highlighted: true,
    },
    {
        name: "Enterprise plan",
        price: "₹3200/mth",
        description: "Billed annually.",
        features: [
            "Advanced custom fields",
            "Audit log and data history",
            "Unlimited individual users",
            "Unlimited individual data",
            "Personalized + priority service",
        ],
    },
];

export default function Pricing() {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPlanDetails, setSelectedPlanDetails] = useState(null);
    const [selectedFeatures, setSelectedFeatures] = useState([]);

    const openFeatureModal = (plan) => {
        setSelectedPlanDetails(plan);
        setSelectedFeatures([]);
        setIsModalOpen(true);
    };

    const toggleFeature = (featureId) => {
        if (selectedFeatures.includes(featureId)) {
            setSelectedFeatures(selectedFeatures.filter(id => id !== featureId));
        } else {
            setSelectedFeatures([...selectedFeatures, featureId]);
        }
    };

    const handleSaveFeatures = () => {
        setIsModalOpen(false);
        // Add post-save logic here if needed
    };

    return (
        <section className="text-white py-20 px-6 relative" style={{ backgroundColor: 'var(--bg-foundation)' }}>
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="mb-14">
                    <p className="text-sm text-purple-400 mb-2">Pricing</p>
                    <h2 className="text-4xl font-semibold mb-4">
                        Simple, transparent pricing
                    </h2>
                    <p className="text-gray-400 max-w-xl">
                        We believe Untitled should be accessible to all companies, no matter
                        the size.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className="rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900/40 to-black p-8 flex flex-col transition-transform duration-300 hover:-translate-y-2"
                        >
                            {/* Icon */}
                            <div className="w-10 h-10 rounded-full bg-gray-700/20 flex items-center justify-center mb-4">
                                <div className="w-5 h-5 rounded-full bg-gray-500" />
                            </div>

                            {/* Plan Name */}
                            <h3 className="text-lg font-medium mb-2">{plan.name}</h3>

                            {/* Price */}
                            <div className="mb-6">
                                <span className="text-4xl font-semibold">{plan.price}</span>
                                <p className="text-sm text-gray-400 mt-1">
                                    {plan.description}
                                </p>
                            </div>

                            {/* Features */}
                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm">
                                        <span className="mt-1 flex items-center justify-center w-5 h-5 rounded-full bg-purple-600/20">
                                            <Check size={14} className="text-purple-400" />
                                        </span>
                                        <span className="text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTAs */}
                            <div className="space-y-3 mt-auto">
                                <button
                                    onClick={() => navigate("/login")}
                                    className="w-full py-2.5 rounded-lg transition font-medium"
                                    style={{ backgroundColor: 'var(--active)', color: 'var(--active-text)' }}
                                >
                                    Get started
                                </button>
                                <button
                                    onClick={() => openFeatureModal(plan)}
                                    className="w-full py-2.5 rounded-lg transition font-medium flex items-center justify-center gap-2"
                                    style={{ backgroundColor: 'var(--hover)', color: 'var(--active)', border: '1px solid var(--secondary)' }}
                                >
                                    <Plus size={20} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Feature Modal Component */}
            <FeatureModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                planName={selectedPlanDetails?.name}
                selectedFeatures={selectedFeatures}
                onToggleFeature={toggleFeature}
                onSave={handleSaveFeatures}
            />
        </section>
    );
}
