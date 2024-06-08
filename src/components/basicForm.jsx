import React from "react";
import { useFormik } from "formik";
import { basicSchema } from "../schemas/index";
const onSubmit = (values, actions) => {
  console.log("values", values);
  console.log("actions", actions);
  actions.resetForm();
};
const BasicForm = () => {
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  console.log("errors", errors);

  // Without formilk
  //   const [email, setEmail] = useState("");
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      {/* <label htmlFor="email">Email :</label>
      <input
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="enter your email"
      /> */}
      <label htmlFor="email">Email :</label>
      <input
        id="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        type="email"
        placeholder="enter your email"
        className={errors?.email && touched.email ? "input-error" : ""}
      />
      {errors.email && touched.email && <p>{errors.email}</p>}
      <label htmlFor="age">Age :</label>
      <input
        id="age"
        value={values.age}
        onChange={handleChange}
        onBlur={handleBlur}
        type="number"
        placeholder="enter your age"
        className={errors?.age && touched.age ? "input-error" : ""}
      />
      {errors.age && touched.age && <p>{errors.age}</p>}

      <label htmlFor="password">Password :</label>
      <input
        id="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        type="password"
        placeholder="enter your password"
        className={errors?.password && touched.password ? "input-error" : ""}
      />
      {errors.password && touched.password && <p>{errors.password}</p>}

      <label htmlFor="confirmPassword">Password :</label>
      <input
        id="confirmPassword"
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        type="password"
        placeholder="confirm your password"
        className={
          errors?.confirmPassword && touched.confirmPassword
            ? "input-error"
            : ""
        }
      />
      {errors.confirmPassword && touched.confirmPassword && (
        <p>{errors.confirmPassword}</p>
      )}

      <button disabled={isSubmitting} type="submit">
        Submit
      </button>
    </form>
  );
};

export default BasicForm;
