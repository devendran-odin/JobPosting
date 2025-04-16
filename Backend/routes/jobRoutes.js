import express from 'express';
const router = express.Router();
import Job from '../models/Job.js'; // Ensure .js extension for ES Modules

// Get all jobs
router.get('/', async (req, res) => {
    try {
        const jobs = await Job.find();
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new job
router.post('/', async (req, res) => {
    // Destructure fields based on the new schema
    const { 
        jobTitle, 
        companyName, 
        location, 
        jobType, 
        salaryMin, 
        salaryMax, 
        deadline, 
        description 
    } = req.body;

    const job = new Job({
        jobTitle,
        companyName,
        location,
        jobType,
        salaryMin,
        salaryMax,
        deadline,
        description
    });

    try {
        const newJob = await job.save();
        console.log("Job created successfully");
        res.status(201).json(newJob);
    } catch (error) {
        // Provide more specific error messages if possible
        res.status(400).json({ message: error.message }); 
    }
});

// Get a specific job
router.get('/:id', async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);
        if (job) {
            res.json(job); 
        } else {
            res.status(404).json({ message: 'Job not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update a job
router.patch('/:id', async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }

        // Define allowed fields to update based on the new schema
        const allowedUpdates = ['jobTitle', 'companyName', 'location', 'jobType', 'salaryMin', 'salaryMax', 'deadline', 'description'];
        
        Object.keys(req.body).forEach(key => {
            // Only update allowed fields and if the value is provided
            if (allowedUpdates.includes(key) && req.body[key] != null) {
                job[key] = req.body[key];
            }
        });

        const updatedJob = await job.save();
        res.json(updatedJob);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a job
router.delete('/:id', async (req, res) => {
    try {
        // Use findByIdAndDelete for atomicity and efficiency
        const job = await Job.findByIdAndDelete(req.params.id);
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }
        res.json({ message: 'Job deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router; 