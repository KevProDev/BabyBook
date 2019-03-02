'use strict'

const Post = use("App/Models/Post");
// const Cloudinary = use('Cloudinary')

class PostController {

  async store({auth,request,response}){



    // Once a request comes in, store it in the database
    const newPost = await Post.create({
      title: request.input('post_title'),
      content: request.input('content'),
      user_id: auth.user.id,
      type: request.input('type'),
      image_url:request.input('image_url')
    })


    // const latestPosts = await Post.query().where('user_id', '=', '1').fetch()

    return "save was successful"
  }
  async readback({auth}){

    // const latestPosts = await Post.query().where('user_id', '=', '1').fetch()

    // resonse.send({
    //     latestPosts

    //   }) 
  }
  async update(){
    return request.post()  
  }
  async destroy(){
    return 'destroyed' 
  }
}

module.exports = PostController
