import amazon from "./assets/amazon.png"
import Experience from "./assets/experience.png"
import jobSite from "./assets/jobSite.png"
import salary from "./assets/salary.png"

export default function CompanyCard(){
    return(
        <>
        <div className="flex items-center justify-center flex-wrap gap-4.5 mt-8 mb-10">
            <div className="w-[316px] h-[360px] border rounded-[16px] bg-white shadow-md p-3">
                <div className="flex items-start justify-between ">
                    <div className="w-[83px] h-[82px]">
                        <img src={amazon} alt="amazon" />
                    </div>
                    <div className="flex mt-2.5 mr-1.5">
                        <button className="rounded-[10px] bg-[#B0D9FF] text-black text-xs px-3 py-2">24h Ago</button>
                    </div>
                </div>
                <div>
                    <p className="text-[20px] font-[700] pl-1.5 pt-3">Full Stack Developer</p>
                </div>
                <div className="flex items-center  justify-between mt-2.5 mx-2 pr-3 text-[#5A5A5A]">
                    <div className="flex items-center gap-1">
                        <img src={Experience} alt="experience"  className="w-[17px] h-[13.2px]"/>
                        <p className="text-[16px]">1-3 yr Exp</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <img src={jobSite} alt="jobSite"  className="w-[17px] h-[14.3px]"/>
                        <p className="text-[16px]">Onsite</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <img src={salary} alt="salary" className="w-[16px] h-[18px]" />
                        <p className="text-[16px]">12LPA</p>
                    </div>
                </div>
                <div className="h-[86px]  line-clamp-4 truncate text-wrap  mt-4.5 mx-0.5">
                    <p className="text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos dolor sit amet consectetur adipisicing elit. Quisquam, quos dolor sit amet consectetur adipisicing elit.Quisquam, quos dolor sit amet consectetur adipisicing elit.Quisquam, quos dolor sit amet consectetur adipisicing elit. </p>
                </div>
                <div>
                    <button className="bg-[#00AAFF] w-full text-white text-[16px] py-[12px] px-[10px] rounded-[10px] mt-6 cursor-pointer">Apply Now</button>
                </div>
            </div>
            <div className="w-[316px] h-[360px] border rounded-[16px] bg-white shadow-md p-3">
                <div className="flex items-start justify-between ">
                    <div className="w-[83px] h-[82px]">
                        <img src={amazon} alt="amazon" />
                    </div>
                    <div className="flex mt-2.5 mr-1.5">
                        <button className="rounded-[10px] bg-[#B0D9FF] text-black text-xs px-3 py-2">24h Ago</button>
                    </div>
                </div>
                <div>
                    <p className="text-[20px] font-[700] pl-1.5 pt-3">Full Stack Developer</p>
                </div>
                <div className="flex items-center  justify-between mt-2.5 mx-2 pr-3 text-[#5A5A5A]">
                    <div className="flex items-center gap-1">
                        <img src={Experience} alt="experience"  className="w-[17px] h-[13.2px]"/>
                        <p className="text-[16px]">1-3 yr Exp</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <img src={jobSite} alt="jobSite"  className="w-[17px] h-[14.3px]"/>
                        <p className="text-[16px]">Onsite</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <img src={salary} alt="salary" className="w-[16px] h-[18px]" />
                        <p className="text-[16px]">12LPA</p>
                    </div>
                </div>
                <div className="h-[86px]  line-clamp-4 truncate text-wrap  mt-4.5 mx-0.5">
                    <p className="text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos dolor sit amet consectetur adipisicing elit. Quisquam, quos dolor sit amet consectetur adipisicing elit.Quisquam, quos dolor sit amet consectetur adipisicing elit.Quisquam, quos dolor sit amet consectetur adipisicing elit. </p>
                </div>
                <div>
                    <button className="bg-[#00AAFF] w-full text-white text-[16px] py-[12px] px-[10px] rounded-[10px] mt-6 cursor-pointer">Apply Now</button>
                </div>
            </div>
            <div className="w-[316px] h-[360px] border rounded-[16px] bg-white shadow-md p-3">
                <div className="flex items-start justify-between ">
                    <div className="w-[83px] h-[82px]">
                        <img src={amazon} alt="amazon" />
                    </div>
                    <div className="flex mt-2.5 mr-1.5">
                        <button className="rounded-[10px] bg-[#B0D9FF] text-black text-xs px-3 py-2">24h Ago</button>
                    </div>
                </div>
                <div>
                    <p className="text-[20px] font-[700] pl-1.5 pt-3">Full Stack Developer</p>
                </div>
                <div className="flex items-center  justify-between mt-2.5 mx-2 pr-3 text-[#5A5A5A]">
                    <div className="flex items-center gap-1">
                        <img src={Experience} alt="experience"  className="w-[17px] h-[13.2px]"/>
                        <p className="text-[16px]">1-3 yr Exp</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <img src={jobSite} alt="jobSite"  className="w-[17px] h-[14.3px]"/>
                        <p className="text-[16px]">Onsite</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <img src={salary} alt="salary" className="w-[16px] h-[18px]" />
                        <p className="text-[16px]">12LPA</p>
                    </div>
                </div>
                <div className="h-[86px]  line-clamp-4 truncate text-wrap  mt-4.5 mx-0.5">
                    <p className="text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos dolor sit amet consectetur adipisicing elit. Quisquam, quos dolor sit amet consectetur adipisicing elit.Quisquam, quos dolor sit amet consectetur adipisicing elit.Quisquam, quos dolor sit amet consectetur adipisicing elit. </p>
                </div>
                <div>
                    <button className="bg-[#00AAFF] w-full text-white text-[16px] py-[12px] px-[10px] rounded-[10px] mt-6 cursor-pointer">Apply Now</button>
                </div>
            </div>
            <div className="w-[316px] h-[360px] border rounded-[16px] bg-white shadow-md p-3">
                <div className="flex items-start justify-between ">
                    <div className="w-[83px] h-[82px]">
                        <img src={amazon} alt="amazon" />
                    </div>
                    <div className="flex mt-2.5 mr-1.5">
                        <button className="rounded-[10px] bg-[#B0D9FF] text-black text-xs px-3 py-2">24h Ago</button>
                    </div>
                </div>
                <div>
                    <p className="text-[20px] font-[700] pl-1.5 pt-3">Full Stack Developer</p>
                </div>
                <div className="flex items-center  justify-between mt-2.5 mx-2 pr-3 text-[#5A5A5A]">
                    <div className="flex items-center gap-1">
                        <img src={Experience} alt="experience"  className="w-[17px] h-[13.2px]"/>
                        <p className="text-[16px]">1-3 yr Exp</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <img src={jobSite} alt="jobSite"  className="w-[17px] h-[14.3px]"/>
                        <p className="text-[16px]">Onsite</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <img src={salary} alt="salary" className="w-[16px] h-[18px]" />
                        <p className="text-[16px]">12LPA</p>
                    </div>
                </div>
                <div className="h-[86px]  line-clamp-4 truncate text-wrap  mt-4.5 mx-0.5">
                    <p className="text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos dolor sit amet consectetur adipisicing elit. Quisquam, quos dolor sit amet consectetur adipisicing elit.Quisquam, quos dolor sit amet consectetur adipisicing elit.Quisquam, quos dolor sit amet consectetur adipisicing elit. </p>
                </div>
                <div>
                    <button className="bg-[#00AAFF] w-full text-white text-[16px] py-[12px] px-[10px] rounded-[10px] mt-6 cursor-pointer">Apply Now</button>
                </div>
            </div>
            <div className="w-[316px] h-[360px] border rounded-[16px] bg-white shadow-md p-3">
                <div className="flex items-start justify-between ">
                    <div className="w-[83px] h-[82px]">
                        <img src={amazon} alt="amazon" />
                    </div>
                    <div className="flex mt-2.5 mr-1.5">
                        <button className="rounded-[10px] bg-[#B0D9FF] text-black text-xs px-3 py-2">24h Ago</button>
                    </div>
                </div>
                <div>
                    <p className="text-[20px] font-[700] pl-1.5 pt-3">Full Stack Developer</p>
                </div>
                <div className="flex items-center  justify-between mt-2.5 mx-2 pr-3 text-[#5A5A5A]">
                    <div className="flex items-center gap-1">
                        <img src={Experience} alt="experience"  className="w-[17px] h-[13.2px]"/>
                        <p className="text-[16px]">1-3 yr Exp</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <img src={jobSite} alt="jobSite"  className="w-[17px] h-[14.3px]"/>
                        <p className="text-[16px]">Onsite</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <img src={salary} alt="salary" className="w-[16px] h-[18px]" />
                        <p className="text-[16px]">12LPA</p>
                    </div>
                </div>
                <div className="h-[86px]  line-clamp-4 truncate text-wrap  mt-4.5 mx-0.5">
                    <p className="text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos dolor sit amet consectetur adipisicing elit. Quisquam, quos dolor sit amet consectetur adipisicing elit.Quisquam, quos dolor sit amet consectetur adipisicing elit.Quisquam, quos dolor sit amet consectetur adipisicing elit. </p>
                </div>
                <div>
                    <button className="bg-[#00AAFF] w-full text-white text-[16px] py-[12px] px-[10px] rounded-[10px] mt-6 cursor-pointer">Apply Now</button>
                </div>
            </div>
            <div className="w-[316px] h-[360px] border rounded-[16px] bg-white shadow-md p-3">
                <div className="flex items-start justify-between ">
                    <div className="w-[83px] h-[82px]">
                        <img src={amazon} alt="amazon" />
                    </div>
                    <div className="flex mt-2.5 mr-1.5">
                        <button className="rounded-[10px] bg-[#B0D9FF] text-black text-xs px-3 py-2">24h Ago</button>
                    </div>
                </div>
                <div>
                    <p className="text-[20px] font-[700] pl-1.5 pt-3">Full Stack Developer</p>
                </div>
                <div className="flex items-center  justify-between mt-2.5 mx-2 pr-3 text-[#5A5A5A]">
                    <div className="flex items-center gap-1">
                        <img src={Experience} alt="experience"  className="w-[17px] h-[13.2px]"/>
                        <p className="text-[16px]">1-3 yr Exp</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <img src={jobSite} alt="jobSite"  className="w-[17px] h-[14.3px]"/>
                        <p className="text-[16px]">Onsite</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <img src={salary} alt="salary" className="w-[16px] h-[18px]" />
                        <p className="text-[16px]">12LPA</p>
                    </div>
                </div>
                <div className="h-[86px]  line-clamp-4 truncate text-wrap  mt-4.5 mx-0.5">
                    <p className="text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos dolor sit amet consectetur adipisicing elit. Quisquam, quos dolor sit amet consectetur adipisicing elit.Quisquam, quos dolor sit amet consectetur adipisicing elit.Quisquam, quos dolor sit amet consectetur adipisicing elit. </p>
                </div>
                <div>
                    <button className="bg-[#00AAFF] w-full text-white text-[16px] py-[12px] px-[10px] rounded-[10px] mt-6 cursor-pointer">Apply Now</button>
                </div>
            </div>
            <div className="w-[316px] h-[360px] border rounded-[16px] bg-white shadow-md p-3">
                <div className="flex items-start justify-between ">
                    <div className="w-[83px] h-[82px]">
                        <img src={amazon} alt="amazon" />
                    </div>
                    <div className="flex mt-2.5 mr-1.5">
                        <button className="rounded-[10px] bg-[#B0D9FF] text-black text-xs px-3 py-2">24h Ago</button>
                    </div>
                </div>
                <div>
                    <p className="text-[20px] font-[700] pl-1.5 pt-3">Full Stack Developer</p>
                </div>
                <div className="flex items-center  justify-between mt-2.5 mx-2 pr-3 text-[#5A5A5A]">
                    <div className="flex items-center gap-1">
                        <img src={Experience} alt="experience"  className="w-[17px] h-[13.2px]"/>
                        <p className="text-[16px]">1-3 yr Exp</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <img src={jobSite} alt="jobSite"  className="w-[17px] h-[14.3px]"/>
                        <p className="text-[16px]">Onsite</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <img src={salary} alt="salary" className="w-[16px] h-[18px]" />
                        <p className="text-[16px]">12LPA</p>
                    </div>
                </div>
                <div className="h-[86px]  line-clamp-4 truncate text-wrap  mt-4.5 mx-0.5">
                    <p className="text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos dolor sit amet consectetur adipisicing elit. Quisquam, quos dolor sit amet consectetur adipisicing elit.Quisquam, quos dolor sit amet consectetur adipisicing elit.Quisquam, quos dolor sit amet consectetur adipisicing elit. </p>
                </div>
                <div>
                    <button className="bg-[#00AAFF] w-full text-white text-[16px] py-[12px] px-[10px] rounded-[10px] mt-6 cursor-pointer">Apply Now</button>
                </div>
            </div>
            <div className="w-[316px] h-[360px] border rounded-[16px] bg-white shadow-md p-3">
                <div className="flex items-start justify-between ">
                    <div className="w-[83px] h-[82px]">
                        <img src={amazon} alt="amazon" />
                    </div>
                    <div className="flex mt-2.5 mr-1.5">
                        <button className="rounded-[10px] bg-[#B0D9FF] text-black text-xs px-3 py-2">24h Ago</button>
                    </div>
                </div>
                <div>
                    <p className="text-[20px] font-[700] pl-1.5 pt-3">Full Stack Developer</p>
                </div>
                <div className="flex items-center  justify-between mt-2.5 mx-2 pr-3 text-[#5A5A5A]">
                    <div className="flex items-center gap-1">
                        <img src={Experience} alt="experience"  className="w-[17px] h-[13.2px]"/>
                        <p className="text-[16px]">1-3 yr Exp</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <img src={jobSite} alt="jobSite"  className="w-[17px] h-[14.3px]"/>
                        <p className="text-[16px]">Onsite</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <img src={salary} alt="salary" className="w-[16px] h-[18px]" />
                        <p className="text-[16px]">12LPA</p>
                    </div>
                </div>
                <div className="h-[86px]  line-clamp-4 truncate text-wrap  mt-4.5 mx-0.5">
                    <p className="text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos dolor sit amet consectetur adipisicing elit. Quisquam, quos dolor sit amet consectetur adipisicing elit.Quisquam, quos dolor sit amet consectetur adipisicing elit.Quisquam, quos dolor sit amet consectetur adipisicing elit. </p>
                </div>
                <div>
                    <button className="bg-[#00AAFF] w-full text-white text-[16px] py-[12px] px-[10px] rounded-[10px] mt-6 cursor-pointer">Apply Now</button>
                </div>
            </div>
            
          
        </div>
        </>
    )
}