const mongoose = require('mongoose');

const schema = mongoose.Schema;

const userSchema  = schema({
    email: {
        type: String, 
        required: true,
        unique: true
    },
    password: {
        type: String, 
        required: true,
    }
});

mongoose.model('User', userSchema);