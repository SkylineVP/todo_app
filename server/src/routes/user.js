import express from "express";
import {createUser} from "../controllers/user";
import validateUser from "../middlewares/user/validateUser";

const userRouter = express.Router();
userRouter.post('/',validateUser,createUser)
export default userRouter;