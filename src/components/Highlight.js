import React, { Component } from "react";
import { gsap } from "gsap";

import "../assets/scss/style.scss";

class Highlight extends Component {

  componentDidMount() {
    /* animate highlight */
    gsap.to("#highlight", {
      duration: 1.5,
      delay: 1.4,
      ease: "bounce.out",
      width: "100vw",
      alignSelf: "flex-start",
      opacity: 1,
    });
  }

  render() {
    return <div id="highlight"></div>;
  }
}

export default Highlight;
