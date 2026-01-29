import React from "react";

const AddVehicleCard = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center justify-center w-64 h-40 border-2 border-dashed border-[var(--secondary)] rounded-lg cursor-pointer hover:bg-[var(--hover)] transition-colors"
    >
      <div className="text-[var(--secondary)] mb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </div>
      <span className="text-white font-medium text-lg">Add Vehicle</span>
    </div>
  );
};

export default AddVehicleCard;
