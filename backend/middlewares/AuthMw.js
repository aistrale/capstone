const jwt = require('jsonwebtoken');
const jwtSecretKey = 'jwt-secret-key';

const UserModel = require('../models/modelUser')
// const JobEntryModel = entry('../models/jobEntryModel')

const AuthMw = async (req, res, next) => {
	let token = req.headers.authorization;
	
	if (!token) {
		return res.status(401).json({ message: 'Invalid token' });
	} else {
		token = token.split(' ')[1];
		try { 
			const decoded = jwt.verify(token, jwtSecretKey);
			const singleUser = await UserModel.findById(decoded._id);
			if (!singleUser) {
				return res.status(404).json({ message: 'User not found' });
			}
			req.user = singleUser;
		} catch (err) {
			return res.status(401).json({ message: 'Invalid token' });
			}
		}
	next();
};

module.exports = AuthMw;

