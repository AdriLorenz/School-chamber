// Import express
const express = require("express");

// Import Roles Controller
const { createRole, deleteRole, 
    getRoleById, getRoles, 
    updateRole } = require
    ("../controllers/roles-controller.js");
 
 // Init express router
const routerRoles = express.Router();
 
// Route get all roles
routerRoles.get('/roles', getRoles);
// Route get role by id
routerRoles.get('/roles/:role_id', getRoleById);
// Route create a new role
routerRoles.post('/roles', createRole);
// Route update role by id
routerRoles.put('/roles/:role_id', updateRole);
// Route delete role by id
routerRoles.delete('/roles/:role_id', deleteRole);
 
// export router
module.exports = routerRoles;