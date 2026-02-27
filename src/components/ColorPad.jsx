import React from "react";

const COLORS = {
    red: "var(--red)",
    blue: "var(--blue)",
    green: "var(--green)",
    yellow: "var(--yellow)",
};

const ACTIVE_COLORS = {
    red: "#ff6b6b",
    blue: "#4dabf7",
    green: "#40c057",
    yellow: "#ffd43b",
};

export default function ColorPad({
                                     color = "red",
                                     disabled = true,
                                     isActive = false,
                                     onClick
                                 }) {
    const getBackground = () => {
        if (isActive) return ACTIVE_COLORS[color] || ACTIVE_COLORS.red;
        return COLORS[color] || COLORS.red;
    };

    return (
        <button
            aria-label={`pad-${color}`}
            disabled={disabled}
            style={{
                width: 140,
                height: 140,
                borderRadius: 16,
                border: "1px solid #1f2937",
                background: getBackground(),
                opacity: disabled ? 0.6 : 1,
                cursor: disabled ? "not-allowed" : "pointer",
                boxShadow: isActive
                    ? "0 0 20px rgba(255,255,255,0.5), inset 0 0 20px rgba(0,0,0,0.1)"
                    : "inset 0 0 20px rgba(0,0,0,0.25)",
                transform: isActive ? "scale(0.95)" : "scale(1)",
                transition: "all 0.2s ease",
            }}
            onClick={onClick}
        />
    );
}