'use strict'

const User = use('App/Models/User');

class ProfileController {

  async update({auth,request,response}){

    const postData = request.post()
    const user_profile = await User.find(request.params.id)

    user_profile.name = postData.name
    user_profile.relationship = postData.relationship
    user_profile.baby_name = postData.baby_name


    user_profile.save()

    return "Saved successful"
  }

}

module.exports = ProfileController
