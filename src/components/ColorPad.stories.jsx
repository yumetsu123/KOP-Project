import ColorPad from "./ColorPad";

export default {
    title: "Game/ColorPad",
    component: ColorPad,
};

export const Active = {
    args:{
        color:"red",
        isActive:true,
        disabled:false,
    },
};

export const Disabled = {
    args: {
        color: "blue",
        isActive: false,
        disabled: true,
    },
};