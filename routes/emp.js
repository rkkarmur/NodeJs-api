const {Router} = require("express");
const { empByID, allEMP } = require("../controller/empController");

const emp = () =>{
    const router = Router();
    
      router.get('/:id', empByID);

      router.get('/', allEMP);


      return router
}

module.exports = emp
