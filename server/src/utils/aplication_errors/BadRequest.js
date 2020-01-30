import ApplicationError from "./ApplicationError";

class BadRequest extends ApplicationError{
    constructor() {
        super(`Bad Request`,400);
    }
}
export default BadRequest;