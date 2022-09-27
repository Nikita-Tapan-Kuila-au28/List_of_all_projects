const pool = require('../database/mysqldb');



module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into adminregistration(firstname,lastname,gender,email,password,mobile_number)
      values(?,?,?,?,?,?)`,
            [
                data.first_name,
                data.last_name,
                data.gender,
                data.email,
                data.hashpassword,
                data.mobile_number
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results)
            }
        )
    },
    getUsers:(callBack)=>{
       pool.query( `select admin_id,firstname,lastname,gender,email,mobile_number from adminregistration`,[],(error,results,fields)=>{
        if(error){
            return callBack(error);
        }
       return callBack(null,results);
       }
       );
    }
}

