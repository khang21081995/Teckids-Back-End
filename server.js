var http = require("http"),
    express = require("express"),
    Static = require("./Statistic"),
    fileHelper = require("./fileHelper");
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var arr = [];
var arrMax = [];
var arrByNumber = [];
var arrDelete = [];
var inra = "";
//   .use mac dinh la dung method get

var Class = require('./db/models/class');
var Users = require('./db/models/user');
mongoose.connect('mongodb://localhost/testing-online');
var testingApp = express();
testingApp.use(express.static(__dirname + "/client"));
testingApp.use(bodyParser.json());

var user = new Users({
    name: "KhangPQ",
    age: 21,
    username: "KhangPQ",
    password: "KhangPQ"
});
// user.save(function(err) {
//         console.log(err);
// });

testingApp.route("/api/testing/users")
    .get(function(req, res) {
        console.log(req.body);
        if (req.body) {
            //console.log("Username: " + req.body.username);
            if (req.body.username) {
                Users.find({
                    username: req.body.username
                }, function(err, data) {
                    if (data.length > 0) {
                        res.send(data)
                    }
                });
            } else if (req.body.fullname) {
                Users.find({
                    username: req.body.fullname
                }, function(err, data) {
                    console.log(data);
                    if (data.length > 0) {
                        res.send(data)
                    }
                });
            } else {
                // console.log("LOL: " + data);
                Users.find(function(err, data) {
                    if (data.length > 0) {

                        res.send(data)
                    }
                });
            }
        }
    });

// Users.find(function(err, data) {
//     console.log(data);
// });

// var class1 = new Class(
//   {
//     name: "class1",
//     students:[],
//     teacher:{name:"Giao Vien"},
//     startedDate:Date.now(),
//     total:10
//   }
// )
//
// class1.save(function(err) {
//         console.log(err);
// });
//

// var loadData = function(fileName) {
//     fileHelper.readFile(fileName, function(data) {
//         arr = data;
//         if (arr.length == 0) {
//             return;
//         }
//         var max = parseFloat(data[0].split(";")[2].trim());
//         for (var i = 0; i < arr.length; i++) {
//             var temp = parseFloat(data[i].split(";")[2].trim());
//             if (temp >= max) {
//                 max = temp;
//             }
//         }
//
//         for (var i = 0; i < arr.length; i++) {
//             if (arr[i].split(";")[2] == max) {
//                 arrMax.push(arr[i]);
//             }
//         }
//     });
// }
//



var app = express();
app.use(express.static(__dirname + "/client"));
app.use(bodyParser.json());
// app.route("/api/hello")
//     .get(function(req, res) {
//         res.end("Get: hello");
//     })
//     .post(function(req, res) {
//         res.end("Post: hello");
//     });
// app.use(express.bodyParser());
// app.post(__dirname + '/client/api/user/login', function(req, res){
// 	var obj = {};
// 	console.log('body: ' + JSON.stringify(req.body));
// 	//res.send(req.body);
// });
app.route("/api/user/login")
    .post(function(req, res) {
        //console.log(req.body);
        if (req.body) {
            console.log(req.body);
            Users.find({
                username: req.body.username,
                password: req.body.password
            }, function(err, data) {
                if (data.length > 0) {
                    res.json({
                        status: true
                    })
                } else {
                    res.json({
                        status: false
                    })
                }
            });
        } else {
            res.json({
                status: false
            })
        }

    });


//     .get(function(req, res) {
//
//         console.log("get");
//     });

// app.route("/api/file/:number")
//     .get(function(req, res) {
//         loadData("data.txt");
//         arrByNumber = [];
//         for (var i = 0; i < arr.length; i++) {
//             if (arr[i].split(";")[2].trim() == req.params.number) {
//                 arrByNumber.push(arr[i]);
//             }
//         }
//         res.send(arrByNumber);
//     })
//     .delete(function(req, res) {
//         loadData("data.txt");
//         arrDelete = [];
//         for (var i = 0; i < arr.length; i++) {
//             while (arr[i].split(";")[2].trim() == req.params.number) {
//                 arrDelete.push(arr.splice(i, 1));
//             }
//         }
//
//         res.send(arr);
//     });

// .use("/api/hello",function(req,res) {
//   res.end("hello");
// })
// .use("/api/about",function(req,res) {
//   res.end("about us");
// })
// .use("/*",function(req,res) {
//   res.end("All");
// })
// .use("/api/file/list",function(req,res) {
//   inra = "";
//   if(arr.length != 0){
//     for (var i = 0; i < arr.length; i++) {
//       inra+= arr[i] +"   "
//     }
//     res.end(inra);
//   }
// })
// .use("/api/file/top",function(req,res) {
//   inra = "";
//   if(arrMax.length != 0){
//     for (var i = 0; i < arrMax.length; i++) {
//       inra+= arrMax[i] +"   "
//     }
//     res.end(inra);
//   }
// });
http.createServer(testingApp).listen(6666);
http.createServer(app).listen(5555);
