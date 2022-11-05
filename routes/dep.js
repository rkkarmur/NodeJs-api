const {Router} = require("express");
const connection = require("../conection").con;

const dep = () =>{
    const router = Router();

    router.get("/", (req, res, next) => {
        connection.query(`SELECT employee.id, 
        employee.name, employee.street_add, employee.city, 
        employee.designation, employee.salary, employee.commission, 
        employee.mobile_no, employee.create_at, employee.updat_at, 
        employee.is_active, department.department_id, department.company_name
         FROM employee INNER JOIN department ON employee.department_id = department.department_id;`
         ,
         (err, rows) => {
          if (!err) {
            res.send(rows);
          } else {
            res.status(500).end("Internal Server Error");
          }
        });
      });
    
      router.get('/:department_id', (req, res, next) => {
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
        department.department_id= ${req.params.department_id};`,
         (err, rows) => {
          if (!err) {
            res.send(rows);
          } else {
            res.status(500).end("Internal Server Error");
          }
        });
      });

      return router
}

module.exports = dep
