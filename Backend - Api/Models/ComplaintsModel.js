const mongoose = require('mongoose');

const ComplaintSchema = mongoose.Schema({
    userId:{type: String, required: true},
    message : {type: String, required: true, maxlength: 3000},
    isHandled: {type: Boolean, default: false}
})

module.exports = mongoose.model('complaints', ComplaintSchema)