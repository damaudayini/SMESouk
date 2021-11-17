import React from "react";
import style from "./steps.module.css";

const defaultCard = "/assets/images/card-default-profile.png";
const plus = "/assets/icons/plus.svg";

const ImgUpload = ({ onChange, src }) => (
  <label className={`${style.customFileUpload} ${style.fas}`}>
    <div className={`${style.imgWrap} ${style.imgUpload}`}>
      <img className={style.profilePicture} src={src} />
    </div>
    <input
      id="photo-upload"
      type="file"
      className={style.uploadButton}
      onChange={onChange}
    />
  </label>
);

const Profile = ({ onSubmit, src }) => (
  <div className={style.card}>
    <form onSubmit={onSubmit}>
      <label className={`${style.customFileUpload} ${style.fas}`}>
        <div className={style.imgWrap}>
          <img for="photo-upload" src={src} />
        </div>
      </label>
    </form>
  </div>
);

const Edit = ({ onSubmit, children }) => (
  <div>
    <form onSubmit={onSubmit}>{children}</form>
  </div>
);

export default class CardProfile extends React.Component {
  state = {
    file: "",
    imagePreviewUrl: this.props.test === "2" ? defaultCard : defaultCard,
    name: "",
    status: "",
    active: "edit",
  };

  photoUpload = e => {
    e.preventDefault();
    console.log(this.props.test);
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
      this.props.onImageChange(reader.result);
    };
    reader.readAsDataURL(file);
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("tt", this.props.test);
    let activeP = this.state.active === "edit" ? "profile" : "edit";
    this.setState({
      active: activeP,
    });
  };

  render() {
    const { imagePreviewUrl, active } = this.state;
    return (
      <div>
        {active === "edit" ? (
          <Edit onSubmit={this.handleSubmit}>
            <ImgUpload
              onChange={this.photoUpload.bind(this)}
              src={imagePreviewUrl}
            />
          </Edit>
        ) : (
          <Profile onSubmit={this.handleSubmit} src={imagePreviewUrl} />
        )}
      </div>
    );
  }
}
