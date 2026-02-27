import React from "react";
import { createPortal } from "react-dom";
import Button from "./Button.jsx";

export default function ModalPortal({ open, result, onRestart, onExit }) {
    if (!open) return null;

    return createPortal(
        <div style={overlayStyle}>
            <div style={modalStyle}>
                <div className="title">Гру завершено</div>
                <div className="subtitle">
                    Рівень: {result.level} | Очки: {result.score} |{" "}
                    {result.success ? "Успіх" : "Спробуй ще"}
                </div>
                <div className="row">
                    <Button onClick={onRestart}>Заново</Button>
                    <Button variant="ghost" onClick={onExit}>
                        На старт
                    </Button>
                </div>
            </div>
        </div>,
        document.body
    );
}

const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
};

const modalStyle = {
    background: "#0b1020",
    border: "1px solid #1f2937",
    borderRadius: 12,
    padding: 24,
    width: "90%",
    maxWidth: 400,
};
