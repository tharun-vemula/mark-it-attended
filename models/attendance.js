const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const attendanceSchema = new Schema({
    date : {
        type: Date,
        required : true
    },

    name : {
        type : String,
        required : true
    },

    class : {
        type : String,
        required : true
    },

    semester : {
        type : String,
        required : true
    },
})

module.exports = mongoose.model('Attendance', attendanceSchema)