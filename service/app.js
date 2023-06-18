const router = require('./router')
const express = require("express");
const app = express();
const port = 3000;


app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  req.method == "OPTIONS" ? res.send(200) : next()
})
app.use(router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

