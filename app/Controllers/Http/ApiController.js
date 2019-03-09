'use strict'

const Post = use('App/Models/Post'); 

class ApiController {
  async initialApp({auth}){

    // console.log('post database')
    // console.log(Post.all())

    try{

      const latestPosts = await Post.query().innerJoin('users', 'users.id', 'posts.user_id').options({nestTables:true}).fetch()
      
      console.log(latestPosts.toJSON())
      // const latestPosts = await Post.query().where('user_id', '=', '1').fetch()
      
     
      return {
        userInfo: auth.user,
        latestPosts
        
      }

      
    } catch(error){
      console.log(Error)
    }
 
  }
}

module.exports = ApiController
