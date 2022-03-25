import { useState, useEffect, ChangeEvent } from "react";
import { useDispatch } from "react-redux";

import { toast } from "react-toastify";
import { createArticleStarted } from "@store/blog/write-article/actions";

import { TErrors, TUseFormReturningValues, TValues } from "./types";

const ERRORS_INITIAL_VALUES = {
  title: "",
  text: "",
  image: "",
  selectedImage: "",
};

const INITIAL_VALUES = {
  title: "",
  text: "",
  image: "",
  selectedImage: "",
};

export const useForm = (
  callback: () => void,
  validate: (values: TValues) => TErrors
): TUseFormReturningValues => {
  const [values, setValues] = useState<TValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<TErrors>(ERRORS_INITIAL_VALUES);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null | File>(
    null
  );
  const [fileFormat, setFileFormat] = useState<string>("");

  const dispatch = useDispatch();

  const handleChange = (
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLSelectElement>
      | ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
      image: selectedImage,
    });
  };
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
    dispatch(createArticleStarted(values));
  };
  const handleOnClick = () => {
    setSelectedImage(null);
  };

  const handleUploadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    if (event?.target?.files[0].type !== "image/jpeg") {
      toast.error("Zły format pliku");
      return;
    }
    (async (file) => {
      const reader = new FileReader();
      reader.onloadend = async function (e: ProgressEvent<FileReader>) {
        const fileFormat = (e?.target?.result as string).split(",")[0];
        const content = (e?.target?.result as string).split(",")[1];

        setFileFormat(fileFormat);
        setSelectedImage(content);
      };
      reader.readAsDataURL(file);
    })(event?.target?.files[0]);

    setSelectedImage(event?.target?.files[0]);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    handleUploadImage,
    handleOnClick,
    selectedImage,
  };
};

export default useForm;
