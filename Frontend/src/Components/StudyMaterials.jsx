import React, { useState } from 'react';
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from '@headlessui/react';
import { XMarkIcon, ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid';

const sortOptions = [
    { name: 'Most Viewed', href: '#', current: true },
    { name: 'Highest Rated', href: '#', current: false },
    { name: 'Newest Material', href: '#', current: false },
    { name: 'Alphabetical', href: '#', current: false }
];

const categories = [
    { name: 'Mathematics', href: '#' },
    { name: 'Science', href: '#' },
    { name: 'History', href: '#' },
    { name: 'Computer Science', href: '#' },
    { name: 'Language Arts', href: '#' },
];

const filters = [
    {
        id: 'type',
        name: 'Resource Type',
        options: [
            { value: 'notes', label: 'Notes', checked: false },
            { value: 'videos', label: 'Videos', checked: false },
            { value: 'quizzes', label: 'Quizzes', checked: true },
            { value: 'assignments', label: 'Assignments', checked: false }
        ],
    },
    {
        id: 'level',
        name: 'Difficulty Level',
        options: [
            { value: 'beginner', label: 'Beginner', checked: false },
            { value: 'intermediate', label: 'Intermediate', checked: true },
            { value: 'advanced', label: 'Advanced', checked: false }
        ],
    }
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function StudyMaterials() {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

    return (
        <div className="bg-white">
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900">Study Materials</h1>
                    <div className="flex items-center">
                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                    Sort
                                    <ChevronDownIcon
                                        aria-hidden="true"
                                        className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                                    />
                                </MenuButton>
                            </div>
                            <MenuItems className="absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-white ring-1 shadow-2xl ring-black/5">
                                <div className="py-1">
                                    {sortOptions.map((option) => (
                                        <MenuItem key={option.name}>
                                            <a
                                                href={option.href}
                                                className={classNames(
                                                    option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                {option.name}
                                            </a>
                                        </MenuItem>
                                    ))}
                                </div>
                            </MenuItems>
                        </Menu>
                        <button
                            type="button"
                            onClick={() => setMobileFiltersOpen(true)}
                            className="ml-4 p-2 text-gray-400 hover:text-gray-500 lg:hidden"
                        >
                            <FunnelIcon aria-hidden="true" className="size-5" />
                        </button>
                    </div>
                </div>
                <section aria-labelledby="resources-heading" className="pt-6 pb-24">
                    <h2 id="resources-heading" className="sr-only">Study Resources</h2>
                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                        <form className="hidden lg:block">
                            <h3 className="sr-only">Categories</h3>
                            <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                                {categories.map((category) => (
                                    <li key={category.name}>
                                        <a href={category.href}>{category.name}</a>
                                    </li>
                                ))}
                            </ul>
                            {filters.map((section) => (
                                <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6">
                                    <h3 className="-my-3 flow-root">
                                        <DisclosureButton className="group flex w-full items-center justify-between py-3 text-sm text-gray-400 hover:text-gray-500">
                                            <span className="font-medium text-gray-900">{section.name}</span>
                                            <span className="ml-6 flex items-center">
                                                <PlusIcon className="size-5 group-data-open:hidden" />
                                                <MinusIcon className="size-5 group-not-data-open:hidden" />
                                            </span>
                                        </DisclosureButton>
                                    </h3>
                                    <DisclosurePanel className="pt-6">
                                        <div className="space-y-4">
                                            {section.options.map((option, optionIdx) => (
                                                <div key={option.value} className="flex gap-3">
                                                    <input
                                                        type="checkbox"
                                                        defaultChecked={option.checked}
                                                        id={`filter-${section.id}-${optionIdx}`}
                                                        name={`${section.id}[]`}
                                                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                                    />
                                                    <label htmlFor={`filter-${section.id}-${optionIdx}`} className="text-gray-500">
                                                        {option.label}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </DisclosurePanel>
                                </Disclosure>
                            ))}
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
}
