import React from "react";
import arrowLeft from "../../images/arrowLeft.png";
import arrowRight from "../../images/arrowRight.png";
import teamImg1 from "../../images/teamImg1.png";
import teamImg2 from "../../images/teamImg2.png";
import teamImg3 from "../../images/teamImg3.png";
const Team = () => {
  return (
    <section className="team">
      <div className="container">
        <h2 className="section-title">
          Our friends who <br /> are looking for a house
        </h2>
        <div className="team__inner">
          <img src={arrowLeft} />
          <div className="team-item">
            <div className="about-item__img-wrapper">
              <img src={teamImg1} />
              <h4 className="about-item__title">Katrine</h4>
              <div className="about-item__link-wrapper">
                <a className="about-item__links">Learn more</a>
              </div>
            </div>
          </div>
          <div className="team-item">
            <div className="about-item__img-wrapper">
              <img src={teamImg2} />
              <h4 className="about-item__title">Katrine</h4>
              <div className="about-item__link-wrapper">
                <a className="about-item__links">Learn more</a>
              </div>
            </div>
          </div>
          <div className="team-item">
            <div className="about-item__img-wrapper">
              <img src={teamImg3} />
              <h4 className="about-item__title">Katrine</h4>
              <div className="about-item__link-wrapper">
                <a className="about-item__links">Learn more</a>
              </div>
            </div>
          </div>
          <img src={arrowRight} />
        </div>
        <div className="about__link-wrapper">
          <a className="about__link">Get to know the rest</a>
        </div>
      </div>
    </section>
  );
};

export default Team;
