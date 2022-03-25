export type TValues = {
  commentText: string;
};

export type TTouched = Record<keyof TValues, boolean> & {
  commentText: boolean;
};

export type TSelectOptions = { value: string; label: string };
