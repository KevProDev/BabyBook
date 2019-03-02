import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from 'axios'

export default class ComposeSection extends Component {
  constructor() {
    super();
    this.state = {
      
    };
  }

  submitForm = async () => {
    // console.log(this.state, "THIS STATE ------")
    var self = this

    if(!this.state.post_img){
      axios.post('/api/post', {
        post_title: self.state.post_title,
        content: self.state.post_content,
        user_id: self.props.initialData.userInfo.id,
        type: 'text',
      
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
          type:'image',
          image_url:url
          })
        })
    }

    




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

  handleFile = (event) => {
    let picName = event.target.name
    let file = event.target.files[0]
    this.setState({
      [picName]: file
    })

  
  }
  

  render() {
    console.log("compose start")
    console.log(this.props, "compose")
    if(this.props.initialData.userInfo == undefined) {
      return(<div>Loading</div>)
    } else {
      let user_img = this.props.initialData.userInfo.profile_img
      return (
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
      );
    }
  }
}
