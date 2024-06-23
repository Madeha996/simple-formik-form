import { Form, Formik } from "formik";
import React from "react";
import CustomInput from "./customInput";
import { advancedSchema } from "../schemas";
import CustomSelect from "./customSelect";
import CustomCheckbox from "./customCheckbox";
const onSubmit = (values, actions) => {
  console.log("values", values);
  console.log("actions", actions);
  actions.resetForm();
};
const AdvancedForm = () => {
  return (
    <Formik
      initialValues={{ username: "", jobType: "", acceptedTo: "" }}
      validationSchema={advancedSchema}
      onSubmit={onSubmit}
    >
      {(props) => (
        <Form>
          <CustomInput
            label="Username"
            name="username"
            type="text"
            placeholder="Enter your user name"
          />

          <CustomSelect
            label="Job type"
            name="jobType"
            placeholder="Select Your Job Type"
          >
            <option value="">Please Select Job Type</option>
            <option value="designer">Designer</option>
            <option value="developer">Delveloper</option>
            <option value="manager">Manager</option>
            <option value="other">Other</option>
          </CustomSelect>

          <CustomCheckbox name="acceptedTo" type="checkbox" />

          {/* <Field type="text" placeholder="Name" name="name" /> */}
          <button type="submit" disabled={props.isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AdvancedForm;
