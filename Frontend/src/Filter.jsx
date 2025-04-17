import location from "./assets/location.png";
import search from "./assets/search.png";
import jobType from "./assets/jobType.png";
import { Input } from "@/components/ui/input";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { useState, useEffect } from "react";
import axios from "axios";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Filter() {
  // Filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedJobType, setSelectedJobType] = useState("");
  const [salaryRange, setSalaryRange] = useState([20000, 750000]);

  // Debounce search and salary changes
  const [debouncedSearch, setDebouncedSearch] = useState(searchQuery);
  const [debouncedSalary, setDebouncedSalary] = useState(salaryRange);

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Debounce salary range
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSalary(salaryRange);
    }, 300);
    return () => clearTimeout(timer);
  }, [salaryRange]);

  // Apply filters
  useEffect(() => {
    applyFilters();
  }, [debouncedSearch, selectedLocation, selectedJobType, debouncedSalary]);

  const applyFilters = async () => {
    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL;
      const params = new URLSearchParams();

      if (debouncedSearch.trim())
        params.append("search", debouncedSearch.trim());
      if (selectedLocation && selectedLocation !== "all")
        params.append("location", selectedLocation);
      if (selectedJobType && selectedJobType !== "all")
        params.append("jobType", selectedJobType);

      // Convert monthly salary to yearly salary first
      const minYearly = debouncedSalary[0] * 12;
      const maxYearly = debouncedSalary[1] * 12;

      // Then convert to LPA
      const minLPA = Math.floor(minYearly / 100000);
      const maxLPA = Math.ceil(maxYearly / 100000);

      if (minLPA > 0) params.append("salaryMin", minLPA.toString());
      if (maxLPA < 100) params.append("salaryMax", maxLPA.toString());

      const response = await axios.get(
        `${backendUrl}/api/jobs?${params.toString()}`
      );
      window.dispatchEvent(
        new CustomEvent("filterUpdate", { detail: response.data })
      );
    } catch (error) {
      if (error.response) {
        console.error("Error applying filters:", error.response.data);
      }
    }
  };

  const formatSalary = (value) => {
    return `₹${(value / 1000).toFixed(0)}k`;
  };

  return (
    <>
      <div className="flex justify-between items-center bg-white shadow-md mt-7 px-1 xl:px-7.5 ">
        <div className="flex items-center justify-center py-5 pl-4 pr-8">
          <img src={search} alt="search" className="w-[18px] h-[18px]" />
          <Input
            type="text"
            placeholder="Search By Job Title, Role"
            className="xl:w-[280px] h-[40px] rounded-[10px] ml-1 border-none outline-none text-[16px] bg-white text-gray-700"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center border-x-2 my-3 border-gray-300 py-1 px-8">
          <img src={location} alt="location" className="w-[16px] h-[21px]" />
          <Select value={selectedLocation} onValueChange={setSelectedLocation}>
            <SelectTrigger className="xl:w-[230px] text-[16px] select-trigger ml-1">
              <SelectValue
                placeholder="Preferred Location"
                className="text-[16px] select-value"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="Chennai">Chennai</SelectItem>
              <SelectItem value="Bengaluru">Bengaluru</SelectItem>
              <SelectItem value="Hyderabad">Hyderabad</SelectItem>
              <SelectItem value="Mumbai">Mumbai</SelectItem>
              <SelectItem value="Pune">Pune</SelectItem>
              <SelectItem value="Delhi">Delhi</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center border-r-2 my-3 border-gray-300 py-1 px-8">
          <img src={jobType} alt="jobType" className="w-[18px] h-[16px]" />
          <Select value={selectedJobType} onValueChange={setSelectedJobType}>
            <SelectTrigger className="xl:w-[230px] text-[16px] select-trigger ml-1">
              <SelectValue placeholder="Job Type" className="select-value" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="Full Time">Full Time</SelectItem>
              <SelectItem value="Part Time">Part Time</SelectItem>
              <SelectItem value="Contract">Contract</SelectItem>
              <SelectItem value="Internship">Internship</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col py-3 px-8">
          <div className="flex items-center gap-2">
            <p className="text-[16px] font-medium text-gray-600">
              Salary Per Month
            </p>
            <span className="text-gray-700">
              {formatSalary(salaryRange[0])}
            </span>
            <span className="text-gray-600">-</span>
            <span className="text-gray-700">
              {formatSalary(salaryRange[1])}
            </span>
          </div>
          <div className="xl:w-[250px] px-2 mt-2">
            <RangeSlider
              min={20000}
              max={750000}
              step={5000}
              value={salaryRange}
              onInput={setSalaryRange}
              className="range-slider"
            />
          </div>
        </div>
      </div>
    </>
  );
}
