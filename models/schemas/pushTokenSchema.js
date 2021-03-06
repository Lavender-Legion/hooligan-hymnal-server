var mongoose = require("mongoose");

module.exports = new mongoose.Schema({
	pushToken: String,
	expoExperience: String,
	appVersion: String,
	platform: String,
	platformVersion: String,
	checkinCount: Number
}, {
	timestamps: {
		createdAt: "createTime",
		updatedAt: "updateTime"
	}
});
