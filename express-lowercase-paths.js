var url = require("url")

module.exports = function lowercasePaths(ignore) {
  if(ignore){
    return function _lowercasePaths(req, res, next) {
      if(ignore(req)){
        next();
      }else{
        if (req.path.toLowerCase() !== req.path) {
          var parsedUrl = url.parse(req.originalUrl)
          parsedUrl.pathname = parsedUrl.pathname.toLowerCase()
          res.redirect(url.format(parsedUrl))
        } else {
          next()
        }
      }
    }
  }else{
    return function _lowercasePaths(req, res, next) {
      if (req.path.toLowerCase() !== req.path) {
        var parsedUrl = url.parse(req.originalUrl)
        parsedUrl.pathname = parsedUrl.pathname.toLowerCase()
        res.redirect(url.format(parsedUrl))
      } else {
        next()
      }
    }
  }
}
