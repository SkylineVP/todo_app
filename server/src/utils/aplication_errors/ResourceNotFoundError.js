import ApplicationError from "./ApplicationError";
class ResourceNotFoundError extends ApplicationError{
    constructor(resourceName) {
        super(`Resource ${resourceName
            ?resourceName
            :''} Not Found`,404);
    }
}
export default ResourceNotFoundError;