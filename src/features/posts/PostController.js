import PostService from './PostService';
import Response from '../../responses/response';

class PostController {
  static async create(req, res) {
    try {
      // call post service to create post
      const post = await PostService.createNewPost(req.body, 1);
      // if successful return the post
      return Response.ok(res, post, 201);
    } catch (error) {
      return Response.error(
        res,
        'Server Error',
        'Can not create your post at this time. Try again',
        error
      );
    }
  }
}

export default PostController;
