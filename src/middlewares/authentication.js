import Response from '../responses/response';
import Token from '../helpers/token';

class Authentication {
  static async tokenAuthentication(req, res, next) {
    // add 'authorization' option to the request headers
    const token = req.headers['x-access-token'] || req.headers.authorization;
    if (!token) {
      return Response.unauthorized(res, 'No token provided');
    }

    try {
      // verify user token
      const decoded = await Token.verifyToken(token);
      // add the user object subsequent request object
      req.user = decoded.userObject;
      // move to the next middleware or controller
      next();
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        return Response.unauthorized(res, 'Session timed out, please login again');
      }
      return Response.unauthorized(res, 'Error authenticating, please login again');
    }
  }
}

export default Authentication;
