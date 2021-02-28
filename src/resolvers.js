
module.exports = {
  Query: {
    auth0: async (_source, { auth0_id }, { dataSources }) => {
      return dataSources.auth0Profile.getProfileInfo(auth0_id)
    }
  },
}
