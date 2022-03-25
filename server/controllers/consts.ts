//AUTH CONTROLLER

const EMAIL_IN_USE = "Ten email już jest zajęty";
const EXPIRES_IN_60 = "60m";
const EXPIRES_IN_10 = "10m";
const ACCOUNT_CREATE_SUCCESS = "Konto zostało założone";
const USER_USERNAME_NOT_EXIST = "Użytkownik z tą nazwą nie istnieje";
const YOURE_NOT_LOGGED = "Nie jestes zalogowany!";
const INVALID_PASSWORD = "Niepoprawne hasło";
const SESSION_EXPIRED = "Sesja wygasła, zaloguj się ponownie";
const SOMETHING_WENT_WRONG = "Coś poszło nie tak, spróbuj ponownie";
const USER_EMAIL_NOT_EXIST = "Użytkownik z tym emailem nie istnieje";
const NODEMAILER_SERVICE_EMAIL = "gmail";
const LINK_RESET_TITLE = `Link do zresetowania hasła`;
const INTERNAL_SERVER_ERROR = "Internal server error - spróbuj ponownie";
const UPDATE_ERROR = "Błąd aktualizacji, spróbuj ponownie";
const UPDATE_SUCCESS = "Dane zaktualizowane poprawnie";
const ReturnEmailSent = (email) =>
  `Email has been sent to ${email} - follow the instruction to activate your account`;

const ReturnEmailContent = (token) =>
  `
                    <h1>Please use the following link to reset your password</h1>
                    <p>${process.env.CLIENT_URL}/reset-password/${token}</p>
                    <hr />
                    <p>This email may contain sensitive information</p>
                    <p>${process.env.CLIENT_URL}</p>
                `;
//RESERVATION CONTROLLER

const RESERVATION_BUSY = "Ten termin jest już zajęty";
const RESERVATION_SUCCESS = "Rezerwacja wykonana pomyślnie";
const USER_ROLE = "user";

//HOOKS

const USER_NOT_FOUND = "User not found";

//BLOG ARTICLES

const ARTICLE_CREATED = "Stworzono nowy artykuł";
const LIKE_DELETED = "Like deleted from comment.";
const LIKE_ADDED = "Like added to article.";
const ARTICLE_NOT_FOUND = "Article not found - please try again.";

//COMMENTS

const COMMENT_NOT_FOUND = "Comment not found - please try again.";
const COMMENT_ADDED = "Skomentowano!";
module.exports = {
  EMAIL_IN_USE,
  EXPIRES_IN_60,
  EXPIRES_IN_10,
  ACCOUNT_CREATE_SUCCESS,
  USER_USERNAME_NOT_EXIST,
  INVALID_PASSWORD,
  SESSION_EXPIRED,
  SOMETHING_WENT_WRONG,
  USER_EMAIL_NOT_EXIST,
  NODEMAILER_SERVICE_EMAIL,
  LINK_RESET_TITLE,
  INTERNAL_SERVER_ERROR,
  UPDATE_ERROR,
  UPDATE_SUCCESS,
  RESERVATION_BUSY,
  RESERVATION_SUCCESS,
  USER_ROLE,
  USER_NOT_FOUND,
  ReturnEmailSent,
  ReturnEmailContent,
  ARTICLE_CREATED,
  LIKE_DELETED,
  LIKE_ADDED,
  ARTICLE_NOT_FOUND,
  COMMENT_NOT_FOUND,
  YOURE_NOT_LOGGED,
  COMMENT_ADDED,
};
