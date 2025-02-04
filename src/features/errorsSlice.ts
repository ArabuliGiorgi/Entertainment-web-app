import { Action } from "redux";

const errorInitialState = {
    emailError: "",
    passwordError: ["", ""]
}

interface ErrorState{
    emailError: string,
    passwordError: string[]
}

interface setEmailError extends Action{
    type: "error/setEmailError";
    payload: string
}

interface setPasswordError extends Action{
    type: "error/setPasswordError";
    payload: string
}

interface setRepeatPasswordError extends Action{
    type: "error/setRepeatPasswordError";
    payload: string
}

type ErrorActions = setEmailError | setPasswordError | setRepeatPasswordError;

export default function errorReducer(state: ErrorState = errorInitialState, action: ErrorActions){
    switch(action.type){
        case "error/setEmailError":
            return {
                ...state,
                emailError: action.payload
            }
        case "error/setPasswordError":
            return {
                ...state,
                passwordError: [action.payload, state.passwordError[1]]
            }
        case "error/setRepeatPasswordError":
            return{
                ...state,
                passwordError: [state.passwordError[0], action.payload]
            }
        default: return state;
    }
}

export function setEmailErr(str: string): setEmailError{
    return {
        type: "error/setEmailError",
        payload: str
    }
}

export function setPassErr(str: string): setPasswordError{
    return{
        type: "error/setPasswordError",
        payload: str
    }
}

export function setRepPassErr(str: string): setRepeatPasswordError{
    return{
        type: "error/setRepeatPasswordError",
        payload: str
    }
}