import React from "react";
import ColorPad from "./ColorPad.jsx";
import { useGameStore } from "../store/gameStore";

/**
 * GameBoard component renders the main interactive grid
 * of color pads used in the Simon Game.
 *
 * It dynamically adjusts the number of displayed colors
 * based on user settings and controls interaction state.
 *
 * @component
 * @param {Object} props Component props
 * @param {boolean} [props.disabled=true] Disables all pads
 * @param {boolean} [props.isShowingSequence=false] Indicates whether the sequence is currently playing
 * @param {string|null} [props.activeColor=null] Currently highlighted color
 * @param {(color: string) => void} [props.onPadClick] Callback triggered when a pad is clicked
 *
 * @returns {JSX.Element} Rendered game board
 */
export default function GameBoard({
    disabled = true,
    isShowingSequence = false,
    activeColor = null,
    onPadClick = () => {},
}) {
    const { settings } = useGameStore();

    /**
     * Base available colors.
     * @type {string[]}
     */
    const baseColors = ["red", "blue", "green", "yellow", "orange", "purple"];

    /**
     * Active colors depending on settings.
     * @type {string[]}
     */
    const gameColors = baseColors.slice(0, settings.colorsCount);

    return (
        <div>
            <div className="title">Поле гри</div>

            <div className="subtitle">
                {isShowingSequence
                    ? "Запам'ятай послідовність..."
                    : "Твоя черга!"}
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