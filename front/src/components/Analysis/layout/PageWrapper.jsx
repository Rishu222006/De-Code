import React from "react";

export default function PageWrapper({ children }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-[#0b0f14] to-black text-white p-6">
            {children}
        </div>
    );
};
