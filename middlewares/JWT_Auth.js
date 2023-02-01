const jwt = require("jsonwebtoken")
require("dotenv").config();
exports.erifyJWT = (req, res, next) => {
    const token = req.headers['authorization'];
    if (token == undefined || token == "") {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        req.user = { _id: decoded._id };
        next();
    });
};