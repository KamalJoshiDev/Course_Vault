import React, { useState } from 'react';
import Course from './StudyMaterials';
import StudyMaterials from './StudyMaterials';
import Navbar from './Navbar';

const Home = () => {
    const [isCoursesOpen, setIsCoursesOpen] = useState(false);
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);

    return (
        <div className="relative bg-gradient-to-b from-green-50 to-green-100">
  
            <section className="overflow-hidden">
                <div className="flex flex-col lg:flex-row lg:items-stretch lg:max-h-[900px] lg:min-h-[900px]">
                    <div className="flex items-center justify-center w-full lg:order-2 lg:w-7/12">
                        <div className="h-full px-4 pt-24 pb-16 sm:px-6 lg:px-24 2xl:px-32 lg:pt-40 lg:pb-14">
                            <div className="flex flex-col justify-between flex-1 h-full">
                                <div>
                                    <h1 className="text-4xl font-bold text-black sm:text-6xl xl:text-7xl">Your Study Companion</h1>

                                    <ul className="mt-4 space-y-3 text-black sm:text-lg lg:mt-6">
                                        <li className="flex items-center">
                                            <svg className="w-5 h-5 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            Access high-quality lecture notes and study guides
                                        </li>
                                        <hr />
                                        <li className="flex items-center">
                                            <svg className="w-5 h-5 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            Enroll in interactive online courses
                                        </li>
                                        <hr />
                                        <li className="flex items-center">
                                            <svg className="w-5 h-5 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            Download practice tests and mock exams
                                        </li>
                                    </ul>

                                    <a href="#" className="inline-flex items-center px-6 py-5 text-base font-semibold text-black transition-all duration-200 bg-green-300 mt-9 hover:bg-green-400">
                                        Explore Resources
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                    </div>



                    <div className="relative w-full overflow-hidden lg:w-5/12 lg:order-1">
                        <div className="lg:absolute lg:bottom-0 lg:left-0">
                            <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/phone-mockup.png" alt="Mockup" />
                        </div>
                    </div>

                </div>
            </section>

    
        </div>
        

    );
};

export default Home;
