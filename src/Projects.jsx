import axios from "axios";
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome
import React from "react";
import { CLIENT_ID, CLIENT_SECRET } from './GithubCredential'; // Import client credentials
import './Project.css'; // Import your CSS file

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [], // Will hold fetched projects but filter later
      loading: true, // Loading state
    };
  }

  componentDidMount = () => {
    // GitHub API request with CLIENT_ID and CLIENT_SECRET
    const dataUrl = `https://api.github.com/users/daiyan52/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    
    axios
      .get(dataUrl)
      .then((response) => {
        // Filter only the specific projects
        const filteredProjects = response.data.filter(project =>
          project.name === "Crime_Detection_final_year" ||
          project.name === "FootFusion-E-commerce-Site" ||
          project.name === "Doctor-s-Appointment" ||
          project.description === "TechTestArena: A fun place for engineering quizzes. Learn and test your skills. Join now and challenge yourself!"
        );
        this.setState({ projects: filteredProjects, loading: false }); // Update loading state
      })
      .catch((error) => {
        console.log(error);
        this.setState({ loading: false }); // Stop loading on error
      });
  };

  renderTags = (projectName) => {
    const tags = {
      "Crime_Detection_final_year": "Crime Detection",
      "FootFusion-E-commerce-Site": "E-commerce",
      "Doctor-s-Appointment": "Healthcare",
      "TechTestArena": "Quizzes",
    };

    return tags[projectName] ? (
      <span className={`inline-block bg-${tags[projectName] === 'Machine Learning' ? 'purple-200' : tags[projectName] === 'E-commerce' ? 'blue-200' : tags[projectName] === 'Healthcare' ? 'green-200' : 'yellow-200'} text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded`}>
        {tags[projectName]}
      </span>
    ) : null;
  };

  render() {
    const { projects, loading } = this.state;

    return (
      <div className="flex flex-wrap justify-center">
        {loading ? (
          // Shimmer Effect for Loading State
          <div className="shimmer w-full p-4 sm:max-w-sm md:max-w-md lg:max-w-lg">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="project-card h-48 mb-4"></div>
            ))}
          </div>
        ) : (
          projects.map((project, index) => (
            <div key={project.id} className="max-w-full sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg w-full p-4">
              <div className={`bg-${index % 2 === 0 ? 'blue-100' : 'green-100'} border rounded-lg shadow-md overflow-hidden h-full`}>
                <div className="p-4 sm:p-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="font-semibold text-red-800 text-lg sm:text-xl mb-2">{project.name}</h3>
                    <p className="text-gray-700 mb-4 text-sm sm:text-base">{project.description || "No description available."}</p>
                    {this.renderTags(project.name)}
                  </div>
                  <div>
                    <p className="text-gray-700 mb-4 text-sm sm:text-base">Created At: {new Date(project.created_at).toLocaleDateString()}</p>
                    <p className="text-gray-700 mb-4 text-sm sm:text-base">Updated At: {new Date(project.updated_at).toLocaleDateString()}</p>
                    <p className="text-gray-500 text-sm sm:text-base">Visibility: {project.visibility}</p>
                  </div>
                  <div className="mt-2">
                    <a
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 text-lg sm:text-xl hover:underline"
                    >
                      <i className="fa fa-github mr-1"></i> View on GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default Projects;
