const { gql } = require('apollo-server-cloudflare')

module.exports = gql`
  type auth0_profile {
      email: String
      picture: String
      username: String
      given_name: String
      family_name: String
      name: String
      last_ip: String
      last_login: String
    }

  type Query {
    auth0 (auth0_id: String): auth0_profile
  }
`
