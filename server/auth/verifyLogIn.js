const isLoggedIn = (req, res, next) => {
  // checking passport serializer set user obj on request
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
};

module.exports.isLoggedIn = isLoggedIn;
