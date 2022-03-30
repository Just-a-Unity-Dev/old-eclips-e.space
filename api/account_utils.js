const crypto = require('crypto');
const { env } = require('process');

const key = env.PKEY;

function validate(password,db_password){
	const [salt, key] = db_password.split(':');
	const hashedBuffer = crypto.scryptSync(password, salt, 64);
	const keyBuffer = Buffer.from(key, 'hex');
	
	return match = crypto.timingSafeEqual(hashedBuffer, keyBuffer)
}

function generate_session(passalt) {
	return crypto.createHmac('sha256', key).update(passalt).digest('hex')
}

module.exports = {validate, generate_session};