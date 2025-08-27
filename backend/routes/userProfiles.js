const express = require('express');
const {getUserProfiles,getUserProfileById,patchUserProfileById} = require('../controllers/userProfilesController');
const userProfilesRouter = express.Router();

// get user profiles.  /api/userProfiles
userProfilesRouter.get('/',getUserProfiles)


// get user profiles by id    /api/userProfiles/:userId
userProfilesRouter.get('/:userId',getUserProfileById)

//PATCH update user profile by id   /api/userProfiles/:userId
userProfilesRouter.patch('/:userId',patchUserProfileById)
module.exports = userProfilesRouter;