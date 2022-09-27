

const pool = require('../database/mysqldb');
const { hashSync } = require('bcrypt');
const bcrypt = require('bcrypt');
const { create, getUsers } = require('../service/adminservice');

function getlogin(req, res) {
  return res.render('./admin/login')
}


async function postlogin(req, res) {



  const admin = req.body;


  const data1 = pool.query('SELECT * FROM adminregistration WHERE `email` =? ', [admin.email],
    function (error, results, fields) {
      console.log(results)
      if (results.length > 0) {
        res.send('ok');
      }
      else {
        res.redirect('/admin');
      };

    })



}


function createAcc(req, res) {


  const admin = req.body;
  admin.hashpassword = hashSync(admin.password, 10);

  create(admin, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(500).json({
        success: 0,
        message: "Database connection error"
      })
    }
    else {
      res.status(200).json({
        success: 1,
        data: results
      })

    }
  });

}

function getUserDetails(req, res) {
  getUsers((err, results) => {
    if (err) {
      console.log(err);
      return;
    }

 
    
      return res.status(200).json({
        success: 1,
        data: results
      });
    
    })

}


module.exports = { getlogin, postlogin, createAcc, getUserDetails };