import models from '../../database/models';

const { Post } = models;

class PostService {
  static async createNewPost(postInfo, userId) {
    const post = await Post.create({ ...postInfo, userId });
    return post;
  }
}

export default PostService;
