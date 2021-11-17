const iconsEdit = "/assets/icons/icons_edit.svg";
const Thankyou = "/assets/images/Thankyou.svg";

const OnBoardSuccess = () => {
  return (
    <div className="mt-7 md:mt-20 bg-neutral-100 w-full md:mx-11 font-titi flex flex-col items-start">
      <img
        className="md:hidden h-28 w-24 mt-9"
        src={iconsEdit}
        alt="Edit Image"
      />
      <img
        className="hidden md:block h-56 w-80"
        src={Thankyou}
        alt="Register Icon"
      />
      <h1 className="text-5xl font-semibold text-[#1E1E1E] mt-7 my-1">
        Thank you for <br />
        <span className="text-primary-default">registering</span>
      </h1>
      <p className="mt-3 font-normal text-sm text-neutral-900 my-1">
        Now you can use your email and phone number to get OTP from us <br />
        to login. Let try more wonderful services, set up, deals with your
        <br /> new account.
      </p>
      <button className="mt-9 bg-primary-default h-9 w-32 cursor-pointer uppercase rounded-lg font-bold text-xs text-neutral-100 text-center">
        Log In
      </button>
    </div>
  );
};

export default OnBoardSuccess;
