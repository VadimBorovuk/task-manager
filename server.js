import express from 'express';
import bodyParser from 'body-parser';

import('./config/db.js')
import authRouter from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

const PORT = 6001;
const app = express();

// middleware
app.use(bodyParser.json());

app.use('/api/auth', authRouter)
app.use('/api/task', taskRoutes)


app.listen(PORT, () => {
    console.log(
        'server started'
    );
});


