

  const {createPool} = require('mysql');

   
  
    // create the connection
    const pool = createPool (
      {
        host:'localhost', 
      user: 'root', 
      password:'rootpassword',
      database: 'hotelmarian'
    });
  

 



  module.exports= pool;