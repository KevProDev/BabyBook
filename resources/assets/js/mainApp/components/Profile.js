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


export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
   
    };
  }

  async componentWillMount() {

   
    const { match, location, history } = this.props.routeProps
    const self = this

    console.log(this.props, "profile will mount");

    const getUser = async function(){
      
      try{
        const userProfile = await axios.get(`/api/user/${match.params.id}`)
        console.log(userProfile);
        self.setState({
          initialData: self.props.initialData,
          userProfile: userProfile.data.user[0],
          following: userProfile.data.following
        }, () => {
          console.log("Profile")
          console.log(self.state)
        })
      }catch(error){
        console.log(error)
      }
    
    }
    getUser() 

  }

  submitUserProfile = async () => {
    const { match, location, history } = this.props.routeProps
    var self = this

    axios.post(`/api/profile/${match.params.id}`, {
      name: this.state.name,
      relationship: this.state.relationship
      // relationship: this.state.relationship_title

    })
    // .then(function (res) {
    //   console.log(res);
    // })
  }

  handleChange = (event) => {
    const name = event.target.name
    const value = event.target.type == 'checkbox' ? event.target.checked : event.target.value

    this.setState({
      [name]: value
    })
    //  () => {
    //   console.log("Handlechange", this.state)
    // })
  }


  render() {
    if(this.state.userProfile == undefined) {
      return(<div>Loading</div>)
    } else {
      const {name, profile_img, relationship} = this.state.userProfile
      return (
       
        <div className="content-area profile-page">
          
          <div className='info info-panel'>
            <label>Full Name</label>
            <h1>{`${name}`}</h1>
            <label>Realationship with baby</label>
            <h1>{`${relationship}`}</h1>
            <div>
              <form>
                <input className="form_title" type="text" value={this.state.name} name="name" placeholder="Full Name Here" onChange={this.handleChange}/>
                <input className="form_title" type="text" value={this.state.relationship} name="relationship" placeholder="Relationship with the baby" onChange={this.handleChange}/>
                <input className="form_title" type="email" name="email_title" placeholder="Email"/>
                <input className="form_title" type="password" name="password_title" placeholder="Password"/>
                <button type="button" onClick={this.submitUserProfile}>Update</button>
              </form>

            </div>
          </div>
          <div className='user-img'><img src={profile_img}/></div>
        </div>
      );
      
    }
  }
}
