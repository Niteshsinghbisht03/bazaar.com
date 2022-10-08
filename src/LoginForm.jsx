import { Form, Formik, useFormik } from "formik";
import React from "react";

import { Link } from "react-router-dom";
import * as Yup from "yup";
import FormikInput from "./FormikInput";

function LoginForm() {
  function CallLoginApi(values) {
    console.log("email", values.email, " and password", values.password);
  }

  const Schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(8).required(),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <>
      <div className="py-20">
        <div className="max-w-6xl px-8 py-8 mx-auto bg-white sm:px-20 sm:py-24">
          <h1 className="text-2xl font-semibold">Login</h1>
          <Formik
            initialValues={initialValues}
            onSubmit={CallLoginApi}
            validationSchema={Schema}
            validateOnMount={true}
          >
            <Form className="p-5 mt-6 border border-black">
              <FormikInput
                label=" Username or email-address"
                id="email-address"
                name="email"
                required
                type="email"
                autoComplete="email"
              />

              <FormikInput
                label="Password"
                name="password"
                required
                id="password"
                type="password"
                autoComplete="current-Password"
              />

              <div>
                <input type="checkbox" id="checkbox" />
                <label htmlFor="checkbox" className="ml-1 text-base font-bold">
                  Remember me
                </label>
              </div>
              <div className="flex flex-col sm:flex-row">
                <button
                  type="submit"
                  className="px-10 py-2.5 font-bold text-white self-start rounded-md text-md bg-rose-500 disabled:bg-rose-400"
                >
                  LOG IN
                </button>
                <Link
                  to={"/Product/signup"}
                  className="px-9 py-2.5 mt-2 sm:mt-0 sm:ml-4 font-bold self-start  text-white rounded-md text-md bg-rose-500"
                >
                  SIGN UP
                </Link>
              </div>
              <div>
                <Link to={"/Product/change-password"}>Lost Your Password?</Link>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
