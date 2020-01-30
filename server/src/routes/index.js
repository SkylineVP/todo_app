import express from "express";
import userRouter from "./user";
import authorizeUser from "../middlewares/authorization/authorizeUser";

const router=express.Router();
router.use('*',authorizeUser);
router.use('/user',userRouter);

export default router;