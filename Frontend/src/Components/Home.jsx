import React, { useState } from 'react';
import Step from './Step';

import UpcomingCourse from './UpcomingCourse';
import { Link } from 'react-router-dom';



const Home = () => {
  

    return (
        <>
            <div className="relative bg-grey-100">

                <section className="overflow-hidden w-full h-full">
        {/* right part */}
                    <div className="flex flex-col lg:flex-row lg:items-stretch lg:max-h-[900px] lg:min-h-[900px]">
                        <div className="flex items-center justify-center w-full lg:order-2 lg:w-7/12">
                            <div className="h-full px-4 pt-24 pb-16 sm:px-6 lg:px-24 2xl:px-32 lg:pt-40 lg:pb-14">
                                <div className="flex flex-col justify-between flex-1 h-full">
                                    <div>
                                        <h1 className="text-4xl font-bold text-black sm:text-6xl xl:text-7xl">Your  <span className='inline text-green-300'> Study</span> Companion</h1>

                                        <ul className="mt-10 space-y-3 text-black sm:text-lg lg:mt-6">
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

                                        <Link to="/resource" className="inline-flex items-center px-6 py-3 text-base font-semibold text-black transition-all duration-200 bg-green-300 mt-9 hover:bg-green-400">
                                            Explore Resources
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>


{/* left part */}
                        <div className="relative h-[300px] lg:h-[550px] mt-30 flex items-center justify-center ml-20 cursor-pointer">
                            <div className="w-full lg:w-[450px] h-full ">
                                <img className="w-full h-full object-cover rounded-xl shadow-lg" src="https://images.pexels.com/photos/2393789/pexels-photo-2393789.jpeg" alt="Mockup" />
                            </div>
                        </div>

                    </div>
                </section>

            </div>

            <UpcomingCourse />
            <Step />

        </>

    );
};

export default Home;
