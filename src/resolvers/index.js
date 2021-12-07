const invoicesResolver = require('./invoices_resolvers');
const usersResolver = require('./users_resolvers');
const lodash = require('lodash');

const resolvers = lodash.merge(invoicesResolver, usersResolver);

module.exports = resolvers;