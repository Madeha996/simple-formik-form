import { Field, Form, Formik } from "formik";
import React from "react";

const AdvancedForm = () => {
  return (
    <>
      <Formik initialValues={{ name: "" }}>
        {(props) => {
          <Form>
            <Field type="text" placeholder="Name" name="name" />
          </Form>;
        }}
      </Formik>
    </>
  );
};

export default AdvancedForm;
