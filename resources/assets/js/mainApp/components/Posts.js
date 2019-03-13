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


  async componentDidMount() {
    const self = this
    this.getDataFromProps()

    console.log("POST: ComponetDidMount");
    console.log(' POST: ComponetDidMount : PROPS',this.props);
    console.log(' POST: ComponetDidMount : State',this.state);
    // console.log(' POST: Grab Data from database');
    // console.log('_______________________________')
    // const GotGetData = await axios.get('/api/initialApp')
    // .then(self.setPost)
    // console.log(' POST: ComonentDidMount : DATA has been set to state');
  }

  getDataFromProps(){
    this.setState({
      BabyPost: this.props.BabyData
    })
  }

  // getPost = async() => {
  //   const GotGetData = await axios.get('/api/initialApp')
  //   .then(this.setPost)
  //   .then(this.showLatestPosts)

  //   console.log("POST: getPost : State ->",this.state)
  //   console.log('_______________________________')
  // }

  // setPost = res => {
  //   this.setState({
  //     BabyPost: res.data
  //   }, () => {
  //     console.log("POST: setPOST : Got Data from database & store BabyPost: State ->",this.state)
  //     console.log('_______________________________')
  //   })
  // }

  upDatePost(nextProps){
    this.setState({
      BabyPost: nextProps.BabyData
    }, () => {
      console.log("POST: upDatePOST : Got Data from PROPS & store BabyPost: State ->", this.state)
      console.log('_______________________________')
    }) 
  }

  componentWillReceiveProps(nextProps) {
    console.log("POST: componentWillReceiveProps");
    console.log('_______________________________')
    const { BabyData } = this.props;
    if (BabyData.latestPosts.length !== nextProps.BabyData.latestPosts.length) {
      this.upDatePost(nextProps)
     console.log("POST: They are not equal")
     console.log('________________________')
    } else{
      console.log("POST: They are the same");
      console.log('_______________________')
    }
  }


  


  shouldComponentUpdate(nextProps){
    const { BabyData } = this.props;
    if((this.props.handleChangePostTitle !== nextProps.handleChangePostTitle)||(this.props.handleChangePostContent !== nextProps.handleChangePostContent)) {
      console.log("POST: shouldComponentUpdate - Do NOT Update");
      console.log('___________________________________________')

      // if(BabyData.latestPosts.length !== nextProps.BabyData.latestPosts.length)
      return false
    } else{
      console.log("POST: shouldComponentUpdate - Do Update");
      console.log('___________________________________________')
      return true
    }

  }


  

  showLatestPosts = () => {
    
    
    const fire = console.log("POST: showlastestPost : Wait after SetPost");
    console.log("POST: showlastestPost : State->",this.state);
    console.log('___________________________________________')

    if(this.state.BabyPost == undefined){
      return(<div>Loading</div>)
    } else {
      return this.state.BabyPost.latestPosts.reverse().map((item, index) => {
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
    console.log("Post: Render");
    return (
      <section id="posts">
        {this.showLatestPosts()}
      </section>
    );
  }
}
