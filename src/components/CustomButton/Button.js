import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";

const generateClassname = (props) => {
  let className = "makey-button-custom";
  if (props.type) className += ` type-${props.type}`;
  if (props.color) className += ` color-${props.color}`;
  if (props.size) className += ` size-${props.size}`;
  return className;
};

const Button = (props) => {
  const className = generateClassname(props);
  return (
      <button {...props} className={className}>
        {props.icon && <div className="icon-container">{props.icon()}</div>}
        <div className="text-container">{props.children}</div>
      </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
  color: PropTypes.oneOf(["primary", "secondary"]),
  type: PropTypes.oneOf(["primary", "secondary", "basic", "icon"]),
  icon: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
    PropTypes.object,
  ]),
  size: PropTypes.oneOf(["mini", "small", "normal", "large"]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
