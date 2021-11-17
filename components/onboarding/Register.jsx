import Link from "next/link";

const iconsEdit = "/assets/icons/icons_edit.svg";
const iconsRegister = "/assets/icons/icons_register.svg";
const registerScreenImage = "/assets/images/handshake.png";

const Register = () => {
  return (
    <div className="flex items-start">
      <img
        className="hidden md:block md:w-1/2"
        src={registerScreenImage}
        alt="Register here"
      />

      <div className="bg-neutral-100 w-full px-5 md:mx-11 font-titi flex flex-col items-start">
        <img
          className="md:hidden h-28 w-24 mt-9"
          src={iconsEdit}
          alt="Edit Image"
        />
        <img
          className="hidden md:block h-56 w-80"
          src={iconsRegister}
          alt="Register Icon"
        />
        <h1 className="text-5xl font-semibold text-[#1E1E1E] mt-7 my-1">
          Welcome to join our SME
          <span className="text-primary-default">souk</span>
        </h1>
        <p className="mt-3 font-normal text-sm text-neutral-900 my-1">
          Join with our SMEsouk to get help to set up your business, get deals
          from our bank and connect with community with a lot of SMEs business,
          partners and marketplace.
        </p>
        <Link href="register/registration">
          <button className="mt-9 bg-primary-default h-9 w-32 cursor-pointer uppercase rounded-lg font-bold text-xs text-neutral-100 text-center">
            Let Begin
          </button>
        </Link>
        <p className="mt-24 mb-5 font-normal text-sm text-[#231F20] ">
          Already have an account?{" "}
          <a className="cursor-pointer text-primary-default">Login here</a>{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;
