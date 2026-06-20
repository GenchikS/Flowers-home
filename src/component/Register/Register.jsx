import { useId } from "react";
import css from "./Register.module.css";
import { Field, Form, Formik } from "formik";
import { registerUser } from "../../redux/user/operations.js";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {selectMessage} from "../../redux/user/usersSlice.js";
import { Navigate } from "react-router-dom";

const initialValues = {
    name: "",
    email: "",
    password: ""
};

export default function Register() {
  const dispatch = useDispatch();
  const nameRegisterFieldId = useId();
  const emaiRegisterFieldId = useId();
  const passwordRegisterFieldId = useId();

  const user = useSelector(selectMessage);
  // console.log("user Regis", user);
  // const error = useSelector(selectError);

  const handleSubmit = (values, actions) => {
    // console.log('values', values);
    dispatch(registerUser(values));
    actions.resetForm();
  };

  if (user) {
    // добавити бібліотеку успішної реєстрації
    console.log(user.message)
    return <Navigate to="/login" replace />;
  }

  // добавити бібліотеку помилки реєстрації
  // console.log(error);

  return (
    <div>
      <h5 className={css.titleRegister}>Register form</h5>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.containerForm}>
          <div className={css.containerInput}>
            <label htmlFor={nameRegisterFieldId} className={css.labelForm}>
              name:
            </label>
            <Field
              name="name"
              type="text"
              className={css.userName}
              id={nameRegisterFieldId}
            />
          </div>
          <div className={css.containerInput}>
            <label htmlFor={emaiRegisterFieldId} className={css.labelForm}>
              email:
            </label>
            <Field
              name="email"
              type="text"
              className={css.email}
              id={emaiRegisterFieldId}
            />
          </div>
          <div className={css.containerInput}>
            <label htmlFor={passwordRegisterFieldId} className={css.labelForm}>
              password:
            </label>
            <Field
              name="password"
              type="text"
              className={css.userPassword}
              id={passwordRegisterFieldId}
            />
          </div>
          <button type="submit" className={css.button}>
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}