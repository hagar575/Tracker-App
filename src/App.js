import React from "react";
import axios from "axios";

// What is axios?
// Axios ia promise-based HTTP client for JavaScript, which is used to make JTTP requests to fetch or send data to a server.

// Why axios?
// 1. It works in both browser and Node.js environments.
// 2. It supports older browsers that do not support the Fetch API.
// 3. It provides a simple and clean API for making HTTP requests.
// 4. It automatically transforms JSON data, making it easier to work with APIs that return JSON responses.
// 5. It has built-in support for request and response interceptors, allowing you to modify requests or responses before they are handled by your application.
// 6. It supports cancellation of requests, which can be useful in scenarios where you want to abort a request that is no longer needed.
// 7. It has better error handling compared to the Fetch API, providing more detailed information about errors that occur during HTTP requests.

// What is a component?
// Components are the building blocks of a React application. They are reusable, self-contained pieces of code that define how a certain part of the user interface (UI) should look and behave.


class App extends React.Component {
  state = { // Initial state
    courses: [],
    name: "",
    description: "",
  };

  componentDidMount() { // Lifecycle method that runs after the component is mounted
    axios
      .get("http://127.0.0.1:8000/api/courses/")
      .then((res) => { // Handle the response
        this.setState({ courses: res.data }); // Update the state with the fetched data
      })
      .catch((err) => console.error("Error fetching courses:", err)); // Handle errors
  }

  renderSwitch = (param) => { // Function to return different Bootstrap classes based on the parameter
    switch (param + 1) { // param + 1 to avoid case 0
      case 1:
        return "primary"; // Bootstrap class for primary color
      case 2:
        return "secondary"; // Bootstrap class for secondary color
      case 3:
        return "success"; // Bootstrap class for success color
      case 4:
        return "danger"; // Bootstrap class for danger color
      case 5:
        return "warning"; // Bootstrap class for warning color
      case 6:
        return "info"; // Bootstrap class for info color
      default:
        return "dark"; // Default Bootstrap class
    }
  };

  // What is target in e.target.name?
  // In the context of an event handler in JavaScript, e.target refers to the element that triggered the event. The target property is a reference to the DOM element that dispatched the event.

  handleInput = (e) => { // Function to handle input changes
    this.setState({ [e.target.name]: e.target.value }); // Update the state with the input value
  };

  handleSubmit = (e) => { // Function to handle form submission
    e.preventDefault(); // Prevent the default form submission behavior
    // Post the new course to the backend

    axios
      .post("http://127.0.0.1:8000/api/courses/", {
        name: this.state.name,
        description: this.state.description,
      })
      .then((res) => {
        this.setState((prevState) => ({ // Update the state with the new course
          courses: [...prevState.courses, res.data], // Append the new course to the existing list
          name: "",
          description: "",
        }));
      })
      .catch((err) => console.error("Error posting course:", err));
  };

  render() { // Render method to display the component
    return ( 
      <div className="container jumbotron">
        {/* Form */}
        <form onSubmit={this.handleSubmit}> 
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Course</span> 
            </div>
            <br/>
            <input type="text" className="form-control"
              placeholder="Course Name" value={this.state.name}
              name="name" onChange={this.handleInput} // Call handleInput on change
              required/>
          </div>

        <br/>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Description</span>
            </div>
            <br/>
            <textarea className="form-control" placeholder="Course Description"
              value={this.state.description} name="description"
              onChange={this.handleInput} required/>
          </div>

          <br/>

          <button type="submit" className="btn btn-primary mb-5"> Submit </button>
        </form>

        <hr />

        {/* Courses List */}
        {this.state.courses.map((course, id) => ( // Map over the courses array in the state
          <div key={course.id}>
            <div className="card shadow-lg mb-3">
              <div
                className={`bg-${this.renderSwitch(id % 6)} card-header text-white`}
              >
                Course {id + 1}
              </div>
              <div className="card-body">
                <h3>{course.name}</h3>
                <p>{course.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
