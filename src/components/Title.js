import React, { Component } from "react";
import { gsap } from "gsap";
import Highlight from "./Highlight";
import "../assets/scss/style.scss";

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    /* animate title */
    /* create single letters from title */

    const splittedTitle = document.getElementById("title__" + this.props.size + "--" + this.props.name);
    splittedTitle.innerHTML = splittedTitle.textContent.replace(
      /\S/g,
      "<div class='letter--"+ this.props.size +" letter' style='display: inline-block'>$&</div>"
    );
    /* animate single letters*/
    const singleLetters = document.querySelectorAll(".letter");
    for (var i = 0; i < singleLetters.length; i++) {
      gsap.to(singleLetters[i], {
        duration: 2,
        delay: 0.8 + [i] * 0.02,
        ease: "elastic.out(1, 0.3)",
        y: "0px",
        opacity: 1
      });
    }

  }

  render() {
    return (
      <div className="title__wrapper">
        <div id={"title__" + this.props.size + "--" + this.props.name}>{this.props.title}</div>
        <Highlight width={this.state.title}></Highlight>
      </div>
    );
  }
}

export default Title;
