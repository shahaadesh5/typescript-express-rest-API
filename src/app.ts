import express from 'express';
import config from 'config';
import userRoute from './routes/users.routes'

const port = config.get("port") as number;
const host = config.get("host") as string;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use('/users', userRoute)

app.listen(port, host, () => {
    console.log(`Server started at http://${host}:${port}`)
})