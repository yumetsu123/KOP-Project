import React from "react";

/**
 * Reusable Button component with variant styling.
 *
 * Supports predefined visual variants and forwards
 * additional props to the native HTML button element.
 *
 * @component
 * @param {Object} props Component props
 * @param {React.ReactNode} props.children Button content
 * @param {"primary"|"ghost"} [props.variant="primary"] Visual style variant
 * @param {Object} props.rest Additional native button props
 *
 * @returns {JSX.Element} Styled button element
 */
export default function Button({
    children,
    variant = "primary",
    ...props
}) {
    /**
     * Base Tailwind CSS classes.
     * @type {string}
     */
    const base =
        "px-4 py-2 rounded-xl font-semibold transition duration-200 focus:outline-none";

    /**
     * Variant-specific styles.
     * @type {Record<string, string>}
     */
    const variants = {
        primary: "bg-green-500 text-black hover:bg-green-400",
        ghost:
            "bg-transparent border border-gray-600 text-gray-200 hover:bg-gray-800",
    };

    return (
        <button className={`${base} ${variants[variant]}`} {...props}>
            {children}
        </button>
    );
}