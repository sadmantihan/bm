const{
    createPool
}  = require('mysql');

const pool=createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"demo",
    connectionLimit:10
})

pool.query('select * from message ',(err,result,fields)=>{
    if(err){
        return console.log(err);
    }
    return console.log(result);
})