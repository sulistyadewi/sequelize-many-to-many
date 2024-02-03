const express = require("express");
const app = express();
const port = 3006;
const Controller = require("./controllers/controller");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", Controller.getRootHandler);
app.get("/users", Controller.findUser);
app.get("/users/:id/detail", Controller.transaction);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
