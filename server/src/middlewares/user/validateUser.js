import {updateUserSchema,createUserSchema} from "../../utils/validation";

export default async function (req,res,next) {
    try {
        await (req.method==="POST"
            ? createUserSchema
            :updateUserSchema).validateAsync(req.body);

        next();
    }
    catch (e) {
       next(e)
    }

}