const mongoose = require('mongoose');

const GroupSchema = mongoose.Schema({
    groupName: String,
    idForm : String,
    idUBS : String,
    users: [String],
    
}, {
    timestamps: true
});

module.exports = mongoose.model('Group', GroupSchema);