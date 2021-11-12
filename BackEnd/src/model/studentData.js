const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Rimit');
// mongoose.connect('mongodb+srv://akhileshklr_98:akhilesh98@cluster0-7k0zl.mongodb.net/MilmaDb?retryWrites=true&w=majority', {useNewUrlParser: true});

const schema = mongoose.Schema;

var studentSchema = new schema ({
    Name: String,
    RollNo: Number,
    MobileNo: Number,
    ClassID: String
});

var studentData = mongoose.model('Student', studentSchema);
module.exports = studentData;

// var classSchema = new schema ({
//     Standard: String,
//     Division: String
// });

// var classData = mongoose.model('Class', classSchema);
// module.exports = classData;
// module.exports.farmer = farmerData;