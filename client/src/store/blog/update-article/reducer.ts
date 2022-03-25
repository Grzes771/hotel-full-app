import { UPDATE_ARTICLE_DATA, CLEAR_UPDATE_ARTICLE_DATA_STATE } from "./consts";
import { getType } from "typesafe-actions";
import { Action } from "../../types/actions";
import { updateArticleDataStarted } from "./actions";

export type TArticle = {
  _id: string;
  likes: Array<string>;
  title: string;
  text: string;
  image: string;
  createdAt: string;
  updatedAt: string;
};

export type TUpdateArticleDataState = {
  articleData: TArticle | string;
  isLoading: boolean;
  isError: string;
};

export const initialState: TUpdateArticleDataState = {
  isLoading: false,
  isError: "",
  articleData: "",
};

export const updateArticleData = (
  state = initialState,
  action: Action
): TUpdateArticleDataState => {
  switch (action.type) {
    case getType(updateArticleDataStarted):
      return {
        ...state,
        isLoading: true,
        isError: "",
      };
    case UPDATE_ARTICLE_DATA.success:
      return {
        ...state,
        articleData: action.payload.articleData,
        isLoading: false,
        isError: "",
      };
    case UPDATE_ARTICLE_DATA.failure:
      return {
        ...state,
        articleData: "",
        isLoading: false,
        isError: action.payload.error,
      };
    case CLEAR_UPDATE_ARTICLE_DATA_STATE:
      return {
        ...state,
        articleData: "",
        isLoading: false,
        isError: "",
      };
    default:
      return { ...state };
  }
};
