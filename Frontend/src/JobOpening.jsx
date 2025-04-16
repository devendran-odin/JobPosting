import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import publishImage from "./assets/PublishImage.png"
  import downArrowImage from "./assets/downArrow.png"
export default function JobOpening(){
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
                            placeholder="Full Stack Developer"
                            className="w-full h-[58px] p-2 border text-[18px] font-[500] rounded-[10px] focus:outline-gray-500 active:outline-gray-500"
                        />
                    </div>
                    <div>
                        <label className="block text-[20px] font-[600] text-[#222222] mb-2">Company Name</label>
                        <input 
                            type="text" 
                            placeholder="Amazon, Microsoft, Swiggy"
                            className="w-full h-[58px] p-2 border text-[18px] font-[500] rounded-[10px] focus:outline-gray-500 active:outline-gray-500"
                        />
                    </div>
                    <div>
                        <label className="block text-[20px] font-[600] text-[#222222] mb-2">Location</label>
                        <Select>
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
                        <Select>
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
                                    placeholder="0"
                                    className="w-full h-[58px] pl-7 pr-2 border text-[18px] font-[500] rounded-[10px] focus:outline-gray-500 active:outline-gray-500"
                                />
                            </div>
                            <div className="relative flex-1">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                                <input 
                                    type="text" 
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
                            className="w-full h-[58px] p-2 border text-[18px] font-[500] rounded-[10px] focus:outline-gray-500 active:outline-gray-500 text-gray-500"
                        />
                    </div>
                </div>
                <div className="mt-6">
                    <label className="block text-[20px] font-[600] text-[#222222] mb-2">Job Description</label>
                    <textarea 
                        placeholder="Please share a description to let the candidate know more about the job role"
                        className="w-full h-[169px] p-4 border text-gray-600 text-[16px] font-[500] rounded-[10px] focus:outline-gray-500 active:outline-gray-500 resize-none"
                    />
                </div>
                <div className="flex justify-between mt-3.5">
                <button className="px-[60px] py-[16px] bg-white rounded-[10px] text-[20px] font-[600] text-[#222222] border-2 border-gray-500 flex items-center gap-3 ">
                        Save Draft <span><img src={downArrowImage} alt="down" className="w-[14px] h-[12px]" /></span>
                    </button>
                    <button className="px-[60px] py-[16px] bg-[#00AAFF] rounded-[10px] text-[20px] font-[600] text-white flex items-center gap-3 cursor-pointer hover:bg-[#0088cc]">
                        Publish <span><img src={publishImage} alt="push" className="w-[14px] h-[12px]" /></span>
                    </button>
                </div>
            </div>
       </div>
       </>
    )
}