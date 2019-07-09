import models from '../../database/models';

const { Profile } = models;

class ProfileService {
  static async createUserProfile(userId) {
    await Profile.create({ userId });
  }
}

export default ProfileService;
