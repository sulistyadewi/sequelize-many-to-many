const { User, Product, Transaction } = require("../models/index");

class Controller {
  static getRootHandler(req, res) {
    User.findAll({ include: [Product] })
      .then((dataCombined) => {
        res.render("list", { dataCombined });
      })
      .catch((err) => {
        res.send(err);
      });
  }
  static findUser(req, res) {
    User.findAll()
      .then((data) => {
        res.render("user", { data });
      })
      .catch((err) => {
        res.send(err);
      });
  }
  static transaction(req, res) {
    const id = +req.params.id;
    console.log(id);
    User.findByPk(id, { include: [Product] })
      .then((data) => {
        res.render("transaction", { data });
        // res.send(data);
      })
      .catch((err) => {
        res.send(err);
      });
  }
}

module.exports = Controller;
