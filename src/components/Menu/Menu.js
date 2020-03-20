import React, { Component } from 'react';
import {Link } from 'react-router-dom';

class Menu  extends Component {
    render() {
        return (
          <div  id="menu__wrapper">
            <ul className="menu__ul">
            <li className="menu__li"><Link to={'/'} className="nav-link"> Home </Link></li>
            <li className="menu__li"><Link to={'/skills'} className="nav-link">Skills</Link></li>
            <li className="menu__li"><Link to={'/contacts'} className="nav-link">Contact me</Link></li>
            </ul>
          </div>
        );
      }
    }

export default Menu;