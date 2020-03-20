import React, { Component } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import Title from "../../components/Title";
import { portraitAnimate } from "../../assets/js/mainScript";
import "../../assets/scss/style.scss";

import image from "../../assets/img/portrait.png";

class About extends Component {

  componentDidMount() {
    portraitAnimate();
    /*animate p*/
    gsap.to("#intro--about", {
      duration: 2,
      delay: 2.5,
      ease: "elastic.out(1, 0.3)",
      y: "0px",
      opacity: 1
    });

    /*animate img*/
    gsap.to(".img__bg", {
      duration: 0.4,
      delay: 1.6,
      ease: "bounce.easeOut",
      scale: 9,
      opacity: 1
    });
    gsap.to(".img__bg2", {
      duration: 0.5,
      delay: 1.7,
      ease: "bounce.easeOut",
      scale: 9,
      opacity: 1
    });
    gsap.to(".img__portrait", {
      duration: 0.5,
      delay: 2,
      opacity: 1
    });
  }

  render() {
    return (
      <div id="about__wrapper">
        <Title size="h2" name={this.props.name} title="About"></Title>
        <p id="intro--about">
        For the last seven years, I've been a 
        <Link to="/skills" className="link--inpage">&nbsp;
            <span className="link--inpage__inner"> </span>
             web designer
          </Link>.&nbsp;
          As integration to my designer role, I have been         
        <Link to="/skills" className="link--inpage">&nbsp;
            <span className="link--inpage__inner"> </span>
             developing
          </Link>&nbsp;interfaces, plugins and themes for WP.<br/>
        Recently I moved into the exciting world of&nbsp;
<Link to="/skills" className="link--inpage">
            <span className="link--inpage__inner"> </span>
            javascript front-end 
          </Link>&nbsp;approaches, so I can realize my dream of becoming like <a href="https://en.wikipedia.org/wiki/The_Rocky_Horror_Show" target="_blank" rel="noopener noreferrer" className="link--inpage">doctor Frank-N-Furter</a>, designing and giving life to my creations.<br/>
I'm always looking for new challenges, in the meantime I design silly t-shirts and try to build an app that helps me to manage my always empty fridge.
</p>
        <div className="img__wrapper">
          <div className="img__bg2"></div>
          <div className="img__bg"></div>
          <img src={image} alt="portrait" className="img__portrait" />
        </div>
      </div>
    );
  }
}

export default About;
