import React from 'react';
import profilePic from './assets/profile.png';

const About = () => {
    return (
        <div className="about-container  p-8 text-xl font-serif flex flex-col items-center min-h-screen animate-fadeIn">

            {/* Image Section */}
            <div className="image-container mb-6 transform hover:scale-105 transition duration-500 ease-in-out">
                <img
                    src={profilePic}
                    alt="Daiyan Alam"
                    className="w-60 h-60 rounded-full object-cover shadow-lg"
                />
            </div>

            {/* About Text Section */}
            <div className="about-content max-w-2xl text-gray-700 text-left animate-fadeIn delay-500">
                <p className="text-lg mb-4">
                    Hi, I'm <span className="font-bold">Daiyan Alam</span>, a passionate and dedicated Full Stack Developer with expertise in both backend and frontend technologies.
                    I enjoy creating scalable and efficient web applications, specializing in the Django Framework, Django Rest Framework, and ReactJS.
                </p>
                <p className="text-lg mb-4">
                    I hold a strong background in computer science, having mastered key concepts such as Data Structures, SQL, C, and Java. With a solid technical foundation and hands-on experience, I constantly strive to improve my skill set and stay up-to-date with the latest industry trends.
                </p>
                 
                <p className="text-lg mb-4">
                    I also work as a freelancer, having successfully completed various client projects, enhancing my ability to deliver effective solutions.
                </p>
                <p className="text-lg mb-6">
                    I'm always looking for opportunities to grow and make a meaningful impact. Whether through collaborative projects or by exploring innovative ideas, I'm excited to continue my journey in tech.
                </p>
            </div>

            {/* Social Links Section */}
            <div className="social-links flex justify-center space-x-6 mb-6 animate-fadeIn delay-1000">
                <a href="https://www.linkedin.com/in/daiyan-alam-27a076224/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:scale-110 transform transition duration-300">
                    <i className="fab fa-linkedin text-3xl"></i>
                </a>
                <a href="https://github.com/daiyan52" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:scale-110 transform transition duration-300">
                    <i className="fab fa-github text-3xl"></i>
                </a>
                <a href="https://www.hackerrank.com/profile/rehanalamkkr" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:scale-110 transform transition duration-300">
                    <i className="fab fa-hackerrank text-3xl"></i>
                </a>
                <a href="https://www.instagram.com/a_mighty_ruler_/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:scale-110 transform transition duration-300">
                    <i className="fab fa-instagram text-3xl"></i>
                </a>
            </div>
        </div>
    );
};

export default About;
