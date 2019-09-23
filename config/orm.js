 var link = require('./connection.js')

/*
Here is the O.R.M. where you write functions 
that takes inputs and conditions and turn 
them into database commands like SQL.
*/


var orm = {
	all: function (table,column,devoured, r) {
		 link.query("SELECT * FROM "+table+" WHERE "+column+ " = " +devoured,(req,res)=>{
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
              
                r(res)

            })
	},
		// objColVals would be the columns and values that you want to update
		// an example of objColVals would be {name: panther, sleepy: true}
	update: function  (table,id,devouredValue,cb) {
        
        link.query("UPDATE "+table+" SET ?  WHERE ?",  [{

                        devoured: parseInt(devouredValue)
            
                    },
                {
                    id: id
            
                }],(req,res)=>{
                        
                        if(res){
                           
                        cb(res)
                        }else{
                            console.log("Fail") 
                        }
                    })

    },

    delete:function(table,id,cb){
        link.query("DELETE FROM " +table+ " WHERE id = "+id,(err,result)=>{
            if(err){
                console.log(err)
            }else{
                cb(result)
                
            }
        })
    }


	
};


 
//  orm.create('burgers',"TEST TACO", function(data){console.log(data);})
//  orm.update('burgers',88,1, function(data){console.log(data)})
//  orm.all('burgers', function(info){console.log(info);})

// orm.delete('burgers','id=5',function(data){console.log(data)})



module.exports = orm;





