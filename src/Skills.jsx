import React, { useEffect, useState } from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa'; // Import star icons
import Bootstrap from './assets/images/bt.jpeg';
import C from './assets/images/C.png';
import Django from './assets/images/Django.png';
import DRF from './assets/images/drf.png';
import Java from './assets/images/java.png';
import ML from './assets/images/ML.jpeg';
import MongoDB from './assets/images/mongodb.png';
import Node from './assets/images/Nodejs.png';
import ReactLogo from './assets/images/Reactjs.png';
import SQL from './assets/images/sql.png';
import Tailwind from './assets/images/Tailwind.png';

const Skills = () => {
  const [isLoading, setIsLoading] = useState(true);

  const skills = [
    { name: "Django", image: Django, rating: 4 },
    { name: "Django REST framework", image: DRF, rating: 3.5 },
    { name: "ReactJs", image: ReactLogo, rating: 4 },
    { name: "NodeJs", image: Node, rating: 3 },
    { name: "SQL", image: SQL, rating: 4 },
    { name: "MongoDB", image: MongoDB, rating: 3.5 },
    { name: "Tailwind CSS", image: Tailwind, rating: 4 },
    { name: "Bootstrap", image: Bootstrap, rating: 4.5 },
    { name: "Java", image: Java, rating: 4.5 },
    { name: "C", image: C, rating: 4.5 },
    { name: "Machine Learning", image: ML, rating: 2.5 },
  ];

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // 2 seconds delay
    return () => clearTimeout(timer);
  }, []);

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating); // Number of full stars
    const halfStar = rating % 1 !== 0; // Check if there's a half star
    const emptyStars = 5 - Math.ceil(rating); // Calculate empty stars
    const stars = [];

    // Render full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-500" />);
    }

    // Render half star if applicable
    if (halfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-500" />);
    }

    // Render empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-500" />);
    }

    return stars;
  };

  // Shimmer effect for loading
  const renderShimmer = () => (
    <div className="w-24 h-24 bg-gray-200 rounded-full shimmer"></div>
  );

  return (
    <div className="container mx-auto text-xl  font-serif my-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center"
          >
            <div className="w-24 h-24 mb-4">
              {isLoading ? (
                renderShimmer() // Show shimmer while loading
              ) : (
                <img
                  src={skill.image}
                  alt={`${skill.name} logo`}
                  className="rounded object-cover w-full h-full"
                />
              )}
            </div>
            <h3 className="text-lg font-semibold mb-2">
              {isLoading ? <div className="w-20 h-6 bg-gray-200 shimmer"></div> : skill.name}
            </h3>
            <div className="flex justify-center mb-4">
              {isLoading ? (
                <div className="w-24 h-6 bg-gray-200 shimmer"></div>
              ) : (
                renderStars(skill.rating)
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
