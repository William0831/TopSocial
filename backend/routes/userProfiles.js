const express = require('express');
const {getUserProfiles} = require('../controllers/userProfilesController');
const userProfilesRouter = express.Router();

// get user profiles.  /api/userProfiles
userProfilesRouter.get('/',getUserProfiles)


// get user profiles by id    /api/userProfiles/:userId


module.exports = userProfilesRouter;