import React from "react";
import ColorPad from "./ColorPad.jsx";
import { useGameStore } from "../store/gameStore";

export default function GameBoard({
                                      disabled = true,
                                      isShowingSequence = false,
                                      activeColor = null,
                                      onPadClick = () => {},
                                  }) {
    const { settings } = useGameStore();

    const baseColors = ["red", "blue", "green", "yellow", "orange", "purple"];
    const gameColors = baseColors.slice(0, settings.colorsCount);

    return (
        <div>
            <div className="title">Поле гри</div>
            <div className="subtitle">
                {isShowingSequence ? "Запам'ятай послідовність..." : "Твоя черга!"}
            </div>

            <div className="grid">
                {gameColors.map((color) => (
                    <ColorPad
                        key={color}
                        color={color}
                        disabled={disabled || isShowingSequence}
                        isActive={activeColor === color}
                        onClick={() => onPadClick(color)}
                    />
                ))}
            </div>
        </div>
    );
}
