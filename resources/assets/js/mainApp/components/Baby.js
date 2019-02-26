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


export default class Baby extends Component {
  constructor() {
    super();
    this.state = {
      name: "Joe",
   
    };
  }

  async componentWillMount() {

   
    const { match, location, history } = this.props.routeProps
    const self = this

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
          console.log(self.state, "baby getUser")
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
      baby_name: self.state.baby_name
      // gender: self.state.gender
    })
    .then(function (res) {
      console.log(res);
    })
  }

  handleChange = (event) => {
    const name = event.target.name
    const value = event.target.type == 'checkbox' ? event.target.checked : event.target.value

    this.setState({
      [name]: value
    }, () => {
      console.log("Handlechange", this.state)
    })
  }


  render() {
    if(this.state.userProfile == undefined) {
      return(<div>Loading</div>)
    } else {
      const {baby_name, baby_img} = this.state.userProfile
      console.log("baby render",this.state)
      return (
       
        <div className="content-area profile-page">
          <div className='info info-panel'>
            <label>Baby's Name</label>
            <h1>{`${baby_name}`}</h1>
            <div>
              <form>
                <input className="form_title" type="text" value={this.state.baby_name} name="baby_name" placeholder="Full Name Here" onChange={this.handleChange}/>
                <input className="form_title" type="text" name="gender" placeholder="Gender" onChange={this.handleChange}/>
                <button type="button" onClick={this.submitUserProfile}  >Save</button>
              </form>

            </div>
          </div>
          <div className='user-img'><img className="photo-reduce" src={baby_img}/></div>
        </div>
      );
      
    }
  }
}
