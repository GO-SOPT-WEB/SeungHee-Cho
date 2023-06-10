import { atom, RecoilState } from "recoil";

export const correctState : RecoilState<number> = atom({
    key:"correctState",
    default:0,
});

export const allState : RecoilState<number> = atom({
    key:"allState",
    default:5,
});

export const successState : RecoilState<boolean> = atom({
    key:"successState",
    default:false,
});