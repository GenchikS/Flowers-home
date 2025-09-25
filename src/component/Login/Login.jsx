import { useId } from "react";
import css from "./Login.module.css";
import { Field, Form, Formik } from "formik";

const initialValues = {
  email: "",
  password: ""
};

export default function Login() {
    const emaiFieldId = useId();
    const passwordFieldId = useId();

    const handleSubmit = (values, actions) => {
        console.log('values', values);
        actions.resetForm();

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
            <a className={css.forgottenPassword}>Forgotten password?</a>
            <button type="submit" className={css.button}>
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    );
}