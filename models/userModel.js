import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  username: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  },
  role: {
    type: String,
    default: 'user'
  },
})

export default  mongoose.model('User', userSchema)
