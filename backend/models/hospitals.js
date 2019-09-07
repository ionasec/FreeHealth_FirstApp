var mongoose = require('mongoose');

var Schema = mongoose.Schema;

let HospitalsModelSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId
    },
    hospital_name: {
        type: String
    },
    hospital_id: {
        type: String
    },
    hospital_url: {
        type: String
    }
});

var HospitalsModel = mongoose.model('hospitals', HospitalsModelSchema,'hospitals_collection'); 
module.exports = HospitalsModel;
//export default mongoose.model('Issue', Issue);