import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { deleteContact } from "../../actions/actionCreator";
import { connect } from "react-redux";
import "./contact.css";

class Contact extends Component {
  state = {
    showContactInfo: false,
  };

  onDeleteClick = (id) => {
    this.props.deleteContact(id);
  };

  render() {
    const { id, name, email, phone } = this.props.contacts;
    const { showContactInfo } = this.state;

    return (
      <div className="contact-parent">
        <h3>
          {name}{" "}
          <i
            className="fas fa-sort-down"
            style={{ cursor: "pointer" }}
            onClick={() => {
              this.setState({
                showContactInfo: !this.state.showContactInfo,
              });
            }}
          ></i>
          <i
            className="fas fa-times"
            style={{ cursor: "pointer", color: "red", float: "right" }}
            onClick={this.onDeleteClick.bind(this, id)}
          ></i>{" "}
          <Link to={`/edit/${id}`}>
            <i
              className="fas fa-pencil-alt"
              style={{
                cursor: "pointer",
                float: "right",
                color: "black",
                paddingRight: "5px",
              }}
            />
          </Link>
        </h3>
        {showContactInfo ? (
          <ul>
            <li>Email: {email}</li>
            <li>Contact: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contacts: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default connect(null, { deleteContact })(Contact);
