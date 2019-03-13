import React, { Component } from "react";
import ReactDOM from  'react-dom'
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'
import axios from "axios"
// import ComposeSection from "./ComposeSection";
import Posts from "./Posts";


export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: "Kevin",
      NewBabyPostCycle: ""
   
    };
  }

  async componentDidMount() {
    console.log(' HOME: componetDidMount')
    console.log(' HOME: componetDidMount : PROPS',this.props);
    console.log(' HOME: componetDidMount : Grab Data from database');
    console.log('________________________')
    const self = this;
    const GotGetData = await axios.get('/api/initialApp')
    .then(self.refreshData)
    console.log(' HOME: componetDidMount : DATA has been set to state')
    
  }

  refreshData = res => {
    this.setState({
      BabyPost: res.data
    }, () => {
      console.log( "HOME: refreshData : Got Data from database set to state",this.state)
      console.log('_____________________________________________________________')
    })
  }

  refreshPost = (res) => {
    this.setState({
      BabyPost: res.data
    }, () => {
      console.log("HOME: refreshPost : Got Data from database & store NewBabyPostCyle chnage to babyPost",this.state);
      console.log('_____________________________________________________________')
    })
  }
  
  submitForm = async () => {
    // console.log(this.state, "THIS STATE ------")
    var self = this

    if(!this.state.post_img){
      await axios.post('/api/post', {
        post_title: self.state.post_title,
        content: self.state.post_content,
        user_id: self.props.initialData.userInfo.id,
        type: 'text',
      
        })
        .then(this.refreshPost)
        .then(function(){
          console.log("HOME: submitForm: AFTER posting getting refreshPost back",self.state );
          console.log("_______________________________________________________");
        })
        
    } else {
        // Where the POST Request will be sent to for AXIOS
      let url = 'https://api.cloudinary.com/v1_1/kevpro/image/upload';
      
      
      // Getting the file ready to be sent to be uploaded to Cloundinary with AXIOS 
      let fd = new FormData();
      fd.append("upload_preset", "xkuuysjv");
      fd.append("file",this.state.post_img);
  
      // Allows us to send files & text
      const config = {
        headers: { "content-type": "multipart/form-data"}
      }


      // Send files cloundinary
      const post = await axios.post(url,fd,config)
      // Once the url comes back start another AXIOS Post request to PostController to save the data and the url to the database 
        .then(function (res) {
          
          var answer = res.data;
          var url = answer.secure_url
          console.log(url)
          axios.post('/api/post', {
          post_title: self.state.post_title,
          content: self.state.post_content,
          user_id: self.props.initialData.userInfo.id,
          type: "image",
          image_url:url
          })
          .then(self.refreshPost)
      
        })
        .then(function(){
          console.log("HOME: submitForm : AFTER POST with IMG");
          console.log("___________________________________________");
        })
        // .then(this.refreshPost)
   
    }

  }


  handleChange = (event) => {
    const name = event.target.name
    const value = event.target.type == 'checkbox' ? event.target.checked : event.target.value

    this.setState({
      [name]: value
    })
  }

  handleFile = (event) => {
    let picName = event.target.name
    let file = event.target.files[0]
    this.setState({
      [picName]: file
    })

  
  }


  render() {
    console.log("HOME: RENDER",this.state)
    console.log("________________________")
    if(this.state.BabyPost == undefined) {
      return(<div>Loading</div>)
    } else {
      let user_img = this.state.BabyPost.userInfo.profile_img
    return (
     
            <div className="content-area">
              <section className="compose-section">   
                 <input className="post_title" type="text" name="post_title" onChange={this.handleChange} placeholder="Title"/>
                 <textarea name="post_content" id cols={80} rows={8} defaultValue={""} onChange={this.handleChange} placeholder="Whats happenning" />
                 <input type="file" name="post_img" style={{display: 'none'}} ref={fileInput => this.fileInput = fileInput} onChange={this.handleFile}/>
              
                 <div className="user-img" style={{background: `url('${user_img}')`, backgroundRepeat:"no-repeat", backgroundPosition: "center center", backgroundSize: "cover"}} />
                 <div className="buttons">
                   <div className="button photo-btn">
                     <i className="fas fa-camera-retro" name="post_img" onClick={() => this.fileInput.click() } onChange={this.handleFile} />
                   </div>
                   {/* <div className="button video-btn">
                     <i className="fas fa-video" />
                   </div> */}
                   <div className="button send-btn" onClick={this.submitForm} >
                     <i className="fas fa-paper-plane" />
                   </div>
                 </div> 
              </section>
              <Posts 
              BabyData={(this.state.BabyPost == undefined) ? 'loading' : this.state.BabyPost } 
              refreshPost={this.state.refreshPost} 
              handleChangePostTitle={this.state.post_title } 
              handleChangePostContent={this.state.post_content}
              handleChangePostImg={this.state.post_img}
               />
            </div>
    );}
  }
}
