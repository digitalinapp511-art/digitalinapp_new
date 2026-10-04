const projectModel = require('../model_and_schema/projectModel')
const teamModel = require('../model_and_schema/TeamModel')
const clientModel = require('../model_and_schema/clientModel')


const getDasboard = async (req, res) => {


    try {
        const totalProject = await projectModel.find({})

        const totalClient = await clientModel.find({})

        const totalTeam = await teamModel.find({})
        const completedProjects = await projectModel.find({ status: 'Completed' })
        res.status(201).json({
            success: true,
            totalProject,
            totalClient,
            totalTeam,
            completedProjects
        })

    } catch (error) {
        res.status(401).json({
            success: false,
            message: 'not fetch'
        })
    }


}
module.exports = getDasboard;