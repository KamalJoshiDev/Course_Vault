import React from 'react'

const Course = () => {
    return (
        <>

            <div class="flex flex-col h-screen justify-center items-center ">
                <div class="flex flex-col items-center">
                    <h1 class="text-[120px] font-extrabold text-gray-700 mt-[-30px]">200</h1>
                    <p class="text-3xl font-medium text-gray-600 mb-6">Coming Soon..........</p>
                    <a href="/home"
                        class="px-4 py-2 font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-600 transition-all duration-200 ease-in-out">
                        Go Home
                    </a>

                </div>
            </div>
        </>
    )
}

export default Course