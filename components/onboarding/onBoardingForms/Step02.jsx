import { useContext, useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { Form, Button } from "antd";
import PropTypes from "prop-types";

import { OnBoardContext } from "../OnBoardContext";
import style from "../../login/login.module.css";

const Step02 = ({ goToNext, setFormData, formData }) => {
  const [data, setData] = useState();
  const [form] = Form.useForm();
  const [otp, setOTP] = useState("");
  const [otpTime, setOTPTime] = useState(30);
  const [otpError, setOTPError] = useState(false);
  const [otpErrMsg, setotpErrMsg] = useState("Please Enter All OTP digits.");
  // const [data1, setData1] = useContext(OnBoardContext);

  useEffect(() => {
    const otpInterval = setInterval(() => {
      setOTPTime(time => time && time - 1);
    }, 1000);
    return () => {
      clearInterval(otpInterval);
    };
  }, []);

  const resetOTP = () => {
    if (otpTime < 1) {
      setOTP("");
      setOTPTime(60);
      setOTPError(false);
    }
  };

  const sendOTP = data1 => {
    if (data1 == "" || data1 == "123456") {
      setOTPError(true);
      setotpErrMsg(
        "The OTP is incorrect. Please check again or resend a new code.",
      );
    } else {
      setData({ ...data1 });
      data = { ...formData, otp: data1 };
      console.log("Login Data============>>>>>>>>>", data);
      goToNext(2);
    }
  };

  const handleChange1 = otp => {
    if (otp.length < 6) {
      setotpErrMsg("Please Enter All OTP digits.");
      setOTPError(true);
    } else {
      setOTPError(false);
    }
    setOTP(otp);
  };
  return (
    <div className="">
      <h1 className="text-5xl font-semibold text-[#1E1E1E] mt-7 my-1">
        OTP Verification
      </h1>
      <p className="mt-3 font-normal leading-6 text-base text-neutral-900 my-1">
        We’ve sent a code to (+971)***0000. Enter it here to verify your
        identity and continue setting up your SMEsouk account.
      </p>
      <Form
        name="otpForm"
        onFinish={() => sendOTP(otp)}
        form={form}
        className="form-large mt-9">
        <Form.Item
          rules={[{ required: true, message: "Please enter OTP" }]}
          className="text-neutral-700 font-bold w-full mb-5"
          label="OTP Verification">
          <div className={style.otpWrapper}>
            <OtpInput
              className={otpError ? style.otpError : style.otpField}
              value={otp}
              onChange={handleChange1}
              numInputs={6}
              isInputNum={true}
              separator={""}
            />
          </div>
        </Form.Item>
        {otpError && <p className="col-12 text-primary-default">{otpErrMsg}</p>}
        <div>
          <Button
            className="uppercase h-10 w-32 bg-primary-default text-neutral-100 rounded-lg mt-10"
            type="primary"
            htmlType="submit"
            disabled={otpError}>
            Next
          </Button>
        </div>
      </Form>
      <p className="mt-24 mb-5 font-normal text-sm text-[#231F20] ">
        Didn’t recieve any OTP?
        <a
          className="cursor-pointer ml-2 text-primary-default"
          onClick={() => resetOTP()}>
          {otpTime > 0 ? otpTime : `Resend Code`}
        </a>
      </p>
    </div>
  );
};

Step02.propTypes = {
  goToNext: PropTypes.func,
  // setFormData: PropTypes.func,
  formData: PropTypes.object,
  submitForm: PropTypes.func,
};

export default Step02;
