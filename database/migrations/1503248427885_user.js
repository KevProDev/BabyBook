'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.string('name', 254).nullable()
      table.string('relationship', 254).nullable()
      table.text('profile_img', 254).nullable()
      table.string('baby_name', 254).nullable()
      table.text('baby_img', 254).nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
