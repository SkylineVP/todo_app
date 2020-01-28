import express from "express"
import {User} from './db/models'
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json())
app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
});
app.post('/user',async (req, res,next) => {
    try{
        const createUser= await User.create(req.body);
        res.send(createUser);
    }
    catch (e) {
        next(e)

    }

});