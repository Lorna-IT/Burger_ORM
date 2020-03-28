
// Here is the O.R.M. where you write functions that takes inputs and conditions
// and turns them into database commands like SQL.

var connection = require("./connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(ob) {
  // column1=value, column2=value2,...
  var arr = [];

  for (var key in ob) {
    arr.push(key + "=" + ob[key]);
  }

  return arr.toString();
}

var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // vals is an array of values that we want to save to cols
  // cols are the columns we want to insert the values into
  create: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;
    console.log("insertionvalueString",vals.toString());
	
    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES ?";

    console.log("insertionqueryString",queryString);
	const values = [ 
      [vals.toString(), false]
    ];
    connection.query(queryString, [values], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // objColVals would be the columns and values that you want to update
  // an example of objColVals would be {name: panther, sleepy: true}
  update: function(table, id, cb) {
  	const sql = "UPDATE " + table + " SET devoured=TRUE WHERE id='" + id + "'";
    connection.query(sql, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

module.exports = orm;
