import React from "react";
import "./styles.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: []
    };
  }
  componentDidMount() {
    //Make the Call rest API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((response) => {
        // set the state
        console.log(response);
        this.setState({ contacts: response });
      });
  }
  render() {
    return (
      <div>
        <div className="container">
          <h1 className="text-center text-success mt-4">Hello Contacts </h1>
          <div className="row mb-3">
            {this.state.contacts.map((contact) => (
              <div className=" col-lg-4 col-md-6 col-sm-12">
                <div className="card mb-4">
                  <div className="card-body">
                    <h5 className="card-title text-info">
                      Full Name: {contact.name}
                    </h5>
                    <p className="card-text text-warning">
                      Email: {contact.email}
                    </p>
                    <p className="card-text text-dark">
                      Phone: {contact.phone}
                    </p>
                    <p className="card-text text-danger">
                      Company Name: {contact.company.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
