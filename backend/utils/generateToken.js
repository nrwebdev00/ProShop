import jwt from 'jsonwebtoken';
import Keys from '../../Keys.js'

const generateToken = (id) =>{
    return jwt.sign({ id }, Keys.JWT_SECRET, {
        expiresIn: Keys.JWT_EXPIRES_IN
    })
}

export default generateToken;