const express = require("express");
const session = require("express-session");
const app = express();
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;
mongoose.connect('mongob://locathost/login_reg', {useNewUrlParser: true}));
const emailregex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
app.use(express.static(__dirname + "/static"));
    app.set('view engine', 'ejs');
    app.set('views', __dirname _ '/views');

const userSchema = new mongoose.Schema({
    first_name: {type: String, require: true, minlength: 2, maxlength:30},
    last_name: {type: String, require: true, minlength:2, maxlength:30},
    email: {type: String, require: true, match: emailregex, unique: true},

})

app.get('/', (req, res) => {
    res.render('index')
});

app.post('/register', (req, res) => {

});

app.post('/login', (req, res) => {
    
});

// /**
//  * Module dependences
// */

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const bcrypt = require('bcrypt');
// const SALT_WORK_FACTOR = 10;

// // define User Schema
// const UserSchema = new Schema({
//     username: {
//         type: String,
//         unique: true,
//         index: {
//             unique: true
//         }
//     },
//     hashed_password: {
//         type: String,
//         default: ''
//     }
// });

// // Virtuals
// UserSchema
//     .virtual('password')
//     // set methods
//     .set(function (password) {
//         this._password = password;
//     });

// UserSchema.pre("save", function (next) {
//     // store reference
//     const user = this;
//     if (user._password === undefined) {
//         return next();
//     }
//     bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
//         if (err) console.log(err);
//         // hash the password using our new salt
//         bcrypt.hash(user._password, salt, function (err, hash) {
//             if (err) console.log(err);
//             user.hashed_password = hash;
//             next();
//         });
//     });
// });

// /**
//  * Methods
// */
// UserSchema.methods = {
//     comparePassword: function(candidatePassword, cb) {
//         bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
//             if (err) return cb(err);
//             cb(null, isMatch);
//         });
//     };
// }

// module.exports = mongoose.model('User', UserSchema);