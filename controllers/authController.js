import bcrypt from 'bcrypt'
import UserModel from "../models/userModel.js";

export const register = async (req, res) => {
  try {
    const {
      username,
      email,
      password: pass,
      role
    } = req.body
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(pass, salt)

    const user = await UserModel.create({
      username, email, password: hashPassword, role
    })


    const {password, ...userData} = await user._doc

    return res.status(201).json(userData)

  } catch (e) {
    console.log(e)
    return res.status(500).json({message: e.message})
  }
}

export const login = async (req, res) => {
  try {
    const {
      email,
      password: pass
    } = req.body

    const user = await UserModel.findOne({email})
    if (!user) {
      return res.status(404).json({message: 'User not found'})
    }

    const isValid = await bcrypt.compare(pass, user.password)

    if (!isValid) {
      return res.status(400).json({message: 'Password is not correct'})
    }

    const {password, ...userData} = await user._doc
    return res.status(200).json(userData)

  } catch (e) {
    console.log(e)
    res.status(500).json({message: e.message})
  }
}
