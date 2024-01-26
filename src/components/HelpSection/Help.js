import React from "react";
import helpImg1 from "../../images/helpImg1.svg";
import helpImg2 from "../../images/helpImg2.svg";
import helpImg3 from "../../images/helpImg3.svg";
import helpImg4 from "../../images/helpImg4.svg";
import helpImg5 from "../../images/helpImg5.svg";
import helpImg6 from "../../images/helpImg6.svg";
import helpImg7 from "../../images/helpImg7.svg";
import helpImg8 from "../../images/helpImg8.svg";
import helpImg9 from "../../images/helpImg9.svg";
import help from "../../images/help.png";
import creditCard from "../../images/credit-card.svg";
const Help = () => {
  return (
    <section className="help">
      <div className="help__top">
        <div className="container container-little">
          <h4 className="section-title">
            How you can help <br /> our shelter
          </h4>
          <div className="help__inner">
            <div className="help-item">
              <img src={helpImg1} />
              <h4 className="help__title">Pet food</h4>
            </div>
            <div className="help-item">
              <img src={helpImg2} />
              <h4 className="help__title">Transportation</h4>
            </div>
            <div className="help-item">
              <img src={helpImg3} />
              <h4 className="help__title">Toys</h4>
            </div>
            <div className="help-item">
              <img src={helpImg4} />
              <h4 className="help__title">Bowls and cups</h4>
            </div>
            <div className="help-item">
              <img src={helpImg5} />
              <h4 className="help__title">Shampoos</h4>
            </div>
            <div className="help-item">
              <img src={helpImg6} />
              <h4 className="help__title">Vitamins</h4>
            </div>
            <div className="help-item">
              <img src={helpImg7} />
              <h4 className="help__title">Medicines</h4>
            </div>
            <div className="help-item">
              <img src={helpImg8} />
              <h4 className="help__title">Collars / leashes</h4>
            </div>
            <div className="help-item">
              <img src={helpImg9} />
              <h4 className="help__title">Sleeping areas</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="help__bottom">
        <div className="container container-little">
          <div className="help__bottom-inner">
            <div className="help__bottom-left">
              <img src={help} />
            </div>
            <div className="help__bottom-right">
              <h3 className="help__bottom-title">
                You can also make a donation
              </h3>
              <h4 className="help__bottom-subtitle">
                Name of the bank / Type of bank account
              </h4>
              <div className="phone-wrapper">
                <img src={creditCard} />
                <span className="phone-number">8380 2880 8028 8791 7435</span>
              </div>
              <p className="help__bottom-text">
                Legal information and lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Maecenas a ipsum at libero sagittis dignissim
                sed ac diam. Praesent ultrices maximus tortor et vulputate.
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Help;
