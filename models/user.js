class User {

  constructor(user_id,first_name,last_name,user_name,password, email) {
    this.user_id = user_id
    this.first_name = first_name
    this.last_name = last_name
    this.user_name = user_name
    this.password = password
    this.email = email
  }

}

module.exports = User
