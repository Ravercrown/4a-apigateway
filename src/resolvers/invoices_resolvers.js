const invoicesResolver = {
    Query: {
        invoiceByNumInvoice: async (_, { numInvoice }, { dataSources }) => {
            return await dataSources.invoicesAPI.invoiceByNumInvoice(numInvoice);
        }
    },

    Mutation: {
        invoicesCreateRequest: async (_, { invoiceData }, { dataSources }) => {
            return await dataSources.invoicesAPI.invoicesCreateRequest(invoiceData);
        }
    }
}

module.exports = invoicesResolver;