export default function Divider({ label = "Continue" }) {
    return (
        <div className="w-full flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-700 to-gray-700" />
            <span className="text-sm text-gray-400 whitespace-nowrap">
                {label}
            </span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gray-700 to-gray-700" />
        </div>
    );
}
