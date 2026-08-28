import React, {useContext} from "react";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import profilePhoto from "../../assets/images/profile-photo.jpg";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);

  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1
              className={isDark ? "dark-mode greeting-text" : "greeting-text"}
            >
              {" "}
              {greeting.title}{" "}
              <span className="wave-emoji">{emoji("👋")}</span>
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode greeting-text-p"
                  : "greeting-text-p subTitle"
              }
            >
              {greeting.subTitle}
            </p>
            <SocialMedia />
          </div>
        </div>
        <div className="greeting-image-div">
          <img
            alt="Edith Gu"
            src={profilePhoto}
            className="greeting-profile-photo"
          />
        </div>
      </div>
    </div>
  );
}
