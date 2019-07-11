import UserService from './UserService';
import Response from '../../responses/response';
import Token from '../../helpers/token';
import Utils from '../../helpers/utils';

class UserController {
  /**
   * this is used to create a new user
   * @param req
   * @param res
   */
  static async create(req, res) {
    try {
      // create the user
      const user = await UserService.createNewUser(req.body);
      // generate token
      const token = await Token.generateToken(user);

      // TODO:: remove the user. only return token
      // return the newly created user infomation
      return Response.ok(res, { user, token }, 201);
    } catch (error) {
      return Response.error(
        res,
        'Server Error',
        'Unable to perform this action at this time',
        error
      );
    }
  }

  static async login(req, res) {
    try {
      // check if the user exist in the database
      const user = await UserService.getUserByEmail(req.body.email);
      if (!user) {
        // if not, return a forbidden error
        return Response.forbidden(res, 'Invalid user credentials');
      }
      // check if the user is verified
      if (!user.dataValues.isVerified) {
        // if not, return a unauthorized error
        return Response.unauthorized(res, 'Please verify your account');
      }
      // check if the password supplied by the user match the account being accessed
      const match = await Utils.comparePassword(req.body.password, user.dataValues.password);
      if (!match) {
        // if not, return a forbidden error
        return Response.forbidden(res, 'Invalid user credentials');
      }
      // remove user password for the user data
      delete user.dataValues.password;
      // TODO:: populate user profile into this data
      // TODO:: remove the user
      // generate a token from the user data
      const token = await Token.generateToken(user);
      // return a token
      return Response.ok(res, { user, token });
    } catch (error) {
      return Response.error(
        res, 'Server Error', 'Unable to perform this action at this time. Try again.', error
      );
    }
  }
}

export default UserController;
