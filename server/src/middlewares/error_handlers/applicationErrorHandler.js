import ApplicationError from "../../utils/aplication_errors/ApplicationError";
export default function (err,req,res,next) {
   if(err instanceof ApplicationError){
      return res.status(err.status).send()

   }
  next(err);

}