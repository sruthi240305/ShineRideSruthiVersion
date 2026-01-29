import { X, Check } from "lucide-react";

const additionalFeaturesList = [
    { id: 'analytics', name: 'Advanced Analytics', price: '+₹400/mth' },
    { id: 'support', name: '24/7 Phone Support', price: '+₹800/mth' },
    { id: 'storage', name: '1TB Extra Storage', price: '+₹600/mth' },
    { id: 'api', name: 'Dedicated API Access', price: '+₹1200/mth' },
];

export default function FeatureModal({ isOpen, onClose, planName, selectedFeatures, onToggleFeature, onSave }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            {/* Main Modal Card - Background set to black as requested */}
            <div className="border rounded-2xl p-6 w-full max-w-lg shadow-2xl transform transition-all animate-in fade-in zoom-in-95 duration-200" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--secondary)' }}>
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h3 className="text-xl font-bold text-white">Add Extra Features</h3>
                        <p className="text-sm" style={{ color: 'var(--muted)' }}>Customize your {planName}</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="transition"
                        style={{ color: 'var(--muted)' }}
                    >
                        <X size={24} />
                    </button>
                </div>

                <div className="space-y-3 mb-8">
                    {additionalFeaturesList.map((feature) => {
                        const isSelected = selectedFeatures.includes(feature.id);
                        return (
                            <div
                                key={feature.id}
                                onClick={() => onToggleFeature(feature.id)}
                                className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${isSelected
                                    ? "border-2"
                                    : ""
                                  }`}
                                style={isSelected ? { borderColor: 'var(--primary)', backgroundColor: 'var(--background)' } : { borderColor: 'var(--secondary)', backgroundColor: 'var(--surface)' }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors`} style={isSelected ? { backgroundColor: 'var(--primary)', borderColor: 'var(--primary)' } : { borderColor: 'var(--secondary)' }}>
                                        {isSelected && <Check size={12} className="text-white" />}
                                    </div>
                                    <span className="font-medium" style={{ color: 'var(--text)' }}>{feature.name}</span>
                                </div>
                                <span className="text-sm font-semibold" style={{ color: 'var(--active)' }}>{feature.price}</span>
                            </div>
                        );
                    })}
                </div>

                <div className="flex gap-3">
                    <button
                        onClick={onClose}
                        className="flex-1 py-3 rounded-xl border transition font-medium"
                        style={{ borderColor: 'var(--secondary)', color: 'var(--muted)', backgroundColor: 'var(--surface)' }}
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onSave}
                        className="flex-1 py-3 rounded-xl transition font-medium text-white shadow-lg"
                        style={{ backgroundColor: 'var(--primary)', color: 'white' }}
                    >
                        Save & Continue
                    </button>
                </div>
            </div>
        </div>
    );
}
