import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Posts extends Component {
  constructor() {
    super();
    this.state = {
      name: "Postdide"
    };
  }
  clickedBtn = () => {
    console.log("swag");
  };

  showLatestPosts = () => {
    if(this.props.initialData.latestPosts != undefined) {
      return this.props.initialData.latestPosts.reverse().map((item, index) => {
        let post = item.posts
        let user = item.users
        let postImg = item.posts.image_url

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
            <div className={`${(post.type == 'text') ? 'story' : 'image'}`} style={{background: `url('${postImg}')`, backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover" }} />
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
    return (
      <section id="posts">
        {this.showLatestPosts()}
      </section>
    );
  }
}
