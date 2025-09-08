import React from "react";
import axios from "axios";

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
      .catch((err) => console.error("Error fetching courses:", err)); 
  }

  renderSwitch = (param) => { 
    switch (param + 1) {
      case 1:
        return "primary"; 
      case 2:
        return "secondary"; 
      case 3:
        return "success"; 
      case 4:
        return "danger"; 
      case 5:
        return "warning";
      case 6:
        return "info"; 
      default:
        return "dark";
    }
  };

  handleInput = (e) => { 
    this.setState({ [e.target.name]: e.target.value }); 
  };

  handleSubmit = (e) => { 
    e.preventDefault(); 
    
    axios
      .post("http://127.0.0.1:8000/api/courses/", {
        name: this.state.name,
        description: this.state.description,
      })
      .then((res) => {
        this.setState((prevState) => ({ 
          courses: [...prevState.courses, res.data], 
          name: "",
          description: "",
        }));
      })
      .catch((err) => console.error("Error posting course:", err));
  };

  render() { 
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
              name="name" onChange={this.handleInput} 
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
        {this.state.courses.map((course, id) => ( 
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
