export const IMAGE_ARTICLE_TITLE = "Wybierz zdjęcie";
export const IMAGE_ALT = "not found";
export const IMAGE_WIDTH = "250px";
export const IMAGE_SRC = (selectedImage: string | File) =>
  `data:image/jpeg;base64,${selectedImage}`;
export const INPUT_FILE_TYPE = "file";
export const INPUT_FILE_NAME = "image";

export const BUTTON_SUBMIT_TYPE = "submit";
export const BUTTON_SUBMIT_LABEL = "Opublikuj";
export const E_KEY = "Enter";

//TITLE INPUT

export const INPUT_TITLE_PLACEHOLDER = "Tytuł";
export const INPUT_TITLE_TYPE = "text";
export const INPUT_TITLE_NAME = "title";

//TITLE TEXTAREA

export const TEXTAREA_PLACEHOLDER = "Wpisz tekst...";
export const TEXTAREA_DATA_TYPE = "text";
export const TEXTAREA_NAME = "text";

//VALIDATE INFO ERRORS

export const ERROR_IMAGE = "Dodaj zdjęcie";
export const ERROR_TITLE = "Dodaj tytuł";
export const ERROR_TEXT = "Wpisz treść artykułu";
