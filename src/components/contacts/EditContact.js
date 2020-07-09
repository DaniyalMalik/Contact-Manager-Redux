import React, { Component } from "react";
import TextInputGroup from "../layout/TextInputGroup";
import "./editcontact.css";
import { updateContact } from "../../actions/actionCreator";
import { getContact } from "../../actions/actionCreator";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
  };

  UNSAFE_componentWillReceiveProps(nextProps, nextState) {
    if (nextState.contact !== this.props.contact) {
      const { name, phone, email } = nextProps.contact;
      this.setState({
        name,
        email,
        phone,
      });
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.getContact(id);
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    const { id } = this.props.match.params;

    const updatedContact = {
      id,
      name,
      email,
      phone,
    };

    this.props.updateContact(updatedContact);

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
      <form className="editcontact-parent" onSubmit={this.onSubmit}>
        <div className="editcontact-child1">
          <h3>Edit Contact </h3>
        </div>
        <ul className="editcontact-child2">
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
            <input type="submit" value="Update Contact" />
          </li>
        </ul>
      </form>
    );
  }
}

EditContact.propTypes = {
  updateContact: PropTypes.func.isRequired,
  getContact: PropTypes.func.isRequired,
  contact: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  contact: state.contact.contact,
});

export default connect(mapStateToProps, { updateContact, getContact })(
  EditContact
);
