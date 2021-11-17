import { useContext, useEffect } from "react";
import { LoginContext } from "../LoginContext";
import PropTypes from "prop-types";

import useForm from "../../../hooks/useForm";
import validate from "../../../helpers/validateInfo";

const flag = "/assets/images/flag.png";

const countryCodes = [
  {
    id: 1,
    code: "+91",
    flag: flag,
  },
  {
    id: 2,
    code: "+92",
    flag: flag,
  },
  {
    id: 3,
    code: "+93",
    flag: flag,
  },
  {
    id: 4,
    code: "+94",
    flag: flag,
  },
];

const Form1 = ({ goToNext, setFormData, formData, submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate,
  );
  const [data, setData] = useContext(LoginContext);

  useEffect(() => {
    if (
      (errors && Object.keys(errors).length == 0) ||
      "loginEmail" in errors ||
      "loginPhone" in errors
    ) {
      console.log("Form Value Required");
    } else {
      console.log("Success:", values);
      setFormData({
        ...formData,
        ...values,
      });
      goToNext(1);
    }
  }, [errors]);

  return (
    <>
      <h1 className="text-4xl md:text-5xl font-semibold text-[#1E1E1E] mt-7 my-1">
        Welcome back
        <br /> with SME
        <span className="text-primary-default">souk</span>
      </h1>
      <p className="mt-3 font-normal leading-6 text-sm md:text-base text-neutral-900 my-1">
        Enter your email and phone number to get verification it’s you and
        continue use our services.
      </p>
      <form
        className="text-base space-y-4"
        action="#"
        method="POST"
        onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label
            className="text-neutral-700 font-bold w-full mt-2"
            htmlFor="email">
            Email
          </label>
          <input
            className={` rounded-xl hover:border-neutral-600 focus:border-neutral-600 text-neutral-800 focus:outline-none focus:ring-0 ${
              errors && errors.loginEmail
                ? "border-primary-default"
                : "border-border"
            }`}
            type="email"
            name="loginEmail"
            id="email"
            placeholder="john@example.com"
            value={values.loginEmail}
            onChange={handleChange}
          />
          {errors.loginEmail && (
            <p className="text-primary-default font-normal text-xs ml-1">
              {errors.loginEmail}
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <label
            className="text-neutral-700 font-bold w-full mt-2"
            htmlFor="phone">
            Mobile Number
          </label>
          <div className="flex space-x-2">
            <select
              className={`rounded-xl hover:border-neutral-600 focus:border-neutral-600 text-neutral-800 focus:outline-none focus:ring-0 ${
                errors && errors.loginPhone
                  ? "border-primary-default"
                  : "border-border"
              }`}
              name="countryCode"
              id="countryCode"
              value={values.countryCode}
              onChange={handleChange}>
              {countryCodes.map(({ id, code }) => (
                <option key={id} value={code} className="px-5">
                  {code}
                </option>
              ))}
            </select>
            <input
              className={`w-full rounded-xl hover:border-neutral-600 focus:border-neutral-600 text-neutral-800 focus:outline-none focus:ring-0 ${
                errors && errors.loginPhone
                  ? "border-primary-default"
                  : "border-border"
              }`}
              type="number"
              name="loginPhone"
              id="phone"
              placeholder="XXXXXXXXX"
              value={values.loginPhone}
              onChange={handleChange}
            />
          </div>
          {errors.loginPhone && (
            <p className="text-primary-default font-normal text-xs ml-1">
              {errors.loginPhone}
            </p>
          )}
        </div>

        <button className="h-10 w-32 font-bold rounded-lg uppercase bg-primary-default text-neutral-100 mt-16">
          Verify
        </button>
      </form>
      <p className="mt-24 mb-5 font-normal text-sm text-[#231F20] ">
        Already have an account?
        <a
          className="cursor-pointer ml-2 text-primary-default"
          href="/register">
          Register here
        </a>
      </p>
    </>
  );
};

Form1.propTypes = {
  goToNext: PropTypes.func,
  setFormData: PropTypes.func,
  formData: PropTypes.func,
  submitForm: PropTypes.func,
};

export default Form1;
