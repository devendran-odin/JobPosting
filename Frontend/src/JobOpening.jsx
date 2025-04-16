import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import publishImage from "./assets/PublishImage.png"
import downArrowImage from "./assets/downArrow.png"
import { useState } from "react"
import toast from "react-hot-toast"
import axios from 'axios'

// Create a custom event for job creation
const jobCreatedEvent = new Event('jobCreated');

export default function JobOpening({ onClose }) {
    const [formData, setFormData] = useState({
        jobTitle: "",
        companyName: "",
        location: "",
        jobType: "",
        salaryMin: "",
        salaryMax: "",
        deadline: "",
        description: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSelectChange = (name, value) => {
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validateForm = () => {
        if (!formData.jobTitle.trim()) {
            toast.error("Job Title is required");
            return false;
        }
        if (!formData.companyName.trim()) {
            toast.error("Company Name is required");
            return false;
        }
        if (!formData.location) {
            toast.error("Location is required");
            return false;
        }
        if (!formData.jobType) {
            toast.error("Job Type is required");
            return false;
        }
        if (!formData.salaryMin.trim() || !formData.salaryMax.trim()) {
            toast.error("Salary range is required");
            return false;
        }
        if (Number(formData.salaryMin) >= Number(formData.salaryMax)) {
            toast.error("Maximum salary should be greater than minimum salary");
            return false;
        }
        if (!formData.deadline) {
            toast.error("Application deadline is required");
            return false;
        }
        if (!formData.description.trim()) {
            toast.error("Job description is required");
            return false;
        }
        return true;
    };

    const handlePublish = async () => {
        if (validateForm()) {
            const backendUrl = import.meta.env.VITE_BACKEND_URL;
            console.log('Backend URL:', backendUrl);
            
            const dataToSend = {
                ...formData,
                salaryMin: Number(formData.salaryMin),
                salaryMax: Number(formData.salaryMax)
            };
            
            console.log('Form Data being sent:', dataToSend);
            try {
                const response = await axios.post(`${backendUrl}/api/jobs`, dataToSend);
                console.log('Response:', response);
                if (response.status === 201) {
                    // Reset form
                    setFormData({
                        jobTitle: "",
                        companyName: "",
                        location: "",
                        jobType: "",
                        salaryMin: "",
                        salaryMax: "",
                        deadline: "",
                        description: ""
                    });
                    
                    // Show success toast
                    toast.success("Job Opening created successfully!");
                    
                    // Dispatch the custom event
                    window.dispatchEvent(jobCreatedEvent);

                    // Close the modal
                    if (onClose) {
                        onClose();
                    }
                } else {
                    toast.error("Failed to create job opening. Unexpected status: " + response.status);
                }
            } catch (error) {
                console.error("Full error object:", error);
                console.error("Error response data:", error.response?.data);
                console.error("Error status:", error.response?.status);
                // More detailed error message
                let errorMessage = "An error occurred while creating the job opening.";
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    errorMessage = error.response.data?.message || `Server error: ${error.response.status}`;
                } else if (error.request) {
                    // The request was made but no response was received
                    errorMessage = "No response received from server. Please check if the backend is running.";
                } else {
                    // Something happened in setting up the request that triggered an Error
                    errorMessage = error.message;
                }
                toast.error(errorMessage);
            }
        }
    };

    return(
       <>
       <div className="w-[848px] h-[785px] border rounded-[16px] bg-white shadow-md p-3">
            <h1 className="text-[24px] font-[700] text-center mt-5 text-[#222222] mb-10">Create Job Opening</h1>
            <div className="px-8">
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="block text-[20px] font-[600] text-[#222222] mb-2">Job Title</label>
                        <input 
                            type="text" 
                            name="jobTitle"
                            value={formData.jobTitle}
                            onChange={handleInputChange}
                            placeholder="Full Stack Developer"
                            className="w-full h-[58px] p-2 border text-[18px] font-[500] rounded-[10px] focus:outline-gray-500 active:outline-gray-500"
                        />
                    </div>
                    <div>
                        <label className="block text-[20px] font-[600] text-[#222222] mb-2">Company Name</label>
                        <input 
                            type="text" 
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleInputChange}
                            placeholder="Amazon, Microsoft, Swiggy"
                            className="w-full h-[58px] p-2 border text-[18px] font-[500] rounded-[10px] focus:outline-gray-500 active:outline-gray-500"
                        />
                    </div>
                    <div>
                        <label className="block text-[20px] font-[600] text-[#222222] mb-2">Location</label>
                        <Select onValueChange={(value) => handleSelectChange("location", value)}>
                            <SelectTrigger className="w-full !h-[58px] px-2 border text-[18px] font-[500] rounded-[10px] focus:outline-gray-500 active:outline-gray-500 !bg-white">
                                <SelectValue placeholder="Choose Preferred Location" className="text-gray-500"/>
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                                <SelectItem value="Chennai" className="text-[16px] font-[500]">Chennai</SelectItem>
                                <SelectItem value="Bengaluru" className="text-[16px] font-[500]">Bengaluru</SelectItem>
                                <SelectItem value="Hyderabad" className="text-[16px] font-[500]">Hyderabad</SelectItem>
                                <SelectItem value="Mumbai" className="text-[16px] font-[500]">Mumbai</SelectItem>
                                <SelectItem value="Pune" className="text-[16px] font-[500]">Pune</SelectItem>
                                <SelectItem value="Delhi" className="text-[16px] font-[500]">Delhi</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <label className="block text-[20px] font-[600] text-[#222222] mb-2">Job Type</label>
                        <Select onValueChange={(value) => handleSelectChange("jobType", value)}>
                            <SelectTrigger className="w-full !h-[58px] px-2 border text-[18px] font-[500] rounded-[10px] focus:outline-gray-500 active:outline-gray-500 !bg-white">
                                <SelectValue placeholder="FullTime" className="text-gray-500"/>
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                                <SelectItem value="Full Time" className="text-[16px] font-[500]">Full Time</SelectItem>
                                <SelectItem value="Part Time" className="text-[16px] font-[500]">Part Time</SelectItem>
                                <SelectItem value="Contract" className="text-[16px] font-[500]">Contract</SelectItem>
                                <SelectItem value="Internship" className="text-[16px] font-[500]">Internship</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <label className="block text-[20px] font-[600] text-[#222222] mb-2">Salary Range</label>
                        <div className="flex gap-3 items-center">
                            <div className="relative flex-1">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                                <input 
                                    type="text" 
                                    name="salaryMin"
                                    value={formData.salaryMin}
                                    onChange={handleInputChange}
                                    placeholder="0"
                                    className="w-full h-[58px] pl-7 pr-2 border text-[18px] font-[500] rounded-[10px] focus:outline-gray-500 active:outline-gray-500"
                                />
                            </div>
                            <div className="relative flex-1">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                                <input 
                                    type="text" 
                                    name="salaryMax"
                                    value={formData.salaryMax}
                                    onChange={handleInputChange}
                                    placeholder="12,00,000"
                                    className="w-full h-[58px] pl-7 pr-2 border text-[18px] font-[500] rounded-[10px] focus:outline-gray-500 active:outline-gray-500"
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="block text-[20px] font-[600] text-[#222222] mb-2">Application Deadline</label>
                        <input 
                            type="date" 
                            name="deadline"
                            value={formData.deadline}
                            onChange={handleInputChange}
                            className="w-full h-[58px] p-2 border text-[18px] font-[500] rounded-[10px] focus:outline-gray-500 active:outline-gray-500 text-gray-500"
                        />
                    </div>
                </div>
                <div className="mt-6">
                    <label className="block text-[20px] font-[600] text-[#222222] mb-2">Job Description</label>
                    <textarea 
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Please share a description to let the candidate know more about the job role"
                        className="w-full h-[169px] p-4 border text-gray-600 text-[16px] font-[500] rounded-[10px] focus:outline-gray-500 active:outline-gray-500 resize-none"
                    />
                </div>
                <div className="flex justify-between mt-3.5">
                    <button className="px-[60px] py-[16px] bg-white rounded-[10px] text-[20px] font-[600] text-[#222222] border-2 border-gray-500 flex items-center gap-3 ">
                        Save Draft <span><img src={downArrowImage} alt="down" className="w-[14px] h-[12px]" /></span>
                    </button>
                    <button 
                        onClick={handlePublish}
                        className="px-[60px] py-[16px] bg-[#00AAFF] rounded-[10px] text-[20px] font-[600] text-white flex items-center gap-3 cursor-pointer hover:bg-[#0088cc]"
                    >
                        Publish <span><img src={publishImage} alt="push" className="w-[14px] h-[12px]" /></span>
                    </button>
                </div>
            </div>
       </div>
       </>
    )
}