const express = require("express");
const dep = require("./routes/dep");
const emp = require("./routes/emp");

const app = express();




app.use(express.json())

app.use("/dep", dep());

app.use("/emp", emp());


app.listen(6060, (err) => {
  if (err) throw err;
  else console.log("Server is running at port %d:", 6060);
});
