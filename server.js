import Express from 'express';
import GraphHTTP from 'express-graphql';
import Schema from "./schema";

// Config

const APP_PORT = 3000;

const app = Express();

app.use('/graphql', GraphHTTP({
  schema: Schema,
  pretty: true,
  graphiql: true
}));

app.listen(APP_PORT, ()=>{
  console.log(`App listening at port ${APP_PORT}`);
})
