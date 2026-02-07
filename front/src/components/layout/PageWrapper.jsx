import React from "react";

export default function PageWrapper({ children }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-white p-6">
            {children}
        </div>
    );
};
