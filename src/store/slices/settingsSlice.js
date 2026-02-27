const DEFAULT_SETTINGS = {
    difficulty: "easy",
    speed: 1000,
    colorsCount: 4,
};

export const createSettingsSlice = (set) => ({
    settings: JSON.parse(localStorage.getItem("gameSettings")) || DEFAULT_SETTINGS,

    setSettings: (newSettings) => {
        set({ settings: newSettings });
        localStorage.setItem("gameSettings", JSON.stringify(newSettings));
    },
});