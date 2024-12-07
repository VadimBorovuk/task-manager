import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt'

export default async (req, res, next) => {
    // check auth header
    if(!req.headers.authorization || req.headers.authorization?.indexOf('Basic') === -1){
        return res.status(401).json({message: "header not autorization"})
    }
    const base64Credentials = req.headers.authorization?.split(' ')[1]

    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');

    const [email, password] = credentials.split(':')

    const user = await userModel.findOne({email})
    if (!user) {
        return res.status(404).json({ message: 'User not found' })
    }

    const isValid = await bcrypt.compare(password, user.password)

    if (!isValid) {
        return res.status(400).json({ message: 'Password is not correct' })
    }
    req.user = user._doc;

    next()
    // const { password, ...userData } = await user._doc
    // return res.status(200).json(userData)
}
