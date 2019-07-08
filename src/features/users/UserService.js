import bcrypt from 'bcrypt';
import models from '../../database/models';

const { User } = models;
class UserService {
  /**
   * this create new user into the database
   * @param userInfo
   * @returns new user object or error
   */
  static async createNewUser(userInfo) {
    // destruction all user data from userInfo
    const {
      firstName, lastName, email, password, birthDay, birthMonth, birthYear
    } = userInfo;

    const hash = await bcrypt.hash(password, 10);

    // create the user if successful or failed when not successful
    const user = await User.create({
      firstName, lastName, email, password: hash, birthDay, birthMonth, birthYear
    });

    // remove user password from return data
    delete user.dataValues.password;
    return user;
  }
}

export default UserService;
