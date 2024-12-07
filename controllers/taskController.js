import TaskModel from "../models/taskModel.js";


export const getTasksByUserId = async (req, res) => {
  try {
    // get tasks only createBy -> userId
    // const userId = req.user._id
    //
    // const tasks = await TaskModel.find({
    //   createBy: userId
    // })
    const tasks = await TaskModel.find()

    res.status(201).json(tasks)

  } catch (e) {
    res.status(400).json({message: 'Failed to delete data'})
  }
}

export const getTaskById = async (req, res) => {
  try {
    const taskId = req.params.id
    const userId = req.user._id

    const task = await TaskModel.findOne({
      _id: taskId,
      createBy: userId
    })

    if (!task){
      return res.status(404).json({message: 'Task not found'})
    }

    res.status(201).json(task)

  } catch (e) {
    res.status(400).json({message: 'Failed to get task'})
  }
}


export const createTask = async (req, res) => {
  try {
    const {description} = req.body
    const userId = req.user._id

    const taskObj = {
      description,
      createBy: userId
    }

    const Task = await TaskModel.create(taskObj)

    res.status(201).json(Task)

  } catch (e) {
    res.status(400).json({message: 'Failed data'})
  }
}


export const updateTask = async (req, res) => {
  try {
    const taskId = req.params.id
    const userId = req.user._id

    const task = await TaskModel.findOneAndUpdate({
      _id: taskId, createBy: userId
    }, req.body, {
      new: true,
      runValidators: true
    })

    if (!task){
      return res.status(404).json({message: 'Task not found'})
    }

    res.status(201).json(task)

  } catch (e) {
    res.status(400).json({message: 'Failed to update data'})
  }
}

export const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id
    const userId = req.user._id

    const task = await TaskModel.findByIdAndDelete({
      _id: taskId,
      createBy: userId
    })

    if (!task){
      return res.status(404).json({message: 'Task not found'})
    }

    res.status(201).json({message: 'Deleted successfully'})

  } catch (e) {
    res.status(400).json({message: 'Failed to delete data'})
  }
}
