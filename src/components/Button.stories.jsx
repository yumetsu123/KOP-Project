import Button from "./Button";

export default {
    title: "UI/Button",
    component: Button,
    tags: ["autodocs"],
};

export const Primary = {
    args: {
        children: "Primary Button",
        variant: "primary",
    },
};

export const Ghost = {
    args: {
        children: "Ghost Button",
        variant: "ghost",
    },
};