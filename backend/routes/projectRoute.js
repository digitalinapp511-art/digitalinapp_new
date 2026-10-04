const express = require('express')
const router = express.Router()
const { addProject, getProject,deleteProject,updateProject } = require('../controller/projectController')

router.post('/add-project', addProject)
router.get('/projects', getProject)
router.delete('/project/delete/:id',deleteProject)
router.put('/project/update/:id',updateProject)


module.exports = router;