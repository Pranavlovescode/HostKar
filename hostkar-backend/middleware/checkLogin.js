const authenticateMiddleware = (req, res, next) => {
    const token = req.cookies.jwt;
  
    if (token) {
      jwt.verify(token, 'HostKar website secret', (err, decodedToken) => {
        if (err) {
          console.log(err.message);
          res.status(401).json({ message: 'Unauthorized' });
        } else {
          // Attach decoded user info to the request
          req.user = decodedToken;
          next();
        }
      });
    } else {
      res.status(401).json({ message: 'Unauthorized' });
    }
  };
module.exports = { authenticateMiddleware };
