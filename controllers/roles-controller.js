// Import Role Model
const Role = require("../models/role.js");
 
// Get all role
exports.getRoles = async (req, res) => {
    try {
        const role = await Role.findAll();
        res.send(role)
    } catch (err) {
        console.log(err);
    }
}
exports.returnRoles = async (req, res) => {
    try {
        const role = await Role.findAll();
        return role;
    } catch (err) {
        console.log(err);
    }
}
 
// Get role by id
exports.getRoleById = async (req, res) => {
    try {
        const role = await Role.findAll({
            where: {
                role_id: req.params.role_id
            }
        });
        res.send(role[0]);
    } catch (err) {
        console.log(err);
    }
}
 
// Create a new role
exports.createRole = async (req, res) => {
    try {
        await Role.create(req.body);
        res.json({
            "message": "Role Created"
        });
    } catch (err) {
        console.log(err);
    }
}
 
// Update role by id
exports.updateRole = async (req, res) => {
    try {
        await Role.update(req.body, {
            where: {
                role_id: req.params.role_id
            }
        });
        res.json({
            "message": "Role Updated"
        });
    } catch (err) {
        console.log(err);
    }
}
 
// Delete role by id
exports.deleteRole = async (req, res) => {
    try {
        await Role.destroy({
            where: {
                role_id: req.params.role_id
            }
        });
        res.json({
            "message": "Role Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}