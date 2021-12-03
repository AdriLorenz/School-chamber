// Import express
const express = require("express");

// Import Themes Controller
const { createTheme, deleteTheme, 
    getThemeById, getThemes, 
    updateTheme } = require
    ("../controllers/themes-controller.js");
 
 // Init express router
const routerThemes = express.Router();
 
// Route get all themes
routerThemes.get('/themes', getThemes);
// Route get theme by id
routerThemes.get('/themes/:theme_id', getThemeById);
// Route create a new theme
routerThemes.post('/themes', createTheme);
// Route update theme by id
routerThemes.put('/themes/:theme_id', updateTheme);
// Route delete theme by id
routerThemes.delete('/themes/:theme_id', deleteTheme);
 
// export router
module.exports = routerThemes;