const mongoose = require('mongoose');
const AssignmentSchema =new mongoose.Schema({
  
                
                "Description":"Slight Description of Assignment",
                "Questions": [{"Q":"Question Here","marks":"Number"}],
                "Attempted": [
                    {"Student_ID": 234,"uploaded_file": "Document" }   //file upload on document word
                    ]
                
                
            
            ,
         "Materials": [],  //gridfs library will be used for adding materials
         "CourseResults": [{"student_id": 234, "gpa": 3.4}]
 
        }
);
module.exports = Assignment = mongoose.model('assignment',AssignmentSchema);