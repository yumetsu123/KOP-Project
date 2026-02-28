import React from "react";

/**
 * Displays the final game results including level,
 * score and success status.
 *
 * @component
 * @param {Object} props Component props
 * @param {number} [props.level=0] Final level reached
 * @param {number} [props.score=0] Final score achieved
 * @param {boolean} [props.success=false] Indicates whether the player won
 *
 * @returns {JSX.Element} Result summary card
 */
export default function ResultCard({
    level = 0,
    score = 0,
    success = false,
}) {
    return (
        <div className="card">
            <div className="title">Результат гри</div>
            <div className="row">
                <Stat label="Рівень" value={level} />
                <Stat label="Очки" value={score} />
                <Stat
                    label="Статус"
                    value={success ? "Успіх" : "Спробуй ще"}
                />
            </div>
        </div>
    );
}

/**
 * Small reusable statistic display block.
 *
 * @component
 * @param {Object} props Component props
 * @param {string} props.label Label of the statistic
 * @param {string|number} props.value Value of the statistic
 *
 * @returns {JSX.Element} Statistic display element
 */
function Stat({ label, value }) {
    return (
        <div style={{ minWidth: 140 }}>
            <div className="subtitle">{label}</div>
            <div style={{ fontSize: 18, fontWeight: 700 }}>
                {value}
            </div>
        </div>
    );
}