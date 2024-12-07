import mongoose from 'mongoose'

const taskSchema = mongoose.Schema({
  description: {
    type: String,
    require: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  createBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

export default mongoose.model('Task', taskSchema)
