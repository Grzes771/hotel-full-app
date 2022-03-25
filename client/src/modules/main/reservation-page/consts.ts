export const CLASS_NAME = "sectionFormComponentHalf";

export const START_DATE_ID = "startDate";
export const END_DATE_ID = "endDate";
export const USERNAME_ID = "username";
export const PHONE_ID = "phone";

export const START_DATE_LABEL = "Data przyjazdu";
export const END_DATE_LABEL = "Data odjazdu";
export const USERNAME_LABEL = "Imię i nazwisko";
export const PHONE_LABEL = "Numer telefonu";

export const START_DATE_PLACEHOLDERF = "Wybierz dzień przyjazdu";
export const END_DATE_PLACEHOLDERF = "Wybierz dzień odjazdu";
export const USERNAME_PLACEHOLDER = "Wpisz imię i nazwisko";
export const PHONE_PLACEHOLDER = "Wpisz numer tel";

export const ACCOMMODATION_PLACEHOLDER = "Wybierz rodzaj";

export const BUTTON_TYPE_SUBMIT = "submit";
export const BUTTON_LABEL_SUBMIT = "Rezerwuj";
export const BUTTON_TYPE_BUTTON = "button";
export const BUTTON_LABEL_BUTTON = "Anuluj";

const OPTION_NUMBERS = ["Wybierz ilość miejsc", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const VALUES_OPTIONS = OPTION_NUMBERS.map((number) => ({
  value: number.toString(),
  label: number.toString(),
}));

export const PLACES_AMOUNT_OPTIONS = [...VALUES_OPTIONS];

export const ACCOMMODATION_OPTION = [
  { value: "", label: ACCOMMODATION_PLACEHOLDER },
  { value: "domek", label: "Domek letniskowy" },
  { value: "pokoje", label: "Pokoje" },
];

export const INITIAL_VALUES = {
  username: "",
  phone: "",
  amount: "",
  accommodationType: "",
};

export const ERRORS_INITIAL_VALUES = {
  username: "",
  phone: "",
  amount: "",
  accommodationType: "",
  startDate: "",
  endDate: "",
};

export const TOUCHED_INITIAL_VALUES = {
  username: false,
  phone: false,
  amount: false,
  accommodationType: false,
  startDate: false,
  endDate: false,
};

export const TYPE_TEXT = "text";
export const TYPE_PHONE = "phone";

export const ENTER_DATE = "Wprowadź datę";
export const REQUIRED_FIELD = "Wprowadź dane";

export const TITLE_DATA_ID = "amount";
export const TITLE_DATA_LABEL = "Ilość miejsc";
export const TITLE_DATA_PLACEHOLDER = "Liczba miejsc";

export const TITLE_ACCOMMODATION_TYPE_ID = "accommodationType";
export const TITLE_ACCOMMODATION_TYPE_LABEL = "Rodzaj noclegów";
export const TITLE_ACCOMMODATION_TYPE_PLACEHOLDER = "Wybierz rodzaj lokalu";

export const ERROR_USERNAME = "Wpisz imię i nazwisko";
export const ERROR_PHONE = "Wpisz numer telefonu";
export const ERROR_PHONE_LENGTH = "Numer musi zawierać min 9 cyfr";
export const ERROR_AMOUNT = "Wybierz ilość gości";
export const FIELDS_NOT_FILLED = "Uzupełnij wszystkie pola";
export const CHECK_ERRORS = "Sprawdź błędy";
export const RESERVATION_APPROVED = "Rezerwacja przebiegła pomyślnie";
