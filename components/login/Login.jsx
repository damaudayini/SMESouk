import { useState } from "react";

import LoginContextProvider from "./LoginContext";
import Form2 from "./LoginForms/Form2";
import Form1 from "./LoginForms/Form1";
import SuccessCard from "./LoginForms/SuccessCard";

const Login = () => {
  const [current, setCurrent] = useState(0);
  const [formData, setFormData] = useState({});

  const next = () => {
    setCurrent(current + 1);
  };

  const steps = [
    {
      title: "Login Details",
      content: (
        <Form1 goToNext={next} formData={formData} setFormData={setFormData} />
      ),
    },
    {
      title: "OTP Verification",
      content: (
        <Form2 formData={formData} goToNext={next} setFormData={setFormData} />
      ),
    },
    {
      title: "Login Success",
      content: <SuccessCard goToNext={next} />,
    },
  ];

  const goToStep = e => {
    const id = e.currentTarget.parentNode.dataset.id;
    setCurrent(parseInt(id));
  };

  return (
    <>
      <LoginContextProvider>
        <div>
          <div>{steps[current].content}</div>
        </div>
      </LoginContextProvider>
    </>
  );
};

export default Login;
