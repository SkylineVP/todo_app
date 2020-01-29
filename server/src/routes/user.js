import express from "express";
import {createUser, deleteUser, updateUser} from "../controllers/user";
import {validateUserOnCreate,validateUserOnUpdate} from "../middlewares/user/validateUser";
import {ACTIONS} from "../constants";

const userRouter = express.Router();
userRouter.post('/',validateUserOnCreate,createUser);
userRouter.patch('/:userId',validateUserOnUpdate,updateUser);
userRouter.delete('/:userId',deleteUser);
export default userRouter;