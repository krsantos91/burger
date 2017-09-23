var connection = require('./connections.js');

var ORM = {
    selectAll: function(table_name,cb){
        // console.log("got into orm.js");
        connection.query('SELECT * FROM ??',
            table_name,
            function(err,res){
                if (err) throw err;
                else{
                    // console.log("db query works")
                    // console.log(res); 
                    cb(res);                   
                }
            }
        )
    },
    insertOne: function(table_name,data){
        connection.query('INSERT INTO ?? SET ?',
            [table_name,data],
            function(err,res){
                if (err) throw err;
                else{
                    console.log('Item added to db');
                };
            }
        )
    },
    updateOne: function(table_name,data,identifier){
        console.log(table_name,data,identifier);
        connection.query('update ?? set ? where ?', 
            [table_name, data,identifier],
            function(err,res){
                if (err) throw err;
                else{
                    console.log('db modified');
                };
            }
    )
    }
};

module.exports = ORM;