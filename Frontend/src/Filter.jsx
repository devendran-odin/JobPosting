import location from "./assets/location.png"
import search from "./assets/search.png"
import jobType from "./assets/jobType.png"
import { Input } from "@/components/ui/input"
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { useState } from 'react';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
export default function Filter(){
    const [salaryRange, setSalaryRange] = useState([20000, 80000]);

    const formatSalary = (value) => {
        return `₹${(value / 1000).toFixed(0)}k`;
    };

    return(
        <>   
        <div className="flex justify-between items-center  bg-white shadow-md  mt-7 px-12 py-1">
            <div className="flex items-center justify-center py-2">
                    <img src={search} alt="search" className="w-[18px] h-[18px] "/>
                    <Input type="text" placeholder="Search By Job Title, Role" className="w-[300px] h-[40px] rounded-[10px] ml-1 border-none outline-none text-[16px] bg-white text-gray-700" />
            </div>
            <div className="flex items-center border-x-2 border-gray-300 px-12 py-2">
                <img src={location} alt="location" className="w-[16px] h-[21px] " />
                <Select>
                <SelectTrigger className="w-[230px] text-[16px] select-trigger ml-1">
                    <SelectValue placeholder="Preferred Locations" className="text-[16px] select-value"/>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Chennai">Chennai</SelectItem>
                    <SelectItem value="Bengaluru">Bengaluru</SelectItem>
                    <SelectItem value="Hyderabad">Hyderabad</SelectItem>
                    <SelectItem value="Mumbai">Mumbai</SelectItem>
                    <SelectItem value="Pune">Pune</SelectItem>
                    <SelectItem value="Delhi">Delhi</SelectItem>
                </SelectContent>
                </Select>
            </div>
            <div className="flex items-center border-r-2 border-gray-300 px-8 py-2">
                <img src={jobType} alt="jobType" className="w-[18px] h-[16px] "/>
                <Select>
                <SelectTrigger className="w-[200px] text-[16px] select-trigger ml-1">
                    <SelectValue placeholder="Job Type" className="select-value"/>
                </SelectTrigger>
                <SelectContent>
                        <SelectItem value="Full Time">Full Time</SelectItem>
                        <SelectItem value="Part Time">Part Time</SelectItem>
                        <SelectItem value="Contract">Contract</SelectItem>
                        <SelectItem value="Internship">Internship</SelectItem>
        
                </SelectContent>
                </Select>
            </div>
            <div className="flex flex-col items-center  py-1 px-6" >
                <div className="flex items-start justify-between">
                    <p className="text-[16px] font-medium px-[24px] text-gray-600">Salary Per Month</p>
                    <span className=" text-gray-700">{formatSalary(salaryRange[0])}</span> 
                    <span className="px-1.5 text-gray-600"> - </span>
                    <span className="text-gray-700">{formatSalary(salaryRange[1])}</span>
                </div>
                <div className="w-[250px] px-2 my-4">
                    <RangeSlider
                        min={10000}
                        max={200000}
                        step={10000}
                        value={salaryRange}
                        onInput={setSalaryRange}
                        className="range-slider"
                    />
                </div>
            </div>
        </div>
        </>
    )
}