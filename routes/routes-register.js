// Import express
const express = require("express");
 
// Init express router
const routerRegister = express.Router();
 


routerRegister.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
    } catch (error) {
        
    }
})
 
// export router
module.exports = routerRegister;