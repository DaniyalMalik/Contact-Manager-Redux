import React, { Component } from "react";
import Contact from "../contacts/Contact";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getContacts } from "../../actions/actionCreator";
import "./contacts.css";

class Contacts extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    const { contacts } = this.props;

    return (
      <div className="contacts-parent">
        <h1>
          <span className="contacts-span">Contact</span> List
        </h1>
        {contacts.map((contact) => (
          <Contact contacts={contact} />
        ))}
      </div>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.object.isRequired,
  getContacts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  contacts: state.contact.contacts,
});

export default connect(mapStateToProps, { getContacts })(Contacts);
