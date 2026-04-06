import { useId } from "react";
import css from "./Login.module.css";
import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/user/operations.js";
import { selectIsLogin } from "../../redux/user/usersSlice.js";
import { Navigate } from "react-router-dom";

const initialValues = {
  email: "",
  password: ""
};

export default function Login() {
  const dispatch = useDispatch();
  const emaiFieldId = useId();
  const passwordFieldId = useId();
  const userIsLogin = useSelector(selectIsLogin);

    const handleSubmit = (values, actions) => {
      // console.log('values', values);
      dispatch(loginUser(values));
      actions.resetForm();
      // console.log("userIsLogin", userIsLogin);
  }
  
      if (userIsLogin) {
          // добавити бібліотеку успішної реєстрації
          // console.log(userIsLogin);
        return <Navigate to="/flowers" />;
          }

    return (
      <div>
        <h5 className={css.titleLogin}>Login form </h5>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form className={css.containerForm}>
            <label htmlFor={emaiFieldId} className={css.labelEmail}>
              email
            </label>
            <Field
              name="email"
              type="text"
              className={css.email}
              id={emaiFieldId}
            />
            <label htmlFor={passwordFieldId} className={css.labelPassword}>
              password
            </label>
            <Field
              name="password"
              type="text"
              className={css.userName}
              id={passwordFieldId}
            />
            <a className={css.forgottenPassword}>Forget password?</a>
            <button type="submit" className={css.button}>
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    );
}