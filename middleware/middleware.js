const Ingredient = require('../models/Ingredient');

// Authenticating
exports.mw = function(req, res, next) {
    console.log('Authenticating access')

    const key = req.body.key ||
      req.query.key ||
      req.headers['x-access-key'];

      if (key === '1234') { //?key=1234 in url to pass key
          next();
      } else {
    res.json(401, { //'401' doesn't allow access to a page
        success: false,
        message: 'Not Authorised',
    });
  }
}
