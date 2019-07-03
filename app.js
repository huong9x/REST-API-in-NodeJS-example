const Koa              = require('koa');
const cors             = require('@koa/cors');
const app              = new Koa();
const database         = require('./database/database');
const config           = require('./knexfile')
const knex             = require('knex')(config);
const BookProvider     = require('./resources/Book/BookProvider');
const CategoryProvider = require('./resources/Category/CategoryProvider');
const router           = require('./api/router')
const bodyParser       = require('koa-bodyparser');


app.use(cors());
app.use(BookProvider(knex));
app.use(CategoryProvider(knex));
app.use(bodyParser());
app.use(database.connectionProvider(config));
app.use(router.routes());


app.listen(process.env.PORT, () => {
    console.log('Your REST API is ready to use on port', process.env.PORT);
});
