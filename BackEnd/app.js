const express = require('express');
const StudentData = require('./src/model/studentData');
const ClassData = require('./src/model/classData');
const cors = require('cors');
const bodyParser = require('body-parser');

var app = new express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post('/addStudent',function(req,res){
    console.log('Add Student');
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(req.body);
    var student = {
        Name: req.body.student.Name,
        RollNo: req.body.student.RollNo,
        MobileNo: req.body.student.MobileNo,
        ClassID: req.body.student.ClassID
    }
    var student = new StudentData(student);
    student.save().then( (result)=>{
        console.log(result);
        res.send(result);
    });
});

app.post('/addClass', (req,res)=>{
    console.log('Add Class');
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(req.body);
    var class1 = {
        Standard: req.body.class1.Standard,
        Division: req.body.class1.Division
    }
    var class1 = new ClassData(class1);
    console.log(sale);
    class1.save().then( (result)=>{
        console.log(result);
        res.send(result);
    });
});

app.get('/students',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    StudentData.find().then( result=>{
        res.send(result);
        console.log(result);
    })
});

app.get('/classes',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    ClassData.find().then( result=>{
        res.send(result);
        console.log(result);
    })
});

app.delete('/deleteCls/'+id, (req,res)=>{
    console.log('Delete Class');
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    ClassData.delete({"_id": id}).then( (result)=>{
        console.log(result);
        res.send(result);
    });
});

app.delete('/deleteStudent/'+id, (req,res)=>{
    console.log('Delete Student');
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    StudentData.delete({"_id": id}).then( (result)=>{
        console.log(result);
        res.send(result);
    });
});

app.listen(process.env.PORT || 3000, ()=>{
    console.log("Listening of port 3000");
});