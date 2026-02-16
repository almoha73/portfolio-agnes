import React from "react";

const Spinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-50 z-[100]">
      <div className="relative w-20 h-20">
        <div className="absolute w-full h-full border-4 border-slate-100 rounded-full"></div>
        <div className="absolute w-full h-full border-4 border-primary-600 rounded-full border-t-transparent animate-spin"></div>
      </div>
    </div>
  );
};

export default Spinner;

