 var link = require('./connection.js')

/*
Here is the O.R.M. where you write functions 
that takes inputs and conditions and turn 
them into database commands like SQL.
*/


var orm = {
	all: function (table, r) {
		 link.query("SELECT * FROM "+table,(req,res)=>{
            r(res)
        })
	},

	create: function (table,burger_name,r) {
        let devoured = 0;
        const post = {
            burger_name: burger_name,
            devoured: devoured
        }
            link.query("INSERT INTO "+table+" SET ?",post,(req,res)=>{
                console.log("Inserted Post ")
                r(res)

            })
	},
		// objColVals would be the columns and values that you want to update
		// an example of objColVals would be {name: panther, sleepy: true}
	update: function  (table, devoured,id,r) {
        link.query("UPDATE "+table+" SET ?  WHERE ?",  [{

                        devoured: devoured
            
                    },
                {
                    id: id
            
                }],(req,res)=>{
                        
                        if(res){
                            console.log("UPDATED") 
                        r(res)
                        }else{
                            console.log("Fail") 
                        }
                    })

	},


	
};


 
//  orm.create('burgers',"TEST TACO", function(data){console.log(data);})
//  orm.update('burgers',88,1, function(data){console.log(data)})
//  orm.all('burgers', function(info){console.log(info);})

// orm.delete('burgers','id=5',function(data){console.log(data)})



module.exports = orm;





