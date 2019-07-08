import UserService from './UserService';
import Response from '../../responses/response';
import Token from '../../helpers/token';

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
      // return the newly created user infomation
      return Response.ok(res, token, 201);
    } catch (error) {
      return Response.error(
        res,
        'Server Error',
        'Unable to perform this action at this time',
        error
      );
    }
  }
}

export default UserController;
