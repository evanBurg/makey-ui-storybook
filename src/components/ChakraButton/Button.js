import React from "react";
import {
  Button as ChakraButton,
  IconButton,
  ThemeProvider,
  CSSReset,
} from "@chakra-ui/core";
import PropTypes from "prop-types";
import "./Button.scss";
import theme from "./theme";

const sizeMap = {
  mini: "xs",
  small: "sm",
  normal: "md",
  large: "lg",
};

const colorMap = {
  primary: "makey-orange",
  secondary: "gray"
}

const generateClassname = (props) => {
  let className = "makey-button";
  if (props.type) className += ` type-${props.type}`;
  if (props.color) className += ` color-${props.color}`;
  if (props.size) className += ` size-${props.size}`;
  return className;
};

const getVariant = (props) => {
  let variant = "solid";
  if (props.type === "secondary") variant = "outline";
  if (props.type === "secondary" && props.disabled) variant = "solid";
  if (props.type === "basic") variant = "ghost";
  return variant;
};

const Button = (props) => {
  let size = undefined;
  if (props.size) {
    size = sizeMap[props.size];
  }

  let color = undefined;
  if (props.color) {
    color = colorMap[props.color];
  }

  const className = generateClassname(props);
  const variant = getVariant(props);

  if (props.type === "icon") {
    return (
      <IconButton
        {...props}
        size={size}
        variantColor={color}
        className={className}
        icon={props.icon}
      />
    );
  }

  return (
    <ChakraButton
      variant={variant}
      {...props}
      size={size}
      leftIcon={props.icon}
      variantColor={color}
      
      className={className}
    >
      {props.children}
    </ChakraButton>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
  color: PropTypes.oneOf(["primary", "secondary"]),
  type: PropTypes.oneOf(["primary", "secondary", "basic", "icon"]),
  icon: PropTypes.oneOfType([PropTypes.func, PropTypes.element, PropTypes.object]),
  size: PropTypes.oneOf(["mini", "small", "normal", "large"]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default (props) => (
  <ThemeProvider theme={theme}>
    <CSSReset/>
    <Button {...props} />
  </ThemeProvider>
);
