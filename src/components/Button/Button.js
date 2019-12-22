import React from "react";
import PropTypes from "prop-types";

const Button = props => {
  return <button onClick={props.onClick}>{props.label}</button>;
};

Button.propTypes = {
  label: PropTypes.string.isRequired
};

Button.defaultProps = {
  label: "Default Label"
};

export default Button;
