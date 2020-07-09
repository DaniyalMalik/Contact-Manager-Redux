import React, { Component } from "react";
import TextInputGroup from "../layout/TextInputGroup";
import { connect } from "react-redux";
import { addContact } from "../../actions/actionCreator";
import PropTypes from "prop-types";
import "./addcontact.css";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    const newContact = {
      name,
      email,
      phone,
    };

    this.props.addContact(newContact);

    this.setState({
      name: "",
      email: "",
      phone: "",
    });

    this.props.history.push("/");
  };

  render() {
    const { name, email, phone } = this.state;
    return (
      <form className="addcontact-parent" onSubmit={this.onSubmit}>
        <div className="addcontact-child1">
          <h3>Add Contact </h3>
        </div>
        <ul className="addcontact-child2">
          <TextInputGroup
            label="Name"
            name="name"
            placeholder="Enter name..."
            value={name}
            onChange={this.onChange}
          />
          <TextInputGroup
            label="Email"
            name="email"
            type="email"
            placeholder="Enter email..."
            value={email}
            onChange={this.onChange}
          />
          <TextInputGroup
            label="Phone"
            name="phone"
            placeholder="Enter phone..."
            value={phone}
            onChange={this.onChange}
          />
          <li>
            <input type="submit" value="Add Contact" />
          </li>
        </ul>
      </form>
    );
  }
}

AddContact.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default connect(null, { addContact })(AddContact);
