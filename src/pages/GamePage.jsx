import React, { useEffect, useState } from "react";
import Button from "../components/Button.jsx";
import GameBoard from "../components/GameBoard.jsx";
import { useSimonGame } from "../hooks/useSimonGame.js";
import { useGameStore } from "../store/gameStore.js";
import ModalPortal from "../components/ModalPortal.jsx";

export default function GamePage({ userId, onExit, onFinish }) {
    const {
        sequence,
        level,
        isGameOver,
        isShowingSequence,
        activeColor,
        addStep,
        handleUserClick,
        resetGame,
    } = useSimonGame();

    const { settings, addResult } = useGameStore();
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        resetGame();
    }, []);

    useEffect(() => {
        if (isGameOver) {
            setShowModal(true);
            addResult(userId, { level, score: level * 10, success: false });
        }
    }, [isGameOver]);

    const handleRestart = () => {
        setShowModal(false);
        resetGame();
    };

    const handleFinish = () => {
        setShowModal(false);
        const result = { level, score: level * 10, success: !isGameOver };
        addResult(userId, result);
        onFinish(result);
    };

    return (
        <div>
            <div className="title">Гра для: {userId || "анонім"}</div>
            <div className="subtitle">
                Рівень: {level} | Складність: {settings.difficulty} | Швидкість:{" "}
                {settings.speed}мс | Кольорів: {settings.colorsCount}
            </div>

            <GameBoard
                disabled={false}
                isShowingSequence={isShowingSequence}
                activeColor={activeColor}
                onPadClick={handleUserClick}
            />

            <div className="spacer" />
            <div className="row">
                <Button variant="ghost" onClick={onExit}>
                    На старт
                </Button>
                <Button onClick={handleFinish}>Завершити гру</Button>
            </div>

            <ModalPortal
                open={showModal}
                result={{ level, score: level * 10, success: !isGameOver }}
                onRestart={handleRestart}
                onExit={onExit}
            />
        </div>
    );
}
