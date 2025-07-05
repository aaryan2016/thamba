"use client"
import React from 'react'
import { Button } from './ui/button'
import { Job } from '@/data/jobsData';

function JobCard({
    jobTitle, aboutTheJob, requirements }: Omit<Job, 'id'>) {

    const handleApplyClick = () => {
        const formElement = document.getElementById('footer-form');
        if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="jobCard flex flex-col md:flex-row mx-4 md:mx-12 my-10 md:my-20">

            {/* Left Section */}
            <div className="leftPortion w-full md:w-5/12">
                <div className="jobTitle font-helvetica-light text-2xl sm:text-3xl md:text-4xl w-full md:w-5/6 leading-tight mb-6">
                    {jobTitle}
                </div>
                <Button
                    className="mt-4 md:mt-14 px-6 sm:px-10 md:px-16 py-3 sm:py-6 md:py-8 text-base sm:text-lg md:text-xl font-helvetica-light cursor-pointer"
                    onClick={handleApplyClick}>
                    APPLY
                </Button>
            </div>

            {/* Right Section */}
            <div className="jobDetails w-full md:w-7/12">
                <div className="aboutTheJob font-helvetica-light text-2xl">ABOUT THE JOB</div>
                {aboutTheJob.split("\n").map((para, i) => (
                    <div key={i} className="jobDetails mt-9 mb-18 w-10/12 font-helvetica-light">
                        {para.trim()}
                    </div>
                ))}
                {/* <div className="jobDetails mt-9 mb-18 w-10/12 font-helvetica-light">
                    {aboutTheJob}
                </div> */}
                <div className="requirements my-9 font-helvetica-light text-2xl">REQUIREMENTS</div>
                <div className="jobRequirements pl-2">
                    {/* {requirements.map(reqmnt => (
                        <li>{reqmnt}</li>
                    ))} */}
                    {requirements.map((item, index) => (
                        <li key={index}>
                            {item}
                        </li>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default JobCard