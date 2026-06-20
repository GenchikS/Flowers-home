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
        <div className={css.containerInput}>
          <label htmlFor={emaiFieldId} className={css.labelForm}>
            email:
          </label>
          <Field
            name="email"
            type="text"
            className={css.email}
            id={emaiFieldId}
          />
        </div>
        <div className={css.containerInput}>
          <label htmlFor={passwordFieldId} className={css.labelForm}>
            password
          </label>
          <Field
            name="password"
            type="text"
            className={css.userName}
            id={passwordFieldId}
          />
        </div>
        <a className={css.forgettenPassword}>Forget password?</a>
        <button type="submit" className={css.button}>
          Submit
        </button>
      </Form>
    </Formik>
  </div>
);
}