import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Messenger extends Component {
  constructor() {
    super();
    this.state = {
      name: "Joe"
    };
  }
  clickedBtn = () => {
    console.log("swag");
  };
  render() {

    if(this.props.initialData.userInfo == undefined) {
      return(<div>Loading</div>)
    } else {

      const {baby_name} = this.props.initialData.userInfo
      const {relationship} = this.props.initialData.userInfo
      const {baby_img} = this.props.initialData.userInfo
      console.log(this.props, "Right baby")

      return (
        <div className="content-area baby-panel">
          <div className='info'>
            <label>Baby Name</label>
            <h1>{`${baby_name}`}</h1>
            <label>Realationship with baby</label>
            <h1>{`${relationship}`}</h1>
          </div>
          <div className='user-img'><img src={baby_img} /></div>
        </div>
      );
    }
  }
}
