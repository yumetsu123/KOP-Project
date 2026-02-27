
export const createResultsSlice = (set, get) => ({
    results: JSON.parse(localStorage.getItem("gameResults")) || [],

    addResult: (userId, result) => {
        const newResult = {
            id: Date.now(),
            userId,
            ...result,
        };

        const updated = [...get().results, newResult];
        set({ results: updated });
        localStorage.setItem("gameResults", JSON.stringify(updated));
    },

    clearResults: () => {
        set({ results: [] });
        localStorage.removeItem("gameResults");
    },
});
