import React from "react";
import { useGameStore } from "../store/gameStore.js";
import Button from "../components/Button.jsx";

export default function ResultsTablePage({ onBack }) {
    const { results, clearResults } = useGameStore();

    return (
        <div>
            <div className="title">Таблиця результатів</div>

            {results.length === 0 ? (
                <div className="subtitle">Поки що немає результатів</div>
            ) : (
                <table style={tableStyle}>
                    <thead>
                    <tr>
                        <th>ID користувача</th>
                        <th>Рівень</th>
                        <th>Очки</th>
                        <th>Статус</th>
                    </tr>
                    </thead>
                    <tbody>
                    {results.map((r) => (
                        <tr key={r.id}>
                            <td>{r.userId}</td>
                            <td>{r.level}</td>
                            <td>{r.score}</td>
                            <td>{r.success ? "✅" : "❌"}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}

            <div className="spacer" />
            <div className="row">
                <Button onClick={onBack}>Назад</Button>
                <Button variant="ghost" onClick={clearResults}>
                    Очистити таблицю
                </Button>
            </div>
        </div>
    );
}

const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: 16,
};
