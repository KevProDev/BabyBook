import React, { Component } from "react";
import ReactDOM from "react-dom";
import Axios from "axios";

export default class LeftMenu extends Component {
  constructor() {
    super();
    this.state = {
      dropdown: false
    };
  }


  clickedDropdown = () => {
    this.setState({
      dropdown: !this.state.dropdown
    })
  };
  render() {

    if(this.props.initialData.userInfo == undefined) {
      return(<div>Loading</div>)
    } else {

      const {name} = this.props.initialData.userInfo
      const user_id = this.props.initialData.userInfo.id
      console.log(this.props, "LEftMenu: Render")
      console.log("____________________________")

      return (
        <section id="left-menu">
          <div className="account-dropdown">
            <div className="logo">
            <a href="/">
              <i className="fab fa-typo3" />
            </a>{" "}
              
            </div>
            <div className="name" >
            <a href={`/`}>{`${name}`}</a>{" "}
            </div>
            <div className={`dropdown ${this.state.dropdown ? 'active' : ''} `}>
              <nav>
                <a href="/account">account</a>
                <a href="/logout">logout</a>
              </nav>
            </div>
          </div>
          <div className="groups">
            <div className="group">
              <div className="title">My Account</div>
              <ul>
                <li>
                  <a href="/logout">Logout</a>{" "}
                </li>
                <li>
                  <a href={`/profile/${user_id}`}>Profile</a>{" "}
                </li>
                <li>
                <a href={`/mybaby/${user_id}`}>My Baby</a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </section>
    );
    }
    
  }
}
