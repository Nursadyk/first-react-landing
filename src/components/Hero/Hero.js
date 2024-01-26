import React from "react";
import puppy from "../../images/puppy.png";
const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__left">
            <h1 className="hero__title">Not only people need a house</h1>
            <p className="hero__left-text">
              We offer to give a chance to a little and nice puppy with an
              extremely wide and open heart. He or she will love you more than
              anybody else in the world, you will see!
            </p>
            <div className="hero__link-wrapper">
              <a className="hero__links">Make a friend</a>
            </div>
          </div>
          <div className="hero__right">
            <img src={puppy} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
