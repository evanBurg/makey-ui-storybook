import React from "react";
import {
  Button as MaterialButton,
  IconButton,
  ThemeProvider,
} from "@material-ui/core";
import PropTypes from "prop-types";
import theme from "./theme";
import "./Button.scss";

const sizeMap = {
  mini: "small",
  small: "small",
  normal: "medium",
  large: "large",
};

const generateClassname = props => {
    let className = 'makey-button';
    if(props.type) className += ` type-${props.type}`
    if(props.color) className += ` color-${props.color}`
    if(props.size) className += ` size-${props.size}`
    return className;
}

const getVariant = props => {
    let variant = "contained";
    if (props.type === "secondary") variant = "outlined";
    if (props.type === "secondary" && props.disabled) variant = "contained";
    if (props.type === "basic") variant = undefined;
    return variant;
}

const Button = (props) => {
  let size = undefined;
  if (props.size) {
    size = sizeMap[props.size];
  }

  const className = generateClassname(props);
  const variant = getVariant(props);

  if (props.type === "icon") {
    return (
      <IconButton
        {...props}
        size={size}
        className={className}
      >
        {props.children}
      </IconButton>
    );
  }

  return (
    <MaterialButton
      variant={variant}
      {...props}
      size={size}
      startIcon={props.icon}
      className={className}
    >
      {props.children}
    </MaterialButton>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  color: PropTypes.oneOf(["primary", "secondary"]),
  type: PropTypes.oneOf(["primary", "secondary", "basic", "icon"]),
  icon: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  size: PropTypes.oneOf(["mini", "small", "normal", "large"]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

export default (props) => (
  <ThemeProvider theme={theme}>
    <Button {...props} />
  </ThemeProvider>
);
