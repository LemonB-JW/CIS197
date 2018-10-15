var mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
    questionText: { type: String }
})

module.exports = mongoose.model('Question', questionSchema);
