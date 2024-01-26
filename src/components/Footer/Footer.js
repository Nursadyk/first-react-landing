import React from "react";
import iconEmail from "../../images/icon-email.svg";
import iconMarker from "../../images/icon-marker.png";
import iconPhone from "../../images/icon-phone.svg";
import footerPuppy from "../../images/footer-puppy.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer-item">
            <h3 className="footer-item__title">
              For questions
              <br /> and suggestions
            </h3>
            <div className="footer-item__link-wrapper first">
              <img src={iconEmail} />
              <a className="footer-item__email" href="email@shelter.com">
                email@shelter.com
              </a>
            </div>
            <div className="footer-item__link-wrapper">
              <img src={iconPhone} />
              <span className="footer-item__email" href="email@shelter.com">
                +13 674 567 75 54
              </span>
            </div>
          </div>
          <div className="footer-item">
            <h3 className="footer-item__title">
              We are waiting <br /> for your visit
            </h3>
            <div className="footer-item__link-wrapper first">
              <img src={iconMarker} />
              <a className="footer-item__email" href="email@shelter.com">
                email@shelter.com
              </a>
            </div>
            <div className="footer-item__link-wrapper">
              <img src={iconMarker} />
              <span className="footer-item__email" href="email@shelter.com">
                +13 674 567 75 54
              </span>
            </div>
          </div>
          <div className="footer-item">
            <img src={footerPuppy} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
