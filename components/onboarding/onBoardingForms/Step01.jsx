import { useContext, useEffect } from "react";
import { OnBoardContext } from "../OnBoardContext";
import PropTypes from "prop-types";

import useForm from "../../../hooks/useForm";
import validate from "../../../helpers/validateInfo";
import Input from "../../global/Input";

const flag = "/assets/images/flag.png";

const countryCodes = [
  {
    id: 1,
    code: "+91",
    // flag: flag,
  },
  {
    id: 2,
    code: "+92",
    // flag: flag,
  },
  {
    id: 3,
    code: "+93",
    // flag: flag,
  },
  {
    id: 4,
    code: "+94",
    // flag: flag,
  },
];

const Step01 = ({ goToNext, setFormData, formData, submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate,
  );

  // const [data, setData] = useContext(OnBoardContext);

  useEffect(() => {
    if (
      (errors && Object.keys(errors).length == 0) ||
      "phone" in errors ||
      "email" in errors
    ) {
      console.error("Form Value Required");
    } else {
      setFormData({
        ...formData,
        ...values,
      });
      goToNext(1);
    }
  }, [errors]);

  return (
    <div>
      <h2 className="text-3xl font-semibold text-black mb-1">Basic Info</h2>
      <p className="text-base font-normal text-neutral-900 mb-7">
        Firstly, we need some basic infomation about you
      </p>

      <form
        className="text-base space-y-4"
        action="#"
        method="POST"
        onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label
            className="text-neutral-700 font-bold w-full mt-2"
            htmlFor="phone">
            Mobile Number
          </label>
          <div className="flex space-x-2">
            <select
              className="border-border rounded-xl hover:border-neutral-600 focus:border-neutral-600 text-neutral-800 focus:outline-none focus:ring-0"
              name="countryCode"
              id="countryCode"
              value={values.countryCode}
              onChange={handleChange}>
              {countryCodes.map(({ id, code }) => (
                <option key={id} value={code}>
                  {code}
                </option>
              ))}
            </select>
            <Input
              type="number"
              name="phone"
              id="phone"
              placeholder="XXXXXXXXX"
              value={values.phone}
              onChange={handleChange}
            />
          </div>
          {errors.phone && (
            <p className="text-primary-default font-normal text-xs ml-1">
              {errors.phone}
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <label
            className="text-neutral-700 font-bold w-full mt-2"
            htmlFor="email">
            Email
          </label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="john@example.com"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-primary-default font-normal text-xs ml-1">
              {errors.email}
            </p>
          )}
        </div>

        <div className="flex flex-col ">
          <div className="flex items-center justify-between">
            <label
              className="text-neutral-700 font-bold mt-2"
              htmlFor="identity">
              Your identity type
            </label>
            <div className="flex items-center space-x-1">
              <input
                className="text-primary-default focus:ring-1 focus:ring-primary-default focus:outline-none"
                type="radio"
                name="identity"
                id="emiratesId"
                value={values.identity}
                onChange={handleChange}
              />
              <label htmlFor="Onshore">Onshore</label>
            </div>
            <div className="flex items-center space-x-1">
              <input
                className="text-primary-default focus:ring-1 focus:ring-primary-default focus:outline-none"
                type="radio"
                name="identity"
                id="passport"
                value={values.identity}
                onChange={handleChange}
              />
              <label htmlFor="OffShore">OffShore</label>
            </div>
          </div>
          {errors.license && (
            <p className="text-primary-default font-normal text-xs ml-1">
              {errors.license}
            </p>
          )}

          <div className="flex flex-col">
            <label
              className="text-neutral-700 font-bold mt-2"
              htmlFor="identityNo">
              {values.identity}
            </label>
            <Input
              type="text"
              name="identityNo"
              id="identityNo"
              placeholder="784-XXXX-XXXXXXX-X"
              value={values.identityNo}
              onChange={handleChange}
            />
            {errors.identityNo && (
              <p className="text-primary-default font-normal text-xs ml-1">
                {errors.identityNo}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col">
          <label
            className="text-neutral-700 font-bold w-full mt-2"
            htmlFor="license">
            Trade license
          </label>
          <Input
            type="text"
            name="license"
            id="license"
            placeholder="Business trade license number"
            value={values.license}
            onChange={handleChange}
          />
          {errors.license && (
            <p className="text-primary-default font-normal text-xs ml-1">
              {errors.license}
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <label
            className="text-neutral-700 font-bold w-full mt-2"
            htmlFor="incorporationDate">
            Date of incorporation
          </label>
          <Input
            type="date"
            name="incorporationDate"
            id="incorporationDate"
            placeholder="DD-MM-YYYY"
            value={values.incorporationDate}
            onChange={handleChange}
          />
          {errors.license && (
            <p className="text-primary-default font-normal text-xs ml-1">
              {errors.license}
            </p>
          )}
        </div>

        <button className="h-10 w-32 font-bold rounded-lg uppercase bg-primary-default text-neutral-100 mt-16">
          Verify
        </button>
      </form>
    </div>
  );
};

Step01.propTypes = {
  goToNext: PropTypes.func,
  // setFormData: PropTypes.func,
  formData: PropTypes.object,
  submitForm: PropTypes.func,
};

export default Step01;
