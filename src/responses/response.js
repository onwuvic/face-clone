class Response {
  static ok(res, data, statusCode = 200) {
    return res.status(statusCode).json({
      status: 'success',
      data
    });
  }

  static error(res, errorType, message, errorDetails, statusCode = 500) {
    return res.status(statusCode).json({
      status: 'fail',
      errorType,
      message,
      errorDetails
    });
  }

  static unauthorized(res, message) {
    return res.status(401).json({
      status: 'fail',
      errorType: 'Unauthorized',
      message
    });
  }

  static forbidden(res, message) {
    return res.status(403).json({
      status: 'fail',
      errorType: 'Forbidden',
      message
    });
  }
}

export default Response;
