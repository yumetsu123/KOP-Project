import React from "react";

export default function Button({ children, variant = "primary", ...props }) {
    const base =
        "px-4 py-2 rounded-xl font-semibold transition duration-200 focus:outline-none";

    const variants = {
        primary: "bg-green-500 text-black hover:bg-green-400",
        ghost: "bg-transparent border border-gray-600 text-gray-200 hover:bg-gray-800",
    };

    return (
        <button className={`${base} ${variants[variant]}`} {...props}>
            {children}
        </button>
    );
}
