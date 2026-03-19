import { useId, useState } from "react";
import css from "./Register.module.css";
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/operations.js";
// import { userNameOn } from "../UserNameOn/UserNameOn.jsx";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

export default function Register() {
  const dispatch = useDispatch();

  // const [userName, setUserName] = useState("")

  const nameRegisterFieldId = useId();
  const emaiRegisterFieldId = useId();
  const passwordRegisterFieldId = useId();

  const handleSubmit = (values, actions) => {
    // console.log('values', values);
    dispatch(
      registerUser({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
    // dispatch(setUserName(values.name));
    actions.resetForm();
  };

  return (
    <div>
      <h5 className={css.titleRegister}>Register form</h5>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.containerForm}>
          <label htmlFor={nameRegisterFieldId} className={css.labelName}>
            name
          </label>
          <Field
            name="name"
            type="text"
            className={css.userName}
            id={nameRegisterFieldId}
          />
          <label htmlFor={emaiRegisterFieldId} className={css.labelEmail}>
            email
          </label>
          <Field
            name="email"
            type="text"
            className={css.email}
            id={emaiRegisterFieldId}
          />
          <label
            htmlFor={passwordRegisterFieldId}
            className={css.labelPassword}
          >
            password
          </label>
          <Field
            name="password"
            type="text"
            className={css.userPassword}
            id={passwordRegisterFieldId}
          />
          <button type="submit" className={css.button}>
            Submit
          </button>
        </Form>
      </Formik>
  </div>
  );
}
