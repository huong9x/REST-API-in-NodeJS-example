const Koa             = require('koa');;
const app             = new Koa();
const database        = require('./database/database');
const config          = require('./knexfile')
const knex            = require('knex')(config);
const ProductProvider = require('./Product/ProductProvider');
const router          = require('./api/router')
const bodyParser      = require('koa-bodyparser');


app.use(ProductProvider(knex));
app.use(bodyParser());
app.use(database.connectionProvider(config));
app.use(router.routes());


app.listen(process.env.PORT, () => {
    console.log('Your REST API is ready to use on port', process.env.PORT);
});
