import { getType } from "typesafe-actions";
import { Action } from "../../types/actions";
import { getSingleArticleStarted } from "./actions";
import { GET_SINGLE_ARTICLE_DATA } from "./consts";

export type TArticle = {
  id: string;
  likes: Array<string>;
  title: string;
  text: string;
  image: string;
  createdAt: string;
  updatedAt: string;
};

export type TGetSingleArticleDataState = {
  isLoading: boolean;
  isError: string;
  singleArticleData: TArticle | null | undefined;
  likes: string;
};

export const initialState: TGetSingleArticleDataState = {
  isLoading: false,
  isError: "",
  singleArticleData: null,
  likes: "",
};

export const getSingleArticleData = (
  state = initialState,
  action: Action
): TGetSingleArticleDataState => {
  switch (action.type) {
    case getType(getSingleArticleStarted):
      return {
        ...state,
        isLoading: true,
        isError: initialState.isError,
        singleArticleData: initialState.singleArticleData,
        likes: initialState.likes,
      };
    case GET_SINGLE_ARTICLE_DATA.success:
      return {
        ...state,
        isLoading: false,
        isError: initialState.isError,
        singleArticleData: action.payload.article,
        likes: action.payload.article.likes,
      };
    case GET_SINGLE_ARTICLE_DATA.failure:
      return {
        ...state,
        isLoading: initialState.isLoading,
        isError: action.payload.error,
        singleArticleData: initialState.singleArticleData,
      };
    default:
      return { ...state };
  }
};
