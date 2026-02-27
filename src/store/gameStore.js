import { create } from "zustand";
import { createSettingsSlice } from "./slices/settingsSlice";
import { createResultsSlice } from "./slices/resultsSlice";

export const useGameStore = create((set, get) => ({
    ...createSettingsSlice(set, get),
    ...createResultsSlice(set, get),
}));
