const orm = require("../config/orm.js");

const burger = {
  create: function(valArr, cb) {
    orm.create("burgers", ["burger_name", "devoured"], valArr, function(
      res
    ) {
      cb(res);
    });
  },

  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },

  update: function(id, cb) {
    console.log("HERE!: " + id);
    
    
    orm.update("burgers", id, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
