const express = require('express');
const router = express.Router();
const teamUpload =require('../middleware/teamUpload')
const { addTeamMember,
    getTeamMember, deleteTeamMember, getOneTeamMember

} = require('../controller/teamController')

router.post(
    "/add-member",
    teamUpload.single("image"),
    addTeamMember
);
router.get('/team', getTeamMember)
router.get('/team/:id',getOneTeamMember)
router.delete('/delete/:id', deleteTeamMember)



module.exports = router