import { ChangeEvent } from "react";

export type TValues = {
  title: string | undefined;
  text: string | undefined;
  image: string | null | File | undefined;
  articleId: string | undefined;
};

export type TErrors = {
  title: string | undefined;
  text: string | undefined;
  image: string | null | File | undefined;
  articleId: string | undefined;
};

export type TUseFormReturningValues = {
  values: TValues;
  handleChange: (
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLSelectElement>
      | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: React.SyntheticEvent) => void;
  errors: TErrors;
  handleUploadImage: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnClick: () => void;
  selectedImage: string | null | File | undefined;
};
