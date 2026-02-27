import React from "react";

export default function ResultCard({ level = 0, score = 0, success = false }) {
    return (
        <div className="card">
            <div className="title">Результат гри</div>
            <div className="row">
                <Stat label="Рівень" value={level} />
                <Stat label="Очки" value={score} />
                <Stat label="Статус" value={success ? "Успіх" : "Спробуй ще"} />
            </div>
        </div>
    );
}

function Stat({ label, value }) {
    return (
        <div style={{ minWidth: 140 }}>
            <div className="subtitle">{label}</div>
            <div style={{ fontSize: 18, fontWeight: 700 }}>{value}</div>
        </div>
    );
}