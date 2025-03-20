import dayjs from "dayjs";
import { IReview } from "../types/review";
import * as Yup from "yup";

export const reviewSchema: IReview = {
  rate: 0,
  review: "",
  name: "",
  role: "",
  img_url: "",
  created_date: dayjs().toDate(),
};

export const reviewValidation = Yup.object().shape({
  rate: Yup.number().required("Please rate the product"),
  review: Yup.string().required("Please write a review"),
  name: Yup.string(),
  role: Yup.string(),
  img_url: Yup.string(),
  created_date: Yup.date(),
});
