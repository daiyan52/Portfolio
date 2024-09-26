import axios from "axios";
import React from "react";
import { CLIENT_ID, CLIENT_SECRET } from './GithubCredential';

class GithubSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      githubUserName: "",
      githubProfile: {},
      githubRepos: [],
      errorMessage: '',
    };
  }

  GithubUSerSearch = (event) => {
    this.setState({ githubUserName: event.target.value });
  };

  submitUser = (event) => {
    event.preventDefault();
    this.searchGithubUser(this.state.githubUserName);
  };

  searchGithubUser = (githubUserName) => {
    const dataUrl = `https://api.github.com/users/${githubUserName}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    axios.get(dataUrl)
      .then((response) => {
        this.setState({
          githubProfile: response.data,
        });
        return this.searchRepos(response.data.repos_url); // Call searchRepos with repos_url
      })
      .catch((error) => {
        this.setState({ 
          errorMessage: error.message 
        });
      });
  };

  searchRepos = (reposUrl) => {
    axios.get(reposUrl) // Use repos_url directly
      .then((response) => {
        this.setState({ 
          githubRepos: response.data,
        });
      })
      .catch((error) => {
        this.setState({ 
          errorMessage: error.message 
        });
      });
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="card shadow-lg">
              <div className="card-header">
                <h2>Github User Search</h2>
              </div>
              <div className="card-body">
                <form onSubmit={this.submitUser} className="d-flex">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control w-100"
                      placeholder="Enter Github username"
                      onChange={this.GithubUSerSearch}
                      value={this.state.githubUserName}
                    />
                  </div>
                  <div className="form-group ms-2">
                    <input
                      type="submit"
                      className="btn btn-primary"
                      value="Search"
                    />
                  </div>
                </form>
                {this.state.errorMessage && (
                  <div className="alert alert-danger mt-3">{this.state.errorMessage}</div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Profile Card */}
        {this.state.githubProfile.id && (
          <div className="row mt-4">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h3>{this.state.githubProfile.login}</h3>
                </div>
                <div className="card-body">
                  <img src={this.state.githubProfile.avatar_url} alt="Avatar" className="img-fluid rounded-circle mb-3" style={{ width: "150px" }} />
                  <p><strong>Name:</strong> {this.state.githubProfile.name || "N/A"}</p>
                  <p><strong>Bio:</strong> {this.state.githubProfile.bio || "N/A"}</p>
                  <p><strong>Followers:</strong> {this.state.githubProfile.followers}</p>
                  <p><strong>Following:</strong> {this.state.githubProfile.following}</p>
                  <p><strong>Public Repos:</strong> {this.state.githubProfile.public_repos}</p>
                  <p><strong>GitHub URL:</strong> <a href={this.state.githubProfile.html_url} target="_blank" rel="noopener noreferrer">{this.state.githubProfile.html_url}</a></p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Repositories Section */}
        {this.state.githubRepos.length > 0 && (
          <div className="row mt-4">
            <h3>Repositories:</h3>
            {this.state.githubRepos.map((repo) => (
              <div className="col-md-4 mb-3" key={repo.id}>
                <div className="card">
                  <div className="card-header">
                    <h5>{repo.name}</h5>
                  </div>
                  <div className="card-body">
                    <p><strong>Description:</strong> {repo.description || "No description available."}</p>
                    <p><strong>Stars:</strong> {repo.stargazers_count}</p>
                    <p><strong>Forks:</strong> {repo.forks_count}</p>
                    <p><strong>Language:</strong> {repo.language || "N/A"}</p>
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Repo</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default GithubSearch;
