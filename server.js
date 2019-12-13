const path = require('path');
const express = require('express');
const exphbs = require("express-handlebars");
const BodyParser = require("body-parser");
const MongoClient = require('mongodb').MongoClient;
const port = process.env.PORT || 3000;

const DB_URL = "mongodb+srv://dbAdmin:dbVilevac@cluster0-z3fba.mongodb.net/test?retryWrites=true&w=majority";
const DATABASE_NAME = "database0";
var database, userCOLL, postCOLL;

const app = express();
var hbs = exphbs.create({
    defaultLayout: 'main',

    helpers: {
        formatDate: function(timestamp) {
            var date = new Date(timestamp * 1000);

            var monthNames = [
                "Jan", "Feb", "Mar",
                "Apr", "May", "June", "July",
                "Aug", "Sept", "Oct",
                "Nov", "Dec"
              ];
            
              var day = date.getDate();
              var monthIndex = date.getMonth();
              var year = date.getFullYear();
            
              return monthNames[monthIndex] + " " + day;
        }
    }
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    postCOLL.find({}).toArray((error, result) => {
        if(error) {
            return res.status(500).send(error);
        }
        res.status(200).render('body', {posts: result});
    });
});

app.get('/posts/:postId', function (req, res) {
    var postID = req.params.postId;
    postCOLL.find({_id : postID}).toArray((error, result) => {
        console.log("sending posts id " + postID)
        res.status(200).render('body', {posts: result});
    });
});

app.post('/addPost', function (req, res) {
    collection.insert(request.body, (error, result) => {
        if(error) {
            return res.status(500).send(error);
        }
        res.status(200)
    });
});

app.delete("/posts/:postId", function (req, res) {
    var postId = req.params.postId;
    if (postId <= posts.length) {
            res.status(200).send("Deleted Post " + postId)
    }
    else {
            next();
    }
});

app.get('/users/:user', function (req, res) {
    res.status(200).send("User Added")
});

app.post('/addUser', function (req, res) {
    res.status(200).send("User Added")
});

app.delete("/delUser/:username", function (req, res) {
    var user = req.body
    userCOLL.deleteOne(
        { username: user.username, posts: user.posts, name: user.name } // specifies the document to delete
    )
});

app.get('*', function (req, res) {
    res.status(404).render('404')
});

app.listen(port, function () {
    console.log("== Server is listening on port", port);
    MongoClient.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        userCOLL = database.collection("users");
        postCOLL = database.collection("posts");
        console.log("== Connected to '" + DATABASE_NAME + "'");
    });
});