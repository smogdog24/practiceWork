const express = require("express");
const session = require('express-session');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/message_board', {useNewUrlParser: true});

app.use(express.static(__dirname + "/static"));
    app.set('view engine', 'ejs');
    app.set('views', __dirname + '/views');



const CommentSchema = new mongoose.Schema({
    name: {type: String, require: true, minlength:2},
    comment: {type: String, require: true, minlength:2, maxlength: 100}
})
const Comment = mongoose.model('Comment', CommentSchema);
const MessageSchema = new mongoose.Schema({
    name: {type: String, require: true, minlength:2},
    message: {type: String, require: true, minlength:2, maxlength: 100},
    comments: [CommentSchema]
})
const Message = mongoose.model('Message', MessageSchema);


app.use(express.urlencoded({extended: true}));


app.get('/', (req, res) => {
    Message.find()
        .then(data => res.render('index', {messages:data}))
        .catch(err=>res.json(err));
});

app.post('/message', (req, res) => {
    const msgData = req.body;
    const message = new Message;
    message.name = msgData.name;
    console.log(req.body);
    Message.create(req.body)
        .then(Message => {
            res.redirect('/');
        })
        .catch(err => {
            console.log('error', err);
            window.alert("new message failed")
        });
});

app.post('/newComment/:id', (req, res) => {
    const commData = req.body;
    const comment = new Comment;
    comment.name = commData.name;
    console.log(req.body);
    Comment.create(req.body)
        .then(Comment => {
            Message.findByIdAndUpdate(req.params.id, {$push: {comments: Comment}})
            .then( () => res.redirect('/'))
            .catch(err => {
                console.log('error', err);
                window.alert("new comment failed")
            });
        })
        .catch(err => {
            console.log('error', err);
            window.alert("new comment failed")
        });
});


app.listen(8000, function(){console.log('listening on port 8000')});