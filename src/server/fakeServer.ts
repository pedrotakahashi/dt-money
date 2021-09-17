import { createServer, Model } from 'miragejs';

export const fakeServer = () => {
  createServer({
    models: {
      transaction: Model,
    },

    seeds(server){
      server.db.loadData({
        transactions: [
          {
          id:1,
          title: "freelance website",
          type: 'deposit',
          category: 'Developer',
          amount: 6000,
          createdAt: new Date('2021-09-05 09:00'),
        },
          {
          id:2,
          title: "Aluguel",
          type: 'withdraw',
          category: 'Casa',
          amount: 1000,
          createdAt: new Date('2021-09-12 09:00'),
        }
      ]
      })
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
