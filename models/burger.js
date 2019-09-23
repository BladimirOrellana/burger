const orm = require('./../config/orm.js')
/*
Here is where you setup a model for how to interface with the database.
*/



var burgermodel = {
	all: function (table,column,devoured,r) {     
		orm.all(table,column,devoured, function (res) {
			r(res);
			
		});
	},
	// cols and vals are arrays
	create: function (table,burger_name,  r) {
		orm.create(table,burger_name, function (res) {
			r(res);
			
		});
	},
	update: function (table,id, devouredValue, cb) {
		orm.update(table, id, devouredValue, function (res) {
			cb(res);

		});
	},
	delete: function (table,condition, cb) {
		
		orm.delete(table,condition, function (res) {
			
			cb(res);
			
		});
	}
};

//burgermodel.all(function(data){console.log(data)});
//burgermodel.create('burger_name',"yay",function(data){console.log(data)})
// burgermodel.update('devoured',0,'id=1', function(data){console.log(data)})
//burgermodel.delete('id=5',function(data){console.log(data)})

//TIPS:
//when you call cb don't forget cb is running as a function.


module.exports = burgermodel;


