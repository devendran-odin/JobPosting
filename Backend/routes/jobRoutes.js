import express from 'express';
const router = express.Router();
import Job from '../models/Job.js';
// Get all jobs with filters
router.get('/', async (req, res) => {
    try {
        const { search, location, jobType, salaryMin, salaryMax } = req.query;
        
        // Build query object
        const query = {};
        
        if (search) {
            query.$or = [
                { jobTitle: { $regex: search, $options: 'i' } },
                { companyName: { $regex: search, $options: 'i' } }
            ];
        }
        
        // Location filter
        if (location && location !== 'all') {
            query.location = location;
        }
        
        // Job type filter
        if (jobType && jobType !== 'all') {
            query.jobType = jobType;
        }
        
        // Salary range filter (values are in LPA from frontend)
        if (salaryMin || salaryMax) {
            const minLPA = salaryMin ? parseFloat(salaryMin) : 0;
            const maxLPA = salaryMax ? parseFloat(salaryMax) : 100;
            
            // Convert LPA to absolute values (LPA * 100000)
            const minSalary = minLPA * 100000;
            const maxSalary = maxLPA * 100000;
            
            // Job should match if there's any overlap in the salary ranges
            query.$and = [
                { salaryMax: { $gte: minSalary } },  // Job's max salary should be >= filter's min
                { salaryMin: { $lte: maxSalary } }   // Job's min salary should be <= filter's max
            ];
        }

        const jobs = await Job.find(query);
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new job
router.post('/', async (req, res) => {

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





export default router; 