import React from "react";

const Step = () => {
    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20 bg-gray-100">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">
                        Your Ultimate Study Resource Hub
                    </h2>
                    <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">
                        Everything you need to excel in your academic journey
                    </p>
                </div>

                <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
                    {/* Login */}
                    <div className="md:p-8 lg:p-14">
                        <svg
                            className="mx-auto"
                            width="46"
                            height="46"
                            viewBox="0 0 46 46"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M23 1C10.85 1 1 10.85 1 23C1 35.15 10.85 45 23 45C35.15 45 45 35.15 45 23C45 10.85 35.15 1 23 1Z"
                                stroke="#161616"
                                strokeWidth="2"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M23 11V23"
                                stroke="#161616"
                                strokeWidth="2"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M23 31H23.02"
                                stroke="#161616"
                                strokeWidth="2"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
                            Secure Login
                        </h3>
                        <p className="mt-5 text-base text-gray-600 font-pj">
                            Access your personalized dashboard with secure login to track your progress and saved resources.
                        </p>
                    </div>

                    {/* Study Resources */}
                    <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
                        <svg
                            className="mx-auto"
                            width="46"
                            height="46"
                            viewBox="0 0 46 46"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M41 1H5C2.79086 1 1 2.79086 1 5V41C1 43.2091 2.79086 45 5 45H41C43.2091 45 45 43.2091 45 41V5C45 2.79086 43.2091 1 41 1Z"
                                stroke="#161616"
                                strokeWidth="2"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M13 13H33"
                                stroke="#161616"
                                strokeWidth="2"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M13 23H33"
                                stroke="#161616"
                                strokeWidth="2"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M13 33H25"
                                stroke="#161616"
                                strokeWidth="2"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
                            Comprehensive Study Resources
                        </h3>
                        <p className="mt-5 text-base text-gray-600 font-pj">
                            Access thousands of study materials, textbooks, and research papers across all subjects and disciplines.
                        </p>
                    </div>

                    {/* Notes */}
                    <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
                        <svg
                            className="mx-auto"
                            width="42"
                            height="42"
                            viewBox="0 0 42 42"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M41 1H1V41H41V1Z"
                                stroke="#161616"
                                strokeWidth="2"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M18 7H7V20H18V7Z"
                                stroke="#161616"
                                strokeWidth="2"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M18 26H7V35H18V26Z"
                                stroke="#161616"
                                strokeWidth="2"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M35 7H24V35H35V7Z"
                                fill="#D4D4D8"
                                stroke="#161616"
                                strokeWidth="2"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
                            Curated Notes
                        </h3>
                        <p className="mt-5 text-base text-gray-600 font-pj">
                            High-quality notes prepared by top students and professors to help you grasp complex concepts easily.
                        </p>
                    </div>

                    {/* Video Lectures */}
                    <div className="md:p-8 lg:p-14 md:border-t md:border-gray-200">
                        <svg
                            className="mx-auto"
                            width="42"
                            height="42"
                            viewBox="0 0 42 42"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M41 1H1V41H41V1Z"
                                stroke="#161616"
                                strokeWidth="2"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M16 11L31 21L16 31V11Z"
                                fill="#D4D4D8"
                                stroke="#161616"
                                strokeWidth="2"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
                            Video Lectures
                        </h3>
                        <p className="mt-5 text-base text-gray-600 font-pj">
                            Engaging video content covering course material, tutorials, and expert explanations for visual learners.
                        </p>
                    </div>

                    {/* Course Purchases */}
                    <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
                        <svg
                            className="mx-auto"
                            width="46"
                            height="42"
                            viewBox="0 0 46 42"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M45 11H1V41H45V11Z"
                                stroke="#161616"
                                strokeWidth="2"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M33 11V1H13V11"
                                stroke="#161616"
                                strokeWidth="2"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M15 21H31"
                                stroke="#161616"
                                strokeWidth="2"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M15 31H31"
                                stroke="#161616"
                                strokeWidth="2"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
                            Premium Courses
                        </h3>
                        <p className="mt-5 text-base text-gray-600 font-pj">
                            Enroll in specialized courses to deepen your knowledge and gain certifications in your field of study.
                        </p>
                    </div>

                    {/* Community */}
                    <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
                        <svg
                            className="mx-auto"
                            width="46"
                            height="46"
                            viewBox="0 0 46 46"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M23 45C35.15 45 45 35.15 45 23C45 10.85 35.15 1 23 1C10.85 1 1 10.85 1 23C1 35.15 10.85 45 23 45Z"
                                stroke="#161616"
                                strokeWidth="2"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M15 33C15 33 18 27 23 27C28 27 31 33 31 33"
                                stroke="#161616"
                                strokeWidth="2"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M18 18H18.02"
                                stroke="#161616"
                                strokeWidth="2"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M28 18H28.02"
                                stroke="#161616"
                                strokeWidth="2"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
                            Study Community
                        </h3>
                        <p className="mt-5 text-base text-gray-600 font-pj">
                            Connect with peers, join study groups, and collaborate on projects through our interactive platform.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Step;