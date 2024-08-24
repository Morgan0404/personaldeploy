import React from "react";

const Introduction = () => {
    return (
        <div className="bg-gray-100 text-gray-800 min-h-screen flex flex-col items-center justify-center p-6">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-3xl w-full">
                <h1 className="text-3xl font-bold text-center text-teal-500 mb-6">
                    Work In Progress!
                </h1>
                <p className="text-lg text-center mb-6">
                    Have a peek at what I'm working on:{" "}
                    <a
                        href="https://gradgig.co.uk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-600 hover:underline"
                    >
                        gradgig.co.uk
                    </a>
                    .
                </p>

                <div className="mt-12">
                    <h2 className="text-2xl font-semibold text-teal-500 mb-4">Introduction</h2>
                    <p className="text-gray-700 mb-6">
                        I'm a passionate developer working on exciting projects. With a focus on modern web development technologies, I aim to create impactful solutions that meet users' needs.
                    </p>

                    <h2 className="text-2xl font-semibold text-teal-500 mb-4">Work Experience</h2>
                    <ul className="list-disc list-inside mb-6 text-gray-700">
                        <li>Software Developer at XYZ Corp - Developed a range of web applications.</li>
                        <li>Frontend Developer at ABC Ltd - Specialized in creating responsive user interfaces.</li>
                        <li>Intern at DEF Inc - Gained hands-on experience with full-stack development.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-teal-500 mb-4">Projects</h2>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>
                            <strong>GradGig:</strong> A platform connecting graduates with job opportunities.
                            <a
                                href="https://gradgig.co.uk"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-teal-600 hover:underline"
                            >
                                (Visit Site)
                            </a>
                        </li>
                        <li>
                            <strong>Portfolio Website:</strong> My personal website showcasing my work and skills.
                        </li>
                        <li>
                            <strong>Todo App:</strong> A simple and intuitive task management application.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Introduction;
