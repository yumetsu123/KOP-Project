import React, { useState } from "react";
import StartPage from "./pages/StartPage.jsx";
import GamePage from "./pages/GamePage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";
import ResultsTablePage from "./pages/ResultsTablePage.jsx";
import CookieConsent from "react-cookie-consent";

export default function App() {
    const [page, setPage] = useState("start");
    const [userId, setUserId] = useState("");

    const goToStart = () => setPage("start");
    const goToSettings = () => setPage("settings");
    const goToResults = () => setPage("results");
    const startGame = (id) => {
        setUserId(id);
        setPage("game");
    };

    return (
        <div className="app">
            {page === "start" && (
                <StartPage
                    onStart={startGame}
                    onSettings={goToSettings}
                    onResults={goToResults}
                />
            )}
            {page === "settings" && <SettingsPage onBack={goToStart} />}
            {page === "game" && (
                <GamePage userId={userId} onExit={goToStart} onFinish={goToResults} />
            )}
            {page === "results" && <ResultsTablePage onBack={goToStart} />}

            <CookieConsent
                location="bottom"
                buttonText="Accept"
                declineButtonText="Reject"
                enableDeclineButton
                cookieName="simonGameConsent"
                expires={150}
                style={{ background: "#1e1e1e" }}
                buttonStyle={{ background: "green", color: "white" }}
                declineButtonStyle={{ background: "red", color: "white" }}
            >
                This application uses cookies and localStorage to store game progress.
                No personal data is collected.
            </CookieConsent>
        </div>
    );
}
