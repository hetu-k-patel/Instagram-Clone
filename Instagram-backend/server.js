import express, { json } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Pusher from 'pusher';

// AppConfig
const app = express();
const port = process.env.PORT || 9000;
const connection_url = '';

// Middlewares
app.use(express.json());
app.use(cors());

// DBConfig
mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
    console.log('DB Connected');
})

// API Endpoints
app.get('/', (req, res) => {
    res.status(200).send('Hello World');
});

app.post()

// Listner
app.listen(port, () => console.log(`listening on localhost: ${port}`));
