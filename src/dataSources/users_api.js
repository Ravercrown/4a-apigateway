const { RESTDataSource } = require("apollo-datasource-rest");
const serverConfig = require("../server");

class UsersAPI extends RESTDataSource{

    constructor(){
        super();
        this.baseURL = serverConfig.users_and_programs_api_url;
    }

    async usersLogInRequest(credentials){
        return await this.post('/rest-auth/login/', credentials);
    }

    async userSingUpRequest(user){
        return await this.post('/rest-auth/registration/', user);
    }

    async usersVacaCoinById(id){
        return await this.get(`/users/retrieve-update-destroy/${id}`);
    }
}

module.exports = UsersAPI;