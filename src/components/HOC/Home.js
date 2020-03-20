import React, { Component } from "react";
import { gsap } from "gsap";
import Title from "../../components/Title";

class Home extends Component {
  componentDidMount() {
    /* animate intro */
    gsap.to("#intro--hello", {
      duration: 1.5,
      delay: 0.5,
      ease: "elastic.out(1, 0.3)",
      y: "0px",
      opacity: 1
    });

    gsap.to("#intro--text", {
      duration: 2,
      delay: 2.5,
      ease: "elastic.out(1, 0.3)",
      y: "0px",
      opacity: 1
    });
  }

  render() {
    return (
      <div id="home__wrapper">
        <p id="intro--hello">Hello I'm</p>
        <Title size="h1" title="Vittoria" name={"home"}></Title>
        <p id="intro--text">
        Web designer and front-end developer. <br/>
        Currently working as a freelance, to find time for watching cartoons in the morning.<br/>
        </p>
      </div>
    );
  }
}

export default Home;
