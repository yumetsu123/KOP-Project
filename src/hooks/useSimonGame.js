import { useState, useEffect } from "react";
import { useGameStore } from "../store/gameStore";

export const useSimonGame = () => {
    const { settings } = useGameStore();

    const [sequence, setSequence] = useState([]);
    const [userSequence, setUserSequence] = useState([]);
    const [level, setLevel] = useState(1);
    const [isGameOver, setIsGameOver] = useState(false);
    const [isShowingSequence, setIsShowingSequence] = useState(false);
    const [activeColor, setActiveColor] = useState(null);

    const baseColors = ["red", "blue", "green", "yellow", "orange", "purple"];
    const colors = baseColors.slice(0, settings.colorsCount);

    const difficultyMultiplier =
        settings.difficulty === "hard"
            ? 0.6
            : settings.difficulty === "medium"
                ? 0.8
                : 1;

    const delay = (ms) => new Promise((res) => setTimeout(res, ms));

    const playSequence = async () => {
        setIsShowingSequence(true);
        for (let i = 0; i < sequence.length; i++) {
            const color = sequence[i];
            setActiveColor(color);
            await delay(settings.speed * difficultyMultiplier);
            setActiveColor(null);
            await delay(300);
        }
        setIsShowingSequence(false);
    };

    const addStep = (steps = 1) => {
        setSequence((prev) => {
            const newSteps = Array.from({ length: steps }, () => {
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                return randomColor;
            });
            return [...prev, ...newSteps];
        });
    };

    const handleUserClick = (color) => {
        if (isShowingSequence || isGameOver) return;

        const newSequence = [...userSequence, color];
        setUserSequence(newSequence);

        for (let i = 0; i < newSequence.length; i++) {
            if (newSequence[i] !== sequence[i]) {
                setIsGameOver(true);
                return;
            }
        }

        if (newSequence.length === sequence.length) {
            setLevel((l) => l + 1);
            setUserSequence([]);
            addStep(settings.difficulty === "hard" ? 2 : 1);
        }
    };

    const resetGame = () => {
        setSequence([]);
        setUserSequence([]);
        setLevel(1);
        setIsGameOver(false);
        setActiveColor(null);
        addStep(1);
    };

    useEffect(() => {
        if (sequence.length > 0 && !isShowingSequence) {
            playSequence();
        }
    }, [sequence]);

    return {
        sequence,
        level,
        isGameOver,
        isShowingSequence,
        activeColor,
        handleUserClick,
        addStep,
        resetGame,
    };
};
