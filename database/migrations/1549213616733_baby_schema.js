'use strict'

const Schema = use('Schema')

class BabySchema extends Schema {
  up () {
    this.create('babies', (table) => {
      table.increments()
      table.text('first_name')
      table.text('last_name')
      table.text('gender')
      table.timestamps()
    })
  }

  down () {
    this.drop('babies')
  }
}

module.exports = BabySchema
