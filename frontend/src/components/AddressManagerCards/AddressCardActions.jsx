export default function AddressCardActions({ address, onEdit, onRemove, onSetDefault }) {
    return (
        <div className="flex items-center gap-4 pt-5" style={{ borderTop: '1px solid #a855f7' }}>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    onEdit(address);
                }}
                className="text-sm hover:underline text-white"
                style={{ background: 'transparent', border: 'none' }}
            >
                Edit
            </button>

            <span className="text-white">|</span>

            <button
                onClick={(e) => {
                    e.preventDefault();
                    onRemove(address);
                }}
                className="text-sm hover:underline text-white"
                style={{ background: 'transparent', border: 'none' }}
            >
                Remove
            </button>

            {!address.isDefault && (
                <>
                    <span className="text-white">|</span>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            onSetDefault(address.id);
                        }}
                        className="text-sm hover:underline text-white"
                        style={{ background: 'transparent', border: 'none' }}
                    >
                        Set as Default
                    </button>
                </>
            )}
        </div>
    );
}