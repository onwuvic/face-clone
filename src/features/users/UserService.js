import models from '../../database/models';

const { User } = models;
class UserService {
  static async createNewUser(userInfo) {
    try {
      const user = await User.create(userInfo);
      return user;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default UserService;
