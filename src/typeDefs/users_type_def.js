const { gql } = require('apollo-server');

const usersTypeDef = gql`
    input LogInInput {
        username: String!
        password: String!
    }

    input SingUpInput {
        username: String!
        password1: String!
        password2: String!
        email: String
    }

    type Token {
        key: String!
    }

    type User {
        id: Int!
        username: String
        email: String
    }

    type UserVacaCoin {
        id: Int!
        name: String
        last_name: String
        role: String
        user: User
        is_active: Boolean
    }

    type Query {
        usersVacaCoinById(id: Int!): UserVacaCoin
    }

    type Mutation {
        logIn(credentials: LogInInput!): Token!
        singUp(singUpData: SingUpInput): Token!
    }
`;

module.exports = usersTypeDef;