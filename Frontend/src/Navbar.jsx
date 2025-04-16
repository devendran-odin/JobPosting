import { Button } from "@/components/ui/button"
import logo from "./assets/logo.png"
import JobOpening from "./JobOpening"
import { useState } from "react"

export default function Navbar() {
    const [showJobOpening, setShowJobOpening] = useState(false);

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            setShowJobOpening(false);
        }
    };

    const handleClose = () => {
        setShowJobOpening(false);
    };

    return (
        <div className="pt-5 relative">
            {showJobOpening && (
                <>
                    <div className="fixed inset-0 bg-black/60 z-40" onClick={handleOverlayClick} />
                    <div className="absolute top-[117px] left-1/2 transform -translate-x-1/2 z-50">
                        <JobOpening onClose={handleClose} />
                    </div>
                </>
            )}
            <div className="flex justify-between items-center border border-gray-50 shadow-lg bg-white w-fit h-[80px] mx-auto rounded-[122px] py-[16px] px-[26px]">
                        <div>
                            <img src={logo} alt="logo"  className="w-[44px] h-[44px]"/>
                        </div>
                        <div className="flex px-[30px]">
                            <p className="text-[16px] font-medium px-[24px] py-[8px]">Home</p>
                            <p className="text-[16px] font-medium px-[24px] py-[8px]">Find Jobs</p>
                            <p className="text-[16px] font-medium px-[24px] py-[8px]">Find Talents</p>
                            <p className="text-[16px] font-medium px-[24px] py-[8px]">About us</p>
                            <p className="text-[16px] font-medium px-[24px] py-[8px]">Testimonials</p>
                        </div>
                        <div>
                            <Button 
                                onClick={() => setShowJobOpening(!showJobOpening)}
                                className="cursor-pointer bg-gradient-to-b from-[#A128FF] to-[#6100AD] text-white px-[24px] py-[8px] rounded-[30px]"
                            >
                                Create Job
                            </Button>
                        </div>
            </div>
        </div>
    )
}