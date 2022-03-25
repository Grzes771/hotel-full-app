export const IMG_SRC = (imageLabel: string | undefined) =>
  `data:image/jpg;base64,${imageLabel}`;
export const ADMIN_ROLE = "admin";
export const EDIT_LINK = (articleId: string | undefined) =>
  `/blog/update/${articleId}`;

export const LIKE_LABEL = "Poleć artykuł innym";
export const STYLED_LINK_LABEL = "Edytuj";
