import UserSchema from "../../utils/validation/user.js";
function getUserValidate(isCreate=true) {
    return async function (req, res, next) {
        try {
            req.userValue= await UserSchema.validateAsync(req.body, {
                context: {
                    isCreate:isCreate
                }
            });
            next();
        } catch (e) {
            next(e)
        }

    }

}
export const validateUserOnCreate=getUserValidate();
export const validateUserOnUpdate=getUserValidate(false);
