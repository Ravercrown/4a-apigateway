const { gql } = require('apollo-server');

const invoicesTypeDef = gql`
    type Invoice {
        numInvoice: Int
        date: String
        project: String!
        userCreator: String!
        userCostumer: String!
        valueUnit: Float!
        quantity: Int!
        valueTotal: Float
    }

    input InvoiceInput {
        project: String!
        userCreator: String!
        userCostumer: String!
        valueUnit: Float!
        quantity: Int!
    }

    type Query {
        invoiceByNumInvoice(numInvoice: Int): Invoice
    }

    type Mutation {
        invoicesCreateRequest(invoiceData: InvoiceInput!): Invoice!
    }
`;

module.exports = invoicesTypeDef;