import models from '../../database/models';
import Utils from '../../helpers/utils';
import ProfileService from '../profiles/ProfileService';

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
      firstName, lastName, email, password, gender
    } = userInfo;

    // get user slug (combination of first and last name)
    const slug = await UserService.getUserSlug(firstName, lastName);

    // encrypt the user password
    const hash = await Utils.encryptPassword(password);

    // create the user if successful or failed when not successful
    const user = await User.create({
      firstName, lastName, email, password: hash, slug, gender
    });

    // create user profile
    await ProfileService.createUserProfile(user.id);

    // remove user password from return data
    delete user.dataValues.password;
    return user;
  }

  static async getUserBySlug(slug) {
    const user = await User.findOne({
      where: { slug }
    });
    return user;
  }

  static async getUserSlug(firstName, lastName) {
    const strSlug = Utils.strSlug(`${firstName} ${lastName}`);
    const slug = await UserService.getUserBySlug(strSlug);
    if (!slug) {
      return strSlug;
    }
    const timestamp = Date.now();
    return `${strSlug}-${timestamp}`;
  }

  static async getUserByEmail(email) {
    const user = User.findOne({
      where: { email }
    });
    return user;
  }
}

export default UserService;
