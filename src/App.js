import React from "react";
import "./assets/scss/style.scss";
import { cursorScript } from "./assets/js/mainScript";
import { BrowserRouter as Router, Route, NavLink  } from "react-router-dom";
import { Transition } from "react-transition-group";
import { gsap } from "gsap";
/* components */
import Social from "./components/Social/Social";
import Home from "./components/HOC/Home";
import About from "./components/HOC/About";
import Skills from "./components/HOC/Skills";
import Contacts from "./components/HOC/Contacts";
import Console from "./components/Console"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      autoAlpha: 1,
      x: ""
    };
  }

  componentDidMount() {
    cursorScript();
  }

  /* define path for menu and switch */
  render() {
    const routes = [
      { path: "/", name: "Home", Component: Home },
      { path: "/about", name: "About", Component: About },
      { path: "/skills", name: "Skills", Component: Skills },
      { path: "/contacts", name: "Contacts", Component: Contacts }
    ];

    return (
      <Router>
        <div id="circle-follow" className="circle__follow--style"></div>
        <div id="app__wrapper">
          <div id="menu__wrapper">
            <ul className="menu__ul">
              {routes.map(route => (
                <li className="menu__li" key={route.path}>
                  <NavLink  key={route.path} exact to={route.path} className="nav-link" activeClassName="active">
                    {route.name}
                  </NavLink >
                </li>
              ))}
            </ul>
          </div>
          <div id="app__content">
            {routes.map(({ path, name, Component }) => (
              <Route key={path} exact path={path} name={name}>
                {({ match }) => (
                  <Transition
                    in={match != null}
                    timeout={800}
                    /* animation entering component */
                    onEnter={(node, done) => {
                      gsap.to("#highlight", {
                        duration: 1.5,
                        delay: 1.4,
                        ease: "bounce.out",
                        width: "100vw",
                        alignSelf: "flex-start"
                      });
                    }}
                    /* animation exiting component */
                    onExit={(node, done) => {
                      gsap.to("#highlight", {
                        delay: 0.2,
                        duration: 0.5,
                        ease: "ease.in",
                        width: "0vw",
                        alignSelf: "flex-end"
                      });
                    }}
                    /* when move from one component to another one */
                    addEndListener={(node, done) => {
                      gsap.to(node, {
                        delay: 0.3,
                        duration: 1,
                        ease: "Power4.easeInOut",
                        autoAlpha: match ? 1 : 0,
                        y: match ? 0 : 150,
                        onComplete: done
                      });
                    }}
                    /* when finish animation of exiting, unmount */
                    unmountOnExit
                  >
                    <Component name={name} />
                  </Transition>
                )}
              </Route>
            ))}
          </div>
          <Social></Social>
          <Console></Console>
        </div>
      </Router>
    );
  }
}

export default App;
