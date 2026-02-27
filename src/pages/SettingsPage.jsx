import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../components/Button.jsx";
import { useGameStore } from "../store/gameStore.js";

export default function SettingsPage({ onBack }) {
    const { settings, setSettings } = useGameStore();

    const formik = useFormik({
        initialValues: settings,
        validationSchema: Yup.object({
            difficulty: Yup.string().oneOf(["easy", "medium", "hard"]).required(),
            speed: Yup.number().min(200).max(2000).required(),
            colorsCount: Yup.number().min(2).max(6).required(),
        }),
        onSubmit: (values) => {
            setSettings(values);
            alert("Налаштування збережено!");
        },
    });

    return (
        <div>
            <div className="title">Налаштування гри</div>
            <div className="card">
                <form onSubmit={formik.handleSubmit}>
                    <div className="subtitle">Рівень складності</div>
                    <select
                        name="difficulty"
                        value={formik.values.difficulty}
                        onChange={formik.handleChange}
                        style={inputStyle}
                    >
                        <option value="easy">Легкий</option>
                        <option value="medium">Середній</option>
                        <option value="hard">Складний</option>
                    </select>

                    <div className="subtitle">Швидкість (мс між кроками)</div>
                    <input
                        name="speed"
                        type="number"
                        value={formik.values.speed}
                        onChange={formik.handleChange}
                        style={inputStyle}
                    />
                    {formik.errors.speed && <div className="error">{formik.errors.speed}</div>}

                    <div className="subtitle">Кількість кольорів</div>
                    <input
                        name="colorsCount"
                        type="number"
                        value={formik.values.colorsCount}
                        onChange={formik.handleChange}
                        style={inputStyle}
                    />
                    {formik.errors.colorsCount && (
                        <div className="error">{formik.errors.colorsCount}</div>
                    )}

                    <div className="spacer" />
                    <div className="row">
                        <Button type="submit">Зберегти</Button>
                        <Button variant="ghost" onClick={onBack}>
                            Назад
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

const inputStyle = {
    width: "100%",
    padding: "10px 12px",
    borderRadius: 10,
    border: "1px solid #1f2937",
    background: "#0b1020",
    color: "var(--text)",
    marginBottom: 12,
};
