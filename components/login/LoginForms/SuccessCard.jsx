import style from "../login.module.css";

const successImg = "/assets/images/Success.png";

const SuccessCard = () => {
  return (
    <div className={style.SCard}>
      <img src={successImg} />
      <p className="text-titi font-semibold text-4xl leading-10 text-['#1F1C1C']-900">
        Login Success!
      </p>
      <span className="text-titi font-normal text-sm leading-10 text-['#1F1C1C']-900">
        Redirecting you to our homepage!
      </span>
    </div>
  );
};

export default SuccessCard;
