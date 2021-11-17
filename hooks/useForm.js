import { useState, useEffect } from "react";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    phone: "",
    countryCode: "",
    email: "",
    identity: "",
    identityNo: "",
    license: "",
    incorporationDate: "",
    cardname:"",
    buisnessname:"",
    buisnessemail:"",
    websiteLink:"",
    Businessprofile:"",
    phonenumber:"",
    loginPhone: "",
    loginEmail: "",
    otp: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("FORM VALUES========>>>>>>", values);

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
