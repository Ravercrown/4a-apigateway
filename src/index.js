const { ApolloServer } = require('apollo-server');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const InvoicesAPI = require('./dataSources/invoices_api');
const UsersAPI = require('./dataSources/users_api');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        invoicesAPI: new InvoicesAPI(),
        usersAPI: new UsersAPI()
    }),
    introspection: true,
    playground: true
});

server.listen(process.env.PORT || 4000).then(({url})=>{
    console.log(`🚀 Server ready at ${url}`);
});