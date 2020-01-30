import express from "express"
import router from "./routes";
import errorHandlers from './middlewares/error_handlers'
const cors = require("cors");
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());

app.use(express.json());

app.use(router);

app.use(errorHandlers.applicationErrorHandler);
app.use(errorHandlers.sequelizeErrorHandler);
app.use(errorHandlers.validationErrorHandler);

app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
});
