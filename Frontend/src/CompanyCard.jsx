import amazon from "./assets/amazon.png";
import tesla from "./assets/Tesla.png";
import swiggy from "./assets/swiggy.png";
import logo from "./assets/logo.png";
import location from "./assets/location.png";
import jobSite from "./assets/jobSite.png";
import salary from "./assets/salary.png";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingMessage from "./LoadingMessage";

// Utility function to convert salary to LPA format
const convertToLPA = (salary) => {
  const lpa = salary / 100000;
  // If it's a whole number, don't show decimal places
  return `${Number.isInteger(lpa) ? lpa : lpa.toFixed(1)}LPA`;
};

// Utility function to get company logo
const getCompanyLogo = (companyName) => {
  const name = companyName.toLowerCase();
  if (name === "amazon") return amazon;
  if (name === "tesla") return tesla;
  if (name === "swiggy") return swiggy;
  return logo;
};

// Utility function to calculate time difference
const getTimeDifference = (createdAt) => {
  const now = new Date();
  const created = new Date(createdAt);
  const diffInHours = Math.floor((now - created) / (1000 * 60 * 60));

  if (diffInHours < 24) {
    return `${diffInHours}h Ago`;
  } else {
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}d Ago`;
  }
};

export default function CompanyCard() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const backendUrl = import.meta.env.VITE_BACKEND_URL;
      const response = await axios.get(`${backendUrl}/api/jobs`);
      setJobs(response.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching jobs:", err);
      setError("Failed to load jobs");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();

    // Add event listeners for job creation and filter updates
    const handleJobCreated = () => {
      fetchJobs();
    };

    const handleFilterUpdate = (event) => {
      setJobs(event.detail);
    };

    window.addEventListener("jobCreated", handleJobCreated);
    window.addEventListener("filterUpdate", handleFilterUpdate);

    // Cleanup
    return () => {
      window.removeEventListener("jobCreated", handleJobCreated);
      window.removeEventListener("filterUpdate", handleFilterUpdate);
    };
  }, []);

  if (loading) {
    return <LoadingMessage />;
  }

  if (error) {
    return (
      <div className="text-red-500 mt-40 text-center text-xl">Server Error</div>
    );
  }

  return (
    <>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex items-center justify-start flex-wrap gap-4.5 mt-8 mb-10">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="w-[316px] h-[360px] border rounded-[16px] bg-white shadow-md p-3"
            >
              <div className="flex items-start justify-between">
                <div className="w-[83px] h-[82px] flex items-center justify-center">
                  <img
                    src={getCompanyLogo(job.companyName)}
                    alt={job.companyName}
                    className={`${
                      ["amazon", "tesla", "swiggy"].includes(
                        job.companyName.toLowerCase()
                      )
                        ? "w-full h-full object-contain"
                        : "w-[60px] h-[60px] rounded-full"
                    }`}
                  />
                </div>
                <div className="flex mt-2.5 mr-1.5">
                  <button className="rounded-[10px] bg-[#B0D9FF] text-black text-xs px-3 py-2">
                    {getTimeDifference(job.createdAt)}
                  </button>
                </div>
              </div>
              <div>
                <p className="text-[20px] font-[700] pl-1.5 pt-3">
                  {job.jobTitle}
                </p>
              </div>
              <div className="flex items-center justify-between mt-2.5 mx-2 pr-3 text-[#5A5A5A]">
                <div className="flex items-center gap-1">
                  <img
                    src={location}
                    alt="location"
                    className="w-[14px] h-[15px]"
                  />
                  <p className="text-[16px]">{job.location}</p>
                </div>
                <div className="flex items-center gap-1">
                  <img
                    src={jobSite}
                    alt="jobSite"
                    className="w-[17px] h-[14.3px]"
                  />
                  <p className="text-[16px]">{job.jobType}</p>
                </div>
                <div className="flex items-center gap-1">
                  <img
                    src={salary}
                    alt="salary"
                    className="w-[16px] h-[18px]"
                  />
                  <p className="text-[16px]">{convertToLPA(job.salaryMax)}</p>
                </div>
              </div>
              <div className="h-[86px] line-clamp-4 truncate text-wrap mt-4.5 mx-0.5">
                <p className="text-[14px]">{job.description}</p>
              </div>
              <div>
                <button className="bg-[#00AAFF] w-full text-white text-[16px] py-[12px] px-[10px] rounded-[10px] mt-6 cursor-pointer hover:bg-[#0088cc]">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
