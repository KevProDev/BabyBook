import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios"

export default class Posts extends Component {
  constructor() {
    super();
    this.state = {
      name: "Post Componet"
    };
  }


  async componentWillMount() {
    const self = this

    console.log("ComponetwillMount from Post.js");
    const GotGetData = await axios.get('/api/initialApp')
    .then(self.setPost)
  }

  getPost = async() => {
    const GotGetData = await axios.get('/api/initialApp')
    .then(this.setPost)
  }

  setPost = res => {
    this.setState({
      BabyPost: res.data
    }, () => {
      console.log(this.state, "setPost has fired & stored")
    })
  }

  componentWillReceiveProps(props) {
    console.log("componentWillReceiveProps in Post.js");
    const { refreshPost } = this.props;
    if (props.refreshPost !== refreshPost) {
      this.getPost()
     console.log("they are not equal")
    } else{
      console.log("They are the same");
    }
  }



  showLatestPosts = () => {

    const fire = console.log("Wait after SetPost");
    console.log(this.state);

    if(this.state.BabyPost == undefined){
      return(<div>Loading</div>)
    } else {
      return this.state.BabyPost.latestPosts.reverse().map((item, index) => {
        let post = item.posts
        let user = item.users
        let postImg = item.posts.image_url
        console.log("Post to html");

        return(<div className="update-container" key={index}>
          <div className="media">
            <div className="media__grey-container">
              <div className="author-info">
                <a href="#" className="user-img" style={{
                  backgroundImage: `url('${user.profile_img}')`
                }}/>
                <div className="info">
                  <a href="/profile">{`${user.name}`}</a> shared a <a href="#">{(post.type == 'text') ? 'story' : 'image'}</a>
                </div>
              </div>
              <div className="update-info">
                <h3>{post.title}</h3>
                <p>
                  {post.content}
                </p>
              </div>
            </div>
            <div className={`${(post.type === 'text') ? 'story' : 'image'}`} style={{background: `url('${postImg}')`, backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover" }} />
          </div>
          <div className="padding-container">
            <div className="grey-container">
              
              <div className="update-stats">
                <div className="icon-section">
                  <div className="like-circle">
                    <i className="fas fa-thumbs-up" />
                  </div>
                </div>
                <div className="other-users">
                  Chine Russell and 23 others liked update
                    </div>
                <div className="comments-stats">4 comments</div>
              </div>
              <div className="compose-comments">
                <textarea name="name" id cols={80} rows={8} defaultValue={""} />
                <div className="buttons">
                  <div className="repost-button">
                    <i className="fas fa-redo" />
                  </div>
                  <div className="like-button">
                    <i className="fas fa-thumbs-up" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>)

      })
      
    }
  }
  render() {
    console.log("Post Start");
    return (
      <section id="posts">
        {this.showLatestPosts()}
      </section>
    );
  }
}
