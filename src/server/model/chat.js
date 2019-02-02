const mongoose = require('mongoose'), 
var UserSchema = mongoose.Schema({
    username: {
		type: String,
		trim: true,
		required: true
    },
    chat:{
        type:string,
        required:true
    }

});
var User = mongoose.model('User', UserSchema);

module.exports = { User };