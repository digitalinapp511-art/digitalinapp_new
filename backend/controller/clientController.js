const clientModel = require("../model_and_schema/clientModel")

const addClient = async (req, res) => {
    const clientData = req.body
    try {
        if (!clientData) {
            return res.status(401).json({
                success: false,
                message: "data not comeing..."
            })
        }

        const ammoutDue = clientData.Totalvalue - clientData.lastBillPay

        clientData.pendingAmount = ammoutDue

        const saveClinet = await clientModel.create(clientData)
        res.status(200).json({
            success: true,
            message: "client added Successfuly",
            saveClinet
        })
    } catch (error) {
        console.log(error)
        res.status(401).json({
            success: false,
            message: error.message || "somethng went worng"
        })
    }
}
const getClient = async (req, res) => {

    try {
        const AllClients = await clientModel.find({})
        res.status(200).json({
            success: true,
            message: "Client finded Successfuly",
            AllClients
        })
    } catch (error) {
        console.log(error.message)
        res.status(401).json({
            success: false,
            message: error.message || "somethng went worng"
        })
    }
}

module.exports = { getClient, addClient }