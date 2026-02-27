import React from "react";
import Button from "../components/Button.jsx";
import ResultCard from "../components/ResultCard.jsx";

export default function ResultPage({ userId, result, onRestart, onBack }) {
    return (
        <div>
            <div className="title">Результати для: {userId || "анонім"}</div>
            <ResultCard
                level={result?.level ?? 0}
                score={result?.score ?? 0}
                success={result?.success ?? false}
            />

            <div className="spacer" />
            <div className="row">
                <Button onClick={onRestart}>Ще раз</Button>
                <Button variant="ghost" onClick={onBack}>
                    На старт
                </Button>
            </div>
        </div>
    );
}