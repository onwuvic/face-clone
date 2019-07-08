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
}

export default Response;
