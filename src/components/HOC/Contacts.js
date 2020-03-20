import React, { Component } from "react";
import { gsap } from "gsap";
import Title from '../../components/Title';
import "../../assets/scss/button.scss";
import "../../assets/scss/style.scss";

class Contact extends Component {

  componentDidMount() {

    /*animate p*/
    gsap.to("#intro--contacts", {
      duration: 2,
      delay: 2.5,
      ease: "elastic.out(1, 0.3)",
      y: "0px",
      opacity: 1
    })

    /* animate button */
    gsap.to("#send__button", {
      duration: 1.5,
      delay: 3.5,
      ease: "elastic.out(1, 0.3)",
      y: "10%",
      opacity: 1
    })


  }

  render() {
    const hoverFunct = () => {
      gsap.from("#send__button", {
        duration: 0.1,
        backgroundImage:
        "linear-gradient(90deg, rgba(229,42,111,1) 0%, rgba(229,42,111,1) 0%, #fad608 0%, #fad608 0%)"
      });
      gsap.to("#send__button", {
        duration: 1,
        ease: "bounce.out(1, 2)",
        backgroundImage:
          "linear-gradient(90deg, rgba(229,42,111,1) 0%, rgba(229,42,111,1) 100%, #fad608 100%, #fad608 100%)"
      });
      gsap.to("#send__button", {
        duration: 0.1,
        ease: "power4.out(1, 2)",
        color: "#ffffff"
      });
    };

    const leaveFunct = () => {
      gsap.to("#send__button", {
        duration: 1,
        ease: "back.out(1, 2)",
        backgroundImage:
          "linear-gradient(90deg, rgba(229,42,111,1) 0%, rgba(229,42,111,1) 0%, #fad608 0%, #fad608 0%)"
      });
      gsap.to("#send__button", {
        duration: 0.1,
        ease: "power4.out(0.1, 0.5)",
        color: ""
      });
    };

    return (

      <div id="contacts__wrapper">
        <Title
            size="h2"
            name={this.props.name}
            title="i hate forms"
          ></Title>
        <p id="intro--contacts">
          ...Therefore if you have any request, or if you're an african prince from whom I
          inherit some billions, feel free to send me an old fashion e-mail
        </p>
        <a
          href="mailto:mailbox@vittoriatoso.com"
          id="send__button"
          onMouseEnter={e => hoverFunct()}
          onMouseLeave={e => leaveFunct()}
        >
          Text me now
        </a>
      </div>
    );
  }
}

export default Contact;
