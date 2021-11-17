import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

import { OnBoardContext } from "../OnBoardContext";
import useForm from "../../../hooks/useForm";
import validate from "../../../helpers/validateInfo";

import Upload from "../upload";
const phone = "/assets/icons/phone.svg";
const mail = "/assets/icons/mail.svg";
const site = "/assets/icons/site.svg";
const defaultCard = "/assets/images/card-default-profile.png";
const sme = "/assets/images/smesouk.png";
const red = "/assets/images/new.png";

const buisness = [
  {
    name: "buisness1",
    id: "buisness1",
    defination: "Business Services",
  },
  {
    name: "buisness2",
    id: "buisness2",
    defination: "Facilities Maintenance",
  },
  {
    name: "buisness3",
    id: "buisness3",
    defination: "Travel & Leisure",
  },
  {
    name: "buisness4",
    id: "buisness4",
    defination: "Digital Tools",
  },
  {
    name: "buisness5",
    id: "buisness5",
    defination: "Office equipment & furniture",
  },
  {
    name: "buisness6",
    id: "buisness6",
    defination: "Fleet",
  },
];
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

const Step03 = ({ goToNext, setFormData, formData, submitForm }) => {
  const [cardname, setCardName] = useState(true);
  const [buisnessname, setBuisnessName] = useState(true);
  const [phonenumber, setPhoneNumber] = useState(true);
  const [buisnessemail, setMailId] = useState(true);
  const [websiteLink, setWebsite] = useState(true);
  const [image, setImage] = useState(null);
  // const [data, setData] = useContext(OnBoardContext);

  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate,
  );

  useEffect(() => {
    if (values.cardname == "") {
      setCardName(true);
    } else {
      setCardName(false);
    }

    if (values.buisnessname == "") {
      setBuisnessName(true);
    } else {
      setBuisnessName(false);
    }

    if (values.buisnessemail == "") {
      setMailId(true);
    } else {
      setMailId(false);
    }

    if (values.websiteLink == "") {
      setWebsite(true);
    } else {
      setWebsite(false);
    }
    if (values.phonenumber == "") {
      setPhoneNumber(true);
    } else {
      setPhoneNumber(false);
    }
  }, [values]);

  const onCheckboxChange = e => {
    console.log("checked", e.target.value);
  };

  useEffect(() => {
    if ((errors && Object.keys(errors).length == 0) || "cardname" in errors) {
      console.log("Form Value Required");
      console.log({ errors });
    } else {
      console.log("Success:", values);
      setFormData({
        ...formData,
        ...values,
      });
      goToNext(3);
      console.log("step 3 submission");
    }
  }, [errors]);

  return (
    <div className="bg-neutral-100 w-full px-5 md:mx-11 font-titi flex flex-col items-start">
      <h1 className="text-5xl font-semibold text-[#1E1E1E] mt-7 my-1">
        Bussiness info
      </h1>
      <p className="mt-3 font-normal text-sm text-neutral-900 my-1">
        Tell us something about your business
      </p>

      <div className="flex">
        <Upload test="1" />

        <div className="mt-5 ml-4">
          <p className="text-sm font-bold">Personal Profile</p>
          <p className="text-sm">Upload your Personal Photo</p>
        </div>
      </div>

      <div className="flex mt-1">
        <Upload test="2" onImageChange={v => setImage(v)} />

        <div className="mt-5 ml-4">
          <p className="text-sm font-bold">Business Logo</p>
          <p className="text-sm">Upload your business logo</p>
        </div>
      </div>
      <form
        className="text-base space-y-4"
        action="#"
        method="POST"
        onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label className="text-neutral-700 font-bold w-full mt-2">
            Your name
          </label>
          <input
            className={`rounded-xl hover:border-neutral-600 focus:border-neutral-600 text-neutral-800 focus:outline-none focus:ring-0 ${
              errors && errors.cardname
                ? "border-primary-default"
                : "border-border"
            }`}
            type="text"
            name="cardname"
            id="name"
            placeholder="It will display with your profile photo"
            value={values.cardname}
            onChange={handleChange}
          />
          {errors.cardname && (
            <p className="text-primary-default font-normal text-xs ml-1">
              {errors.cardname}
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-neutral-700 font-bold w-full mt-2">
            Business name
          </label>
          <input
            className={`rounded-xl hover:border-neutral-600 focus:border-neutral-600 text-neutral-800 focus:outline-none focus:ring-0 ${
              errors && errors.buisnessname
                ? "border-primary-default"
                : "border-border"
            }`}
            type="text"
            name="buisnessname"
            id="buisnessname"
            placeholder="Eg: Fallberry Ltd. Co"
            value={values.buisnessname}
            onChange={handleChange}
          />
          {errors.buisnessname && (
            <p className="text-primary-default font-normal text-xs ml-1">
              {errors.buisnessname}
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-neutral-700 font-bold w-full mt-2">
            Business email
          </label>
          <input
            className={`rounded-xl hover:border-neutral-600 focus:border-neutral-600 text-neutral-800 focus:outline-none focus:ring-0 ${
              errors && errors.buisnessemail
                ? "border-primary-default"
                : "border-border"
            }`}
            type="text"
            name="buisnessemail"
            id="buisnessemail"
            placeholder="support@secretssables.ae"
            value={values.buisnessemail}
            onChange={handleChange}
          />
          {errors.buisnessemail && (
            <p className="text-primary-default font-normal text-xs ml-1">
              {errors.buisnessemail}
            </p>
          )}
        </div>

        <div className="flex flex-col mt-0">
          <label
            className="text-neutral-700 font-bold w-full mt-2"
            htmlFor="phone">
            Mobile Number
          </label>
          <div className="flex space-x-2">
            <select
              className={`rounded-xl hover:border-neutral-600 focus:border-neutral-600 text-neutral-800 focus:outline-none focus:ring-0 ${
                errors && errors.phonenumber
                  ? "border-primary-default"
                  : "border-border"
              }`}
              name="countryCode"
              id="countryCode"
              value={values.countryCode}
              onChange={handleChange}>
              {countryCodes.map(({ id, code }) => (
                <option key={id} value={code}>
                  {/* <img src="/assets/icons/flag.svg" alt="" /> */}
                  {code}
                </option>
              ))}
            </select>
            <input
              className={`w-full rounded-xl hover:border-neutral-600 focus:border-neutral-600 text-neutral-800 focus:outline-none focus:ring-0 ${
                errors && errors.phonenumber
                  ? "border-primary-default"
                  : "border-border"
              }`}
              type="number"
              name="phonenumber"
              id="phonenumber"
              placeholder="XXXXXXXXX"
              value={values.phonenumber}
              onChange={handleChange}
            />
          </div>
          {errors.phonenumber && (
            <p className="text-primary-default font-normal text-xs ml-1">
              {errors.phonenumber}
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-neutral-700 font-bold w-full mt-2">
            Website link
          </label>
          <input
            className={`rounded-xl hover:border-neutral-600 focus:border-neutral-600 text-neutral-800 focus:outline-none focus:ring-0 ${
              errors && errors.websiteLink
                ? "border-primary-default"
                : "border-border"
            }`}
            type="text"
            name="websiteLink"
            id="websiteLink"
            placeholder="https://www.fallberry.com (Optional)"
            value={values.websiteLink}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-neutral-700 font-bold w-full mt-2">
            Business profile
          </label>
          <textarea
            className={`resize-none	h-36 rounded-xl hover:border-neutral-600 focus:border-neutral-600 text-neutral-800 focus:outline-none focus:ring-0 ${
              errors && errors.Businessprofile
                ? "border-primary-default"
                : "border-border"
            }`}
            type="text"
            name="Businessprofile"
            id="Businessprofile"
            placeholder="Describe about your business (Maximum 400 words)"
            value={values.Businessprofile}
            onChange={handleChange}
          />
          {errors.Businessprofile && (
            <p className="text-primary-default font-normal text-xs ml-1">
              {errors.Businessprofile}
            </p>
          )}
        </div>

        <div className="overflow-y-auto mt-2 max-h-24 min-w-inp focus:border-primary-default bg-white border border-border rounded-xl">
          <div className="grid grid-cols-2 gap-3 p-3">
            {buisness.map(({ name, id, defination }) => (
              <div key={id} className="flex items-center">
                <input
                  className="text-primary-default focus:ring-1 focus:ring-primary-default focus:outline-none"
                  type="checkbox"
                  name={name}
                  id={id}
                  onChange={handleChange}
                />
                <p className="ml-3">{defination}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center">
          <input
            className="text-primary-default focus:ring-1 focus:ring-primary-default focus:outline-none"
            type="checkbox"
            name="terms"
            id="terms"
            onChange={handleChange}
          />
          <p className="ml-3">
            I have read and accepted the
            <span className="text-primary-default">Terms of Use</span> and{" "}
            <span className="text-primary-default">Privacy Policy.</span>
          </p>
        </div>

        <div className="flex items-center">
          <input
            className="text-primary-default focus:ring-1 focus:ring-primary-default focus:outline-none"
            type="checkbox"
            name="terms"
            id="terms"
            onChange={handleChange}
          />
          <p className="ml-3">
            I agree to receive marketing and newsletter emails from SMEsouk
          </p>
        </div>

        <button
          className="uppercase h-10 px-10 py-3 bg-primary-default text-neutral-100 rounded-lg mt-10 text-sm font-bold"
          type="primary"
          htmlType="submit">
          CREATE ACCOUNT
        </button>
      </form>

      <div className="hidden md:block absolute bg-white top-2/4 rounded-xl left-28 min-h-72 w-96">
        <div className="grid grid-cols-2 gap-3">
          <div className="pl-4 pt-6">
            <div>
              <img
                className={!image ? "" : `object-cover h-16 w-32`}
                src={image ? image : defaultCard}
              />
            </div>
            <p className="text-2xl text-neutral-900 font-bold min-w-max">
              {" "}
              {buisnessname ? "Fallberry Ltd. Co" : values.buisnessname}
            </p>{" "}
            <br />
            <p className="text-neutral-700 text-sm italic">
              {cardname ? "your name" : values.cardname}
            </p>
            <div className="flex">
              <img src={phone} />
              <p className="m-2">
                {phonenumber ? "50 417 6328" : values.phonenumber}
              </p>
            </div>
            <div className="flex">
              <img src={mail} />
              <p className="m-2">
                {buisnessemail
                  ? "support@secretssables.ae"
                  : values.buisnessemail}
              </p>
            </div>
            <div className="flex">
              <img src={site} />
              <p className="m-2">
                {websiteLink ? "https://www.fallberry.com" : values.websiteLink}
              </p>
            </div>
          </div>
          <div>
            <img className="mr-7 float-right mt-4" src={sme} />
            <img
              className="absolute right-0 bottom-0 h-36 rounded-br-xl"
              src={red}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Step03.propTypes = {
  goToNext: PropTypes.func,
  // setFormData: PropTypes.func,
  formData: PropTypes.object,
  submitForm: PropTypes.func,
};

export default Step03;
