import ApplicationError from "./ApplicationError";

class Forbidden extends ApplicationError{
    constructor(message) {
        super(`The request was a legal request, but the server is refusing to respond to it ${message}`,403);
    }
}
export default Forbidden;