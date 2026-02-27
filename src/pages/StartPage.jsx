import React, { useState } from "react";
import Button from "../components/Button.jsx";

export default function StartPage({ onStart, onSettings, onResults }) {
    const [id, setId] = useState("");

    return (
        <div className="title text-center">
            <h1>🎮 Simon Says</h1>
            <input
                placeholder="Введіть ім'я або ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
                style={{
                    marginTop: 20,
                    padding: 10,
                    borderRadius: 8,
                    background: "#0b1020",
                    color: "white",
                    border: "1px solid #222",
                }}
            />
            <div className="spacer" />
            <Button onClick={() => onStart(id || "Анонім")}>Почати гру</Button>

            <div className="spacer" />
            <div className="row" style={{ justifyContent: "center", gap: 10 }}>
                <Button variant="ghost" onClick={onSettings}>
                    Налаштування
                </Button>
                <Button variant="ghost" onClick={onResults}>
                    Результати
                </Button>
            </div>
        </div>
    );
}
