'use strict'

const Baby = use('App/Models/Baby');

class BabyController {

  async createBaby({auth,request,response}){

    const baby_profile = await Baby.create({
      first_name: request.input('first_name'),
      last_name: request.input('last_name'),
      gender: request.input('gender')

    })

    return "Saved successful"
  }


  async updateBaby({auth,request,response}){

    // const postData = request.post()
    // const baby_profile = await Babies.find(request.params.id)

    // baby_profile.first_name = postData.first_name
    // baby_profile.last_name = postData.last_name
    // baby_profile.gender = postData.relationship


    // baby_profile.save()

    return "Saved successful"
  }

  async viewBaby({auth}){

    const baby_profile = await Babies.query().where('id', '=', '1').fetch()

   
  }
}

module.exports = BabyController
