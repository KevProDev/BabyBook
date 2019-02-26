import React, { Component } from "react";
import ReactDOM from  'react-dom'
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'
import axios from "axios"
import ComposeSection from "./ComposeSection";
import Posts from "./Posts";


export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: "Joe",
   
    };
  }

  async componentWillMount() {

    this.setState({
      initialData: this.props.initialData
    }, () => {
      console.log(this.props, "Home method componet will mount")
    })

  }

  clickedBtn = () => {
    console.log("swag");
  };

  render() {
    // console.log("render index")
    // console.log(this.state.initialData)
    return (
     
            <div className="content-area">
              <ComposeSection initialData={(this.state.initialData == undefined) ? 'loading' : this.state.initialData } />
              <Posts initialData={(this.state.initialData == undefined) ? 'loading' : this.state.initialData }/>
            </div>
    );
  }
}
