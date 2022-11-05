const connection = require("../conection").con;

const empByID = (req, res, next) => {
    // app.get('/user/:id', function(req, res) {
        // res.send('id' + req.params.department_id);  
    //   });
    connection.query( `SELECT employee.id,
    employee.name,employee.street_add,employee.city, employee.designation,
    employee.salary,employee.commission,employee.mobile_no,employee.create_at,
    employee.updat_at,employee.is_active, department.department_id,
    department.company_name 
    FROM employee
     INNER JOIN department ON employee.department_id = department.department_id WHERE 
    employee.id= ${req.params.id};`,
     (err, rows) => {
      if (!err) {
        res.send(rows);
      } else {
        res.status(500).end("Internal Server Error");
      }
    });
  }

  const allEMP = (req, res, next) => {
    // app.get('/user/:id', function(req, res) {
        // res.send('id' + req.params.department_id);  
    //   });
    connection.query( `SELECT * FROM employee`,
     (err, rows) => {
      if (!err) {
        res.send(rows);
      } else {
        res.status(500).end("Internal Server Error");
      }
    });
  }

  module.exports = {empByID, allEMP}


  // const data = {
  //   const name = () => {

  //   }
  // }
  // const { name } = data

  // data.name()

  // const data = {
  //   name: "Ramesh",
  //   age: 22
  // }

  // const { name } = data

  