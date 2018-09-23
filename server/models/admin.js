const mongoose = require('mongoose');
const adminSchema = mongoose.Schema({
	local: {
		username: String,
		password: String
	},
	facebook: {
		id: String,
		token: String,
		email: String,
		name: String
	}
});

module.exports = mongoose.model('User', adminSchema);