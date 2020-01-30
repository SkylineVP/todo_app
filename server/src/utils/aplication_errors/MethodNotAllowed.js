import ApplicationError from "./ApplicationError";

class MethodNotAllowed extends ApplicationError{
    constructor(method) {
        super(`The ${method
            ?""+method
            :''} method specified in the Request-Line is not allowed for the resource identified by the Request-URI`,405);
    }
}