import ResultCard from "./ResultCard";

export default {
    title: "Game/ResultCard",
    component: ResultCard,
};

export const Success = {
    args: {
        level: 5,
        score: 120,
        success: true,
    },
};

export const Failed = {
    args: {
        level: 3,
        score: 45,
        success: false,
    },
};