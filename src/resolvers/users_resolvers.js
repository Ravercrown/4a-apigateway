const usersResolver = {
    Query: {
        usersVacaCoinById: async (_, { id }, { dataSources }) => {
            return await dataSources.usersAPI.usersVacaCoinById(id);
        }
    },

    Mutation: {
        logIn: async (_, { credentials }, { dataSources }) => {
            return await dataSources.usersAPI.usersLogInRequest(credentials);
        },

        singUp: async (_, { singUpData }, { dataSources }) => {
            return await dataSources.usersAPI.userSingUpRequest(singUpData);
        }
    }
}

module.exports = usersResolver;