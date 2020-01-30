import {BaseError} from "sequelize";

export default function(err,req,res,next){
    if(err instanceof BaseError){
        res.status(400).res.send("Sequelize Error"+err.message);
    }
    next(err);
}
