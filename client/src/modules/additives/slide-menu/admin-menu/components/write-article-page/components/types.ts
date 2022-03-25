import { ChangeEvent } from "react";

export type TValues = {
  title: string;
  text: string;
  image: string | null | File;
  selectedImage: string;
};

export type TErrors = {
  title: string;
  text: string;
  image: string | null | File;
  selectedImage: string | null | File;
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
  selectedImage: string | null | File;
};
