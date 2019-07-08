import jwt from 'jsonwebtoken';

class Token {
  static async generateToken(userObject) {
    const token = await jwt.sign({ userObject }, process.env.JWTKEY, {
      expiresIn: process.env.TOKEN_EXPIRATION
    });
    return token;
  }
}

export default Token;
