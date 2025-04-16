import mongoose from 'mongoose';

const jobPostingSchema = new mongoose.Schema({
    jobTitle: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    jobType: {
        type: String,
        required: true,
        enum: ['Full Time', 'Part Time', 'Contract', 'Internship']
    },
    salaryMin: {
        type: Number,
        required: true
    },
    salaryMax: {
        type: Number,
        required: true
    },
    deadline: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

export default mongoose.model('JobPosting', jobPostingSchema); 