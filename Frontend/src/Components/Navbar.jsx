import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie'

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLogged, setLogged] = useState(false);
    useEffect(() => {
        const cookieValue = Cookies.get("AccessToken");
        if (cookieValue) {
            setLogged(true);
        } else {
            setLogged(false);
        }
    }, []);


    return (
        <div>
            <header>
                <nav className="border-gray-200 py-2.5 bg-gray-100 ">
                    <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                        <Link to="/" className="flex items-center text-black">
                            <svg
                                width="60"
                                height="60"
                                viewBox="0 0 100 146"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M53.4596 115.033C49.1416 127.549 42.8884 136.29 22.9425 146C26.5217 142.412 35.2305 124.879 43.9392 97.8861C52.0341 96.8431 66.5904 91.9514 69.3893 82.241C58.7868 97.5732 29.1437 97.2082 18.0106 88.4991C24.5136 87.0597 30.7356 85.2866 36.8536 83.4405C23.0153 85.1823 7.65789 78.0482 0.905208 68.4004C7.73072 69.3808 15.8464 68.7654 24.139 68.0144C12.7666 63.7277 3.12142 53.9651 0 44.2965C18.0314 53.3498 30.1738 52.0982 55.0099 61.7355C56.5082 57.1985 57.9024 53.3915 59.2758 50.325C60.7656 46.9922 63.0228 44.0611 65.862 41.7724C57.0388 37.7881 49.4538 29.9239 47.2167 23.5719C54.6249 26.8366 58.4643 28.7244 63.7082 28.9539C65.1337 31.7178 67.3395 36.6825 72.3962 38.4452C64.1661 28.4741 62.4909 12.078 68.0574 3.30634C71.5222 11.7964 73.3951 16.8133 76.6934 20.9019C76.0379 25.9813 76.3605 32.4896 79.5547 36.3488C75.6425 21.851 87.9513 4.01557 100 0C94.267 14.8837 90.1259 26.3359 88.8566 37.7673C91.7907 39.4778 93.2473 42.4816 91.8947 46.6537C96.9826 47.6237 99.7087 51.4932 98.6162 56.7291C93.4138 54.7265 88.7421 58.2832 88.7421 58.2832C98.0231 101.829 64.1036 114.293 53.4596 115.033Z"
                                    fill="#25BFD5"
                                />
                            </svg>
                            <span className="self-center text-xl font-semibold whitespace-nowrap text-black ml-[-10px] lg:ml-[10px]">
                                CourseHub
                            </span>
                        </Link>
                        {

                            <div className="flex items-center lg:order-2">
                             
                                {
                                    isLogged ?
                                        (<form action="http://localhost:6500/logout" method="POST" className="inline">
                                            <button
                                                type="submit"
                                                className="text-white bg-red-400 focus:ring-4 focus:ring-green-400 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark: bg-green-700 focus:outline-none dark:focus:ring-purple-800"
                                            >
                                                Logout
                                            </button>
                                        </form>) : (
                                            <Link
                                                to="/login"
                                                className="text-white bg-green-400 focus:ring-4 focus:ring-green-400 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark: bg-green-800 focus:outline-none dark:focus:ring-purple-800"
                                            >
                                                Signup
                                            </Link>

                                        )
                                }
                                <button
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    type="button"
                                    className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600"
                                    aria-controls="mobile-menu-2"
                                    aria-expanded={isMenuOpen}
                                >
                                    <span className="sr-only">Open main menu</span>
                                    <svg
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        }

                        <div
                            className={`${isMenuOpen ? "block" : "hidden"
                                } items-center justify-between w-full lg:flex lg:w-auto lg:order-1`}
                            id="mobile-menu-2"
                        >
                            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                <li>
                                    <Link
                                        to="/"
                                        className=" block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0  lg:hover:text-purple-700 lg:p-0"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/Courses"
                                        className="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0  lg:hover:text-purple-700 lg:p-0"
                                    >
                                        Courses
                                    </Link>
                                </li><li>
                                    <Link
                                        to="/Resources"
                                        className="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0  lg:hover:text-purple-700 lg:p-0"
                                    >
                                        Resources
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/study"
                                        className="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0  lg:hover:text-purple-700 lg:p-0"
                                    >
                                        Study Materials
                                    </Link>
                                </li>
                                <li>
                                    {
                                        isLogged ? (<Link
                                            to="/profile"
                                            className="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0  lg:hover:text-purple-700 lg:p-0"
                                        >
                                            Profile
                                        </Link>) : ("")
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default NavBar;

