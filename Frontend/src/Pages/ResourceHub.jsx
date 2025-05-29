import React from "react";
import { useState } from 'react';


const ResourceHub = () => {
    
    const resources = [
        { id: 1, title: 'Data Structures Notes', course: 'MCA', semester: 1, type: 'notes', url: '#', date: '2023-05-15' },
        { id: 2, title: 'DBMS Video Lectures', course: 'BCA', semester: 3, type: 'videos', url: '#', date: '2023-04-22' },
        { id: 3, title: 'Operating System PDF', course: 'MCA', semester: 2, type: 'pdf', url: '#', date: '2023-06-10' },
        { id: 4, title: 'Computer Networks Slides', course: 'BCA', semester: 4, type: 'slides', url: '#', date: '2023-03-05' },
        { id: 5, title: 'Algorithm Book', course: 'MCA', semester: 3, type: 'book', url: '#', date: '2023-07-18' },
        { id: 6, title: 'Web Development Tutorials', course: 'BCA', semester: 5, type: 'videos', url: '#', date: '2023-08-30' },
        { id: 7, title: 'Software Engineering Notes', course: 'MCA', semester: 4, type: 'notes', url: '#', date: '2023-02-14' },
        { id: 8, title: 'Python Programming Exercises', course: 'BCA', semester: 2, type: 'exercises', url: '#', date: '2023-09-01' },
    ];

    
    const [filters, setFilters] = useState({
        course: 'all',
        semester: 'all',
        type: 'all',
        search: ''
    });

    const filteredResources = resources.filter(resource => {
        return (
            (filters.course === 'all' || resource.course === filters.course) &&
            (filters.semester === 'all' || resource.semester.toString() === filters.semester) &&
            (filters.type === 'all' || resource.type === filters.type) &&
            (resource.title.toLowerCase().includes(filters.search.toLowerCase()))
    )});

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value
        });
    }; 

    
    const getTypeIcon = (type) => {
        switch (type) {
            case 'notes':
                return (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                );
            case 'videos':
                return (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                    </svg>
                );
            case 'pdf':
                return (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                    </svg>
                );
            case 'slides':
                return (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                );
            case 'book':
                return (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                );
            case 'exercises':
                return (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                    </svg>
                );
            default:
                return (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                );
        }
    };

    
    const getTypeColor = (type) => {
        switch (type) {
            case 'notes': return 'bg-purple-100 text-purple-800';
            case 'videos': return 'bg-blue-100 text-blue-800';
            case 'pdf': return 'bg-red-100 text-red-800';
            case 'slides': return 'bg-amber-100 text-amber-800';
            case 'book': return 'bg-emerald-100 text-emerald-800';
            case 'exercises': return 'bg-indigo-100 text-indigo-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                        Study Resource Hub
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
                        Find all your academic resources in one place
                    </p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 mb-8">
                    {/* Total Resources */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="p-5">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 bg-indigo-500 rounded-lg p-3">
                                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <div className="ml-5 w-0 flex-1">
                                    <dl>
                                        <dt className="text-sm font-medium text-gray-500 truncate">Total Resources</dt>
                                        <dd className="flex items-baseline">
                                            <div className="text-2xl font-semibold text-gray-900">{resources.length}</div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* MCA Resources */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="p-5">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 bg-green-500 rounded-lg p-3">
                                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                                    </svg>
                                </div>
                                <div className="ml-5 w-0 flex-1">
                                    <dl>
                                        <dt className="text-sm font-medium text-gray-500 truncate">MCA Resources</dt>
                                        <dd className="flex items-baseline">
                                            <div className="text-2xl font-semibold text-gray-900">
                                                {resources.filter(r => r.course === 'MCA').length}
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* BCA Resources */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="p-5">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 bg-blue-500 rounded-lg p-3">
                                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <div className="ml-5 w-0 flex-1">
                                    <dl>
                                        <dt className="text-sm font-medium text-gray-500 truncate">BCA Resources</dt>
                                        <dd className="flex items-baseline">
                                            <div className="text-2xl font-semibold text-gray-900">
                                                {resources.filter(r => r.course === 'BCA').length}
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filters */}
                <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Filter Resources</h2>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
                        {/* Course Filter */}
                        <div>
                            <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">
                                Course
                            </label>
                            <select
                                id="course"
                                name="course"
                                value={filters.course}
                                onChange={handleFilterChange}
                                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2 px-3 border bg-white text-sm"
                            >
                                <option value="all">All Courses</option>
                                <option value="MCA">MCA</option>
                                <option value="BCA">BCA</option>
                            </select>
                        </div>

                        {/* Semester Filter */}
                        <div>
                            <label htmlFor="semester" className="block text-sm font-medium text-gray-700 mb-1">
                                Semester
                            </label>
                            <select
                                id="semester"
                                name="semester"
                                value={filters.semester}
                                onChange={handleFilterChange}
                                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2 px-3 border bg-white text-sm"
                            >
                                <option value="all">All Semesters</option>
                                <option value="1">Semester 1</option>
                                <option value="2">Semester 2</option>
                                <option value="3">Semester 3</option>
                                <option value="4">Semester 4</option>
                                <option value="5">Semester 5</option>
                                <option value="6">Semester 6</option>
                            </select>
                        </div>

                        {/* Resource Type Filter */}
                        <div>
                            <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                                Resource Type
                            </label>
                            <select
                                id="type"
                                name="type"
                                value={filters.type}
                                onChange={handleFilterChange}
                                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2 px-3 border bg-white text-sm"
                            >
                                <option value="all">All Types</option>
                                <option value="notes">Notes</option>
                                <option value="videos">Videos</option>
                                <option value="pdf">PDFs</option>
                                <option value="slides">Slides</option>
                                <option value="book">Books</option>
                                <option value="exercises">Exercises</option>
                            </select>
                        </div>

                        {/* Search */}
                        <div className="lg:col-span-2">
                            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                                Search Resources
                            </label>
                            <div className="relative rounded-md shadow-sm">
                                <input
                                    type="text"
                                    name="search"
                                    id="search"
                                    value={filters.search}
                                    onChange={handleFilterChange}
                                    placeholder="Search by resource name..."
                                    className="block w-full rounded-lg border-gray-300 pl-4 pr-10 py-2 focus:border-indigo-500 focus:ring-indigo-500 border text-sm"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Resources Grid */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    {filteredResources.length > 0 ? (
                        <ul className="divide-y divide-gray-200">
                            {filteredResources.map((resource) => (
                                <li key={resource.id} className="hover:bg-gray-50 transition-colors duration-150">
                                    <a href={resource.url} className="block">
                                        <div className="px-6 py-5">
                                            <div className="flex items-start">
                                                <div className={`flex-shrink-0 p-3 rounded-lg ${getTypeColor(resource.type)}`}>
                                                    {getTypeIcon(resource.type)}
                                                </div>
                                                <div className="ml-4 flex-1">
                                                    <div className="flex items-center justify-between">
                                                        <h3 className="text-lg font-medium text-gray-900 hover:text-indigo-600 transition-colors duration-150">
                                                            {resource.title}
                                                        </h3>
                                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTypeColor(resource.type)}`}>
                                                            {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                                                        </span>
                                                    </div>
                                                    <div className="mt-2 flex flex-col sm:flex-row sm:flex-wrap sm:space-x-6">
                                                        <div className="flex items-center text-sm text-gray-500">
                                                            <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                                            </svg>
                                                            {resource.course}
                                                        </div>
                                                        <div className="flex items-center text-sm text-gray-500 mt-2 sm:mt-0">
                                                            <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                                            </svg>
                                                            Semester {resource.semester}
                                                        </div>
                                                        <div className="flex items-center text-sm text-gray-500 mt-2 sm:mt-0">
                                                            <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                                            </svg>
                                                            {resource.date}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="text-center py-16">
                            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100">
                                <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="mt-3 text-lg font-medium text-gray-900">No resources found</h3>
                            <p className="mt-2 text-sm text-gray-500">
                                Try adjusting your search or filter criteria
                            </p>
                            <div className="mt-6">
                                <button
                                    onClick={() => setFilters({
                                        course: 'all',
                                        semester: 'all',
                                        type: 'all',
                                        search: ''
                                    })}
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Reset all filters
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            
            </div>
            
        </div>
    );
};

export default ResourceHub;