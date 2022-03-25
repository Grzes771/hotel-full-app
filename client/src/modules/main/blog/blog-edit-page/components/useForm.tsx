import { useState, useEffect, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { getSingleArticleStarted } from "@store/blog/single-article/actions";
import { singleArticleRX } from "@store/blog/single-article/selectors";
import { updateArticleDataStarted } from "@store/blog/update-article/actions";

import { TErrors, TUseFormReturningValues, TValues } from "./types";
import * as C from "./consts";

const ERRORS_INITIAL_VALUES = {
  title: "",
  text: "",
  image: "",
  articleId: "",
};

export const useForm = (
  callback: () => void,
  validate: (values: TValues) => TErrors
): TUseFormReturningValues => {
  const singleArticleData = useSelector(singleArticleRX);

  const params = useParams();
  const { articleId } = params;

  const displaySingleArticle = {
    id: singleArticleData?.id,
    title: singleArticleData?.title,
    text: singleArticleData?.text,
    date: singleArticleData?.updatedAt.split("T")[0],
    image: singleArticleData?.image.replace(/"/g, ""),
  };

  const INITIAL_VALUES = {
    articleId: displaySingleArticle.id,
    title: displaySingleArticle.title,
    text: displaySingleArticle.text,
    image: displaySingleArticle.image,
  };

  const [values, setValues] = useState<TValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<TValues>(ERRORS_INITIAL_VALUES);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedImage, setSelectedImage] = useState<
    File | string | undefined | null
  >(displaySingleArticle.image);
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

  const handleOnClick = () => {
    setSelectedImage(null);
  };

  const handleUploadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    if (event?.target?.files[0].type !== C.FILE_FORMAT) {
      toast.error(C.TOAST_ERROR_FORMAT);
      return;
    }

    (async (file) => {
      const reader: FileReader = new FileReader();
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

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
    dispatch(updateArticleDataStarted(values));
  };

  useEffect(() => {
    if (articleId) dispatch(getSingleArticleStarted(articleId));
  }, []);

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
    selectedImage,
    handleOnClick,
    handleUploadImage,
  };
};

export default useForm;
