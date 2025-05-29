import React from "react";

const UpcomingCourse = () => {
    return (
        <>
            <section className="text-center py-8 w-full max-w-6xl mx-auto text-gray-900 lg:mt-6 mb-4">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-wide mb-12">
                    Upcoming Course
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* AI Resource */}
                    <div className="relative">
                        <div className="overflow-hidden rounded-lg">
                            <div className="relative w-full h-72">
                                <img
                                    src="https://pics.craiyon.com/2024-09-17/xD8t_t1uTAWrVWlwTXayrA.webp"
                                    alt="AI Resource"
                                    className="w-full h-full object-cover"
                                />
                             
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">Artificial Intelligence</h3>
                            <p className="text-gray-600 mb-4">
                                Learn about AI concepts, deep learning, and how to integrate AI into your projects.
                            </p>
                            <ul className="flex gap-2 flex-wrap">
                                <li className="uppercase bg-[#d3b19a] text-gray-900 font-bold text-xs py-1 px-2 rounded-lg">
                                    Deep Learning
                                </li>
                                <li className="uppercase bg-[#70b3b1] text-gray-900 font-bold text-xs py-1 px-2 rounded-lg">
                                    NLP
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* ML Resource */}
                    <div className="relative">
                        <div className="overflow-hidden rounded-lg">
                            <div className="relative w-full h-72">
                                <img
                                    src="https://pics.craiyon.com/2024-09-16/aaoYYvoMQ3iRImCWHr0UZw.webp"
                                    alt="ML Resource"
                                    className="w-full h-full object-cover"
                                />
                                
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
                            <p className="text-gray-600 mb-4">
                                Master ML algorithms, data science techniques, and practical applications.
                            </p>
                            <ul className="flex gap-2 flex-wrap">
                                <li className="uppercase bg-[#d3b19a] text-gray-900 font-bold text-xs py-1 px-2 rounded-lg">
                                    Data Science
                                </li>
                                <li className="uppercase bg-[#d05fa2] text-gray-900 font-bold text-xs py-1 px-2 rounded-lg">
                                    AI Models
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Web Dev Resource */}
                    <div className="relative">
                        <div className="overflow-hidden rounded-lg">
                            <div className="relative w-full h-72">
                                <img
                                    src="https://pics.craiyon.com/2024-09-18/jQZOW_0LQVSa6AWwHS0iEg.webp"
                                    alt="Web Development Resource"
                                    className="w-full h-full object-cover"
                                />
                             
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                            <p className="text-gray-600 mb-4">
                                Learn frontend, backend, and full-stack development with hands-on projects.
                            </p>
                            <ul className="flex gap-2 flex-wrap">
                                <li className="uppercase bg-[#d3b19a] text-gray-900 font-bold text-xs py-1 px-2 rounded-lg">
                                    Frontend
                                </li>
                                <li className="uppercase bg-[#70b3b1] text-gray-900 font-bold text-xs py-1 px-2 rounded-lg">
                                    Backend
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default UpcomingCourse;
