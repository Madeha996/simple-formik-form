import { useField } from "formik";
import React from "react";

const CustomCheckbox = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className="checkbox">
        <input
          {...field}
          {...props}
          className={meta.touched && meta.error ? "input-error" : ""}
        />
        <span>Please accept terms of service</span>
      </div>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : (
        ""
      )}
    </>
  );
};

export default CustomCheckbox;
