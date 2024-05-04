const express = require("express");
var cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());


const productRoute = require('./routes/product.route')

//Mysql connection  
var mysql = require('mysql2');

var mock = {
 "items" : [
    {
        "id" : 1,
        "title" : "Todo 1"
    },
    {
        "id" : 2,
        "title" : "Todo 2"
    },
    {
        "id" : 3,
        "title" : "Todo 3"
    },
    {
        "id" : 4,
        "title" : "Todo 4"
    },
    {
        "id" : 5,
        "title" : "Todo 5"
    }
 ]
}
app.get('/', (req, res) => {
    res.send(mock);
});

app.post('/save',(req,res)=>{
    res.send({"Status":"Sucess","Msg" : "Saved Successfully "+req.body.title});
});


//Demo for project struct of the node js application

app.use("/api/product",productRoute)

app.use(function(req, res) {
    res.send("Crime Scene 404. Do not repeat");
});


var port = 3344;
app.listen(port, () => {
    console.log(`Hello world app listening on port ${port}!`);
    initDB();
})


function initDB(){
    var con = mysql.createConnection({
        host: "127.0.0.1",
        port: "3306",
        user: "devuser",
        password: "dev1234"
    });
    con.connect(function(err) {
        if (err) throw err;
        console.log("Mysql Database Connected!");
    });
}