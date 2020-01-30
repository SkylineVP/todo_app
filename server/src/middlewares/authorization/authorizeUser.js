import AppErrors from "../../utils/aplication_errors/";
export default function (req,res,next) {
    try {
        req.authorizeData=req.get('Authorization');
        if(req.authorizeData){
            next();
        }
        else {
            next(new AppErrors.UnauthorizedError)
        }
    }
    catch (e) {

    }

}