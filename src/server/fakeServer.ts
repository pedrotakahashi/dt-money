import { createServer, Model } from 'miragejs';

export const fakeServer = () => {
  createServer({
    models: {
      transaction: Model,
    },

    routes() {
      this.namespace = 'api';
      
      this.get('/transactions' , () => {
        return this.schema.all('transaction');
      })

      this.post('/transactions', (schema, request) => {
        const data = JSON.parse(request.requestBody);
        return schema.create('transaction', data);
      })

    }
  });
}

export default fakeServer;
