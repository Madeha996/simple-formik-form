import { useField } from "formik";
import React from "react";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  console.log("meta is", meta);
  console.log("field is", field);
  return (
    <>
      <label>{label}</label>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : (
        ""
      )}
    </>
  );
};

export default CustomInput;
