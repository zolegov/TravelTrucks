import React from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import css from "./FlatpickrDate.module.css";
import { ErrorMessage } from "formik";
import "flatpickr/dist/l10n/uk";

const FlatpickrDate = ({ field, form, ...props }) => {
  return (
    <div>
      <Flatpickr
        {...field}
        {...props}
        options={{
          locale: {
            firstDayOfWeek: 1, // Починає тиждень з понеділка
          },
        }}
        onChange={(date) => form.setFieldValue(field.name, date[0])} // Оновлюємо значення Formik
        placeholder="Booking date*"
        className={css.feedbackFormField}
      />
      <ErrorMessage name={field.name} component="div" className="error" />
    </div>
  );
};
export default FlatpickrDate;
