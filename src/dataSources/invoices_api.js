const { RESTDataSource } = require("apollo-datasource-rest");
const serverConfig = require("../server");

class InvoicesAPI extends RESTDataSource{

    constructor(){
        super();
        this.baseURL = serverConfig.invoices_and_buys_api_url;
    }

    async invoiceByNumInvoice(numInvoice){
        return await this.get(`/invoices/${numInvoice}`);
    }

    async invoicesCreateRequest(invoiceData){
        return await this.post(`/invoices/`, invoiceData);
    }
}

module.exports = InvoicesAPI;