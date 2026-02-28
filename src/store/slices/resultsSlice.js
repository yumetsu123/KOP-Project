/**
 * Creates results slice for Zustand store.
 *
 * Responsible for:
 * - Storing game results
 * - Persisting them in localStorage
 * - Adding new results
 * - Clearing all results
 *
 * @param {Function} set Zustand set function
 * @param {Function} get Zustand get function
 *
 * @returns {Object} Results slice object
 */
export const createResultsSlice = (set, get) => ({
    /**
     * Array of stored game results.
     * Loaded from localStorage on initialization.
     *
     * @type {Array<Object>}
     */
    results: JSON.parse(localStorage.getItem("gameResults")) || [],

    /**
     * Adds a new game result.
     * Automatically assigns unique id based on timestamp
     * and persists updated results to localStorage.
     *
     * @param {string} userId Player identifier
     * @param {Object} result Game result object
     * @param {number} result.level Level reached
     * @param {number} result.score Score achieved
     * @param {boolean} result.success Whether player won
     */
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

    /**
     * Clears all stored game results
     * and removes them from localStorage.
     */
    clearResults: () => {
        set({ results: [] });
        localStorage.removeItem("gameResults");
    },
});