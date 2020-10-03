const isLoggedIn = (req, res, next) => {
  // console.log("@@@isLoggedIn")
  // console.log("req.user", req.user);
  if (req.user) {
    next();
  } else {
    res.sendStatus(401)
  }
}

module.exports.isLoggedIn = isLoggedIn;