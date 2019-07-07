// import UserService from './UserService';
import models from '../../database/models';

const { User } = models;

class UserController {
  static async create(req, res) {
    try {
      const {
        firstName, lastName, email, password, birthDay, birthMonth, birthYear
      } = req.body;
      const user = await User.create({
        firstName, lastName, email, password, birthDay, birthMonth, birthYear
      });
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

export default UserController;
