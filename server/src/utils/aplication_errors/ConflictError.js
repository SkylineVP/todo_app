import ApplicationError from "./ApplicationError";

class ConflictError extends ApplicationError{
    constructor(resource) {
        super(`The request could not be completed due to a conflict with the current state of the ${resource?resource:'resource'}`,409);
    }
}