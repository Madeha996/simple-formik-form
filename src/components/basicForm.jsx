import React from "react";
import { useState } from "react";
import { useFormik } from "formik";

const BasicForm = () => {
  const { values, handleBlur, handleChange } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
  });

  // Without formilk
  //   const [email, setEmail] = useState("");
  return (
    <form>
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
      />
      <label htmlFor="age">Age :</label>
      <input
        id="age"
        value={values.age}
        onChange={handleChange}
        onBlur={handleBlur}
        type="number"
        placeholder="enter your age"
      />
      <label htmlFor="password">Password :</label>
      <input
        id="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        type="password"
        placeholder="enter your password"
      />
      <label htmlFor="confirmPassword">Password :</label>
      <input
        id="confirmPassword"
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        type="password"
        placeholder="confirm your password"
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default BasicForm;
