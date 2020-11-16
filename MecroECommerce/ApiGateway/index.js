import express from 'express';
import httpProxy from 'express-http-proxy';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';

const app = express();

// routes:
   // productModule:
   const pUri = httpProxy('http://mecroecommerce.products:7001/');
   app.get('/product/', (req, res, next) => { pUri(req, res, next) });
   app.get('/product/:id', (req, res, next) => { pUri(req, res, next) });

   //customersModule
   const cUri = httpProxy('http://mecroecommerce.customers:7002/')
   app.get('/customer/', (req, res, next) => { cUri(req, res, next) });
   app.get('/customer/:id', (req, res, next) => { cUri(req, res, next) });

 //customersModule
 const cUri = httpProxy('http://mecroecommerce.orders:7003/')
 app.get('/order/', (req, res, next) => { cUri(req, res, next) });
 app.get('/order/:id', (req, res, next) => { cUri(req, res, next) });


app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.listen(7000,()=> { 
    console.log('Api gateway is started : http://localhost:7000/')
}); 