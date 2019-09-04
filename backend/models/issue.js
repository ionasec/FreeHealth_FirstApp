var mongoose = require('mongoose');

var Schema = mongoose.Schema;

let IssueModelSchema = new Schema({
    title: {
        type: String
    },
    responsible: {
        type: String
    }
});

var IssueModel = mongoose.model('IssueModel', IssueModelSchema);
module.exports = IssueModel;
//export default mongoose.model('Issue', Issue);