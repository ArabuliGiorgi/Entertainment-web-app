import { Action } from "redux";

const userInitialState = {
    id: 0,
    email: "",
    password: "",
    bookmarks: ["", ""],
}

interface UserState {
    id: number;
    email: string;
    password: string;
    bookmarks: string[];
}

interface CreateUserState extends Action{
    type: "user/createUser";
    payload: UserState;
}

interface ChangePasswordState extends Action{
    type: "user/changePassword";
    payload: string;
}

interface ChangeBookmarksState extends Action{
    type: "user/changeBookmarks";
    payload: string[];
}

type UserActions = CreateUserState | ChangePasswordState | ChangeBookmarksState;

export default function userReducer(state: UserState = userInitialState, action: UserActions){
    switch(action.type){
        case "user/createUser":
            return {
                ...state,
                id: action.payload.id,
                email: action.payload.email,
                password: action.payload.password,
                bookmarks: action.payload.bookmarks
            };
        case "user/changePassword":
            return {
                ...state,
                password: action.payload
            };
        case "user/changeBookmarks":
            return {
                ...state,
                bookmarks: action.payload
            };
        default: 
            return state;
    }
}

export function createUser(id: number, email: string, password: string, bookmarks: string[]): CreateUserState{
    return {
        type: "user/createUser",
        payload: {id, email, password, bookmarks}
    }
}

export function changePassword(password: string): ChangePasswordState{
    return{
        type: "user/changePassword",
        payload: password
    }
}

export function changeBookmarks(bookmarks: string[]): ChangeBookmarksState{
    return{
        type: "user/changeBookmarks",
        payload: bookmarks
    }
}