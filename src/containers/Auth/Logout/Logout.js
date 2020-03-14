import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import { Redirect } from "react-router-dom";

class Logout extends Component {
  componentDidMount() {
    this.props.onLogout(this.props.history);
  }
  render() {
    return <Redirect to="/" />;
  }
}
const mapDispatchToProps = dispathch => {
  return {
    onLogout: () => dispathch(actions.logout())
  };
};
export default connect(null, mapDispatchToProps)(Logout);
