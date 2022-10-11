const jwt = require("jsonwebtoken");


const verifyToken = (req, res, next) => {

  const authHeader = req.headers.token;
  if (authHeader) {

    const token = authHeader.split(" ")[1];

    jwt.verify(token, "tok", (err, user) => {

      if (err) res.status(403).json("invalid token");
      req.user = user;
      next();

    });

  } else {
    return res.status(401).json("Not Authenticated");
  }

}

const verifyTokenAuthorization = (req, res, next) => {

    verifyToken(req, res, () => {

      if (req.user.id === req.params.id || req.user.isAdmin) {

        next();

      } else {

        res.status(403).json("Not Authorized");

      }
    });
    
  };
  
  const verifyTokenAdmin = (req, res, next) => {

    verifyToken(req, res, () => {
      if (req.user.isAdmin) {
        next();
      } else {
        res.status(403).json("Not Authorized");
      }
    });

  };


  module.exports = {
    verifyToken,
    verifyTokenAuthorization,
    verifyTokenAdmin,
  };