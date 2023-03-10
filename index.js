const express = require('express');
const routes = require('./src/routes/routes');
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));