import { createActionType } from "../../types/actions";

export const CREATE_ARTICLE = createActionType("CREATE_ARTICLE");
export const GET_ARTICLES = createActionType("GET_ARTICLES");
export const CLEAR_CREATE_ARTICLE_STATE = "CLEAR_CREATE_ARTICLE_STATE";
export const SOMETHING_WENT_WRONG = "Something went wrong - please try again";
export const ERROR = "error";
