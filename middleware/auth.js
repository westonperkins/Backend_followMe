const webToken = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const token = req.header('auth-token')
    if(!token) {
        return res.status(401).json({msg: "no token -- denied"})
    }
    try{
        const verified = webToken.verify(token, process.env.WEBTOKEN_SECRET)
        if(!verified){
            return res.status(401).json({msg: "cannot verify -- denied"})
        }
        console.log("verified: ", verified)
        req.user = verified
        next()
    } catch(err) {
        res.status(401).json({msg: err})
    }
}