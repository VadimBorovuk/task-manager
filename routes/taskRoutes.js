import express from "express";
import * as taskController from '../controllers/taskController.js'
import checkAuth from "../middlewares/checkAuth.js";
import checkAdmin from "../middlewares/checkAdmin.js";

const router = express.Router();
router.use(checkAuth)
// for delete task must authorizate (basic auth : username, password)

router.post('/create', taskController.createTask)
router.get('/getAll', checkAdmin, taskController.getTasksByUserId)
router.get('/get/:id', taskController.getTaskById)
router.put('/update/:id', taskController.updateTask)
router.delete('/delete/:id', taskController.deleteTask)

export default router;
