const express = require("express")
const signupModel = require('../model_and_schema/signupModel')

const bcrypt = require('bcrypt')

const login = async (req, res) => {
    const loginData = req.body

    try {
        const findLoginUser = await signupModel.findOne({ email: loginData.email })

        if (!findLoginUser) {
            return res.status(401).json({
                message: 'user not found and email Invaild',
                success: false
            })
        }

        const vaildPassword = await bcrypt.compare(loginData.password, findLoginUser.password)

        if (!vaildPassword) {
            return res.status(400).json({
                success: false,
                message: 'You Enter Invaild Password'
            })
        }
        if (vaildPassword) {
            res.status(201).json({
                success: true,
                message: 'login succesful',
                findLoginUser
            })
        }
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message || 'something went worng'
        })
    }

}

const register = async (req, res) => {
    const registerData = req.body
    console.log(registerData)
    if (!registerData.email || !registerData.password) {
        return res.status(400).json({
            success: false,
            message: 'Email and password required'
        })
    }

    // check user alredy found

    const checkAdmin = await signupModel.find({ email: registerData.email })
    if (!checkAdmin) {
        return res.status(401).json({
            mesaage: 'user not found',
            success: false
        })
    }
    const hashPassword = await bcrypt.hash(registerData.password, 10)

    try {
        const createAdmin = await new signupModel({
            email: registerData.email,
            password: hashPassword,
            role: registerData.role,
            status: registerData.status,
            fullName:registerData.fullName
        })
        const saveAdmin = await createAdmin.save()

        if (saveAdmin) {
            res.status(201).json({
                success: true,
                message: 'register succesful',
                saveAdmin
            })
        }
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message || 'something went worng'
        })
    }

}

const getAdmin = async (req, res) => {
    try {
        const allAdmin = await signupModel.find()

        if (allAdmin) {
            res.status(201).json({
                success: true,
                message: 'finded..',
                allAdmin
            })
        }
    } catch (error) {
        console.log(error.message)

        res.status(201).json({
            success: false,
            message: error.message || 'somethig went worng'

        })
    }

}

const adminUpdate = async (req, res) => {
    const id = req.params.id
    console.log(id)

    console.log(req.body)
    try {
        const adminFind = await signupModel.findByIdAndUpdate(
            {
                _id: id,

            },
            {
                status: req.body.status,
            },
            {
                returnDocument: "after",
            }
        );

        res.status(201).json({
            message: 'Your Status updated..',
            success: true,
            adminFind
        })

    } catch (error) {
        console.log(error.message)
    }
}
const adminDelete = async (req, res) => {
    const id = req.params.id
    console.log(id)
    try {
        const adminRemove= await signupModel.findByIdAndDelete({ _id: id })

        res.status(201).json({
            message: 'you are delete successfuly..',
            success: true,
            
        })

    } catch (error) {
        console.log(error.message)
    }
}

module.exports = { login, register, getAdmin, adminUpdate,adminDelete }