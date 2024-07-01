const jwt = require('jsonwebtoken');
const jwtSecretKey = 'jwt-secret-key';

const AuthMw = (req, res, next) => {
    let token = req.headers.authorization;

    if(!token) {
        return res.status(401).json({message: 'Invalid token'})
    } else {
        token = token.split(' ')[1]
        const decoded = jwt.verify(token, jwtSecretKey, (err, data) => {
            if(err) {
                return res.status(401).json({message: 'Invalid token'})
            } else {
                console.log(data);
            }
        })
        // const singleUser = await UserModel.findById(decoded.proprietaà oken)
        // req.user = singleUSer | dari utenti
    }
    next();
}

module.exports = AuthMw;

