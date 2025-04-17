import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
    jobTitle: {
        type: String,
        required: [true, 'Job title is required'] 
    },
    companyName: {
        type: String,
        required: [true, 'Company name is required']
    },
    location: {
        type: String,
        required: [true, 'Location is required']
    },
    jobType: {
        type: String,
        required: [true, 'Job type is required'],
        enum: {
            values: ['Full Time', 'Part Time', 'Contract', 'Internship'],
            message: '{VALUE} is not a supported job type' 
        }
    },
    salaryMin: {
        type: Number,
        required: [true, 'Minimum salary is required'],
        min: [0, 'Minimum salary cannot be negative'] 
    },
    salaryMax: {
        type: Number,
        required: [true, 'Maximum salary is required'],
        validate: {
            validator: function(value) {
                // this only points to current doc on NEW document creation
                return value >= this.salaryMin;
            },
            message: 'Maximum salary must be greater than or equal to minimum salary'
        }
    },
    deadline: {
        type: Date,
        required: [true, 'Application deadline is required']
    },
    description: {
        type: String,
        required: [true, 'Job description is required']
    }
}, {
    
    timestamps: true 
});

export default mongoose.model('Job', jobSchema); 