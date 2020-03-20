import React, { Component } from "react";
import { gsap } from "gsap";
import Title from "../../components/Title";

class Skills extends Component {
  componentDidMount() {
    /* animate column */
    const singleColumn = document.getElementsByClassName("skills__ul");
    for (var i = 0; i < singleColumn.length; i++) {
      gsap.to(singleColumn[i], {
        duration: 0.4,
        delay: 2.5,
        y: "0px",
        opacity: 1
      });
    }
  }

  render() {
    return (
      <div id="skills__wrapper">
        <Title
          size="h2"
          name={this.props.name}
          title="skills"
        ></Title>

        <div id="skills__lists__wrapper">
          <ul className="skills__ul">
            <h3 className="skills__ul--title">Design</h3>
            <li>UX</li>
            <li>App structure</li>
            <li>UI design</li>
          </ul>

          <ul className="skills__ul">
            <h3 className="skills__ul--title">Coding</h3>
            <li>HTML5</li>
            <li>CSS3 with LESS/SCSS</li>
            <li>JavaScript</li>
            <li>React, Redux</li>
            <li>basic PHP</li>
          </ul>

          <ul className="skills__ul">
            <h3 className="skills__ul--title">Honorable mentions</h3>
            <li>Beer lover</li>
            <li>Inappropriate humor</li>
            <li>Android side</li>
            <li>I'm not a robot</li>
          </ul>

        </div>
      </div>
    );
  }
}

export default Skills;
