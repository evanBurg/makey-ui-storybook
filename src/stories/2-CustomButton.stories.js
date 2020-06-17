import React from "react";
import { CustomButton as Button, CenterStory } from "../components/index";
import Add from "@material-ui/icons/Add";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import { action } from "@storybook/addon-actions";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs/react";
export default {
  title: "Custom Button",
  decorators: [withKnobs],
  component: Button,
};

const actionsData = {
  onClick: action("onClick"),
};

const types = {
  None: undefined,
  primary: "primary",
  secondary: "secondary",
  basic: "basic",
};
const sizes = {
  small: "small",
  normal: "normal",
  large: "large",
};
const colors = { None: undefined, primary: "primary", secondary: "secondary" };
const icons = {
  None: undefined,
  Add: "Add",
  ArrowBack: "ArrowBackIcon",
  Refresh: "AutorenewIcon",
  Bookmark: "BookmarkBorderIcon",
};
const getIcon = (iconName) => {
  if (iconName === "Add") return () => <Add />;
  if (iconName === "ArrowBackIcon") return () => <ArrowBackIcon />;
  if (iconName === "AutorenewIcon") return () => <AutorenewIcon />;
  if (iconName === "BookmarkBorderIcon") return () => <BookmarkBorderIcon />;
  return undefined;
};

export const Playground = () => {
  const iconName = select("icon", icons, "Add");

  return (
    <CenterStory>
      <Button
        onClick={actionsData.onClick}
        type={select("type", types, "primary")}
        size={select("size", sizes, "normal")}
        color={select("color", colors, "primary")}
        icon={iconName !== undefined ? getIcon(iconName) : iconName}
        disabled={boolean("disabled", false)}
      >
        {text("text", "This is a Button")}
      </Button>
    </CenterStory>
  );
};

export const Primary = () => (
  <CenterStory>
    <Button
      onClick={actionsData.onClick}
      type="primary"
      color="primary"
      icon={() => <Add />}
    >
      Primary Button
    </Button>
  </CenterStory>
);

export const Secondary = () => (
  <CenterStory>
    <Button
      onClick={actionsData.onClick}
      type="secondary"
      color="secondary"
      icon={() => <Add />}
    >
      Secondary Button
    </Button>
  </CenterStory>
);

export const Text = () => (
  <CenterStory>
    <Button
      color="secondary"
      onClick={actionsData.onClick}
      type="basic"
      icon={() => <Add />}
    >
      Text Button
    </Button>
  </CenterStory>
);

export const Icon = () => (
  <CenterStory>
    <Button
      color="secondary"
      onClick={actionsData.onClick}
      type="icon"
      icon={() => <Add />}
    />
  </CenterStory>
);

export const Code = () => {
  return (
    <div className="code-container">
      <div className="code-entry">
        JS Component
        <SyntaxHighlighter language="javascript" style={docco}>
          {
            'import React from "react";\r\nimport PropTypes from "prop-types";\r\nimport "./Button.scss";\r\n\r\nconst generateClassname = (props) => {\r\n  let className = "makey-button-custom";\r\n  if (props.type) className += ` type-${props.type}`;\r\n  if (props.color) className += ` color-${props.color}`;\r\n  if (props.size) className += ` size-${props.size}`;\r\n  return className;\r\n};\r\n\r\nconst Button = (props) => {\r\n  const className = generateClassname(props);\r\n  return (\r\n    <button\r\n      {...props}\r\n      className={className}\r\n    >\r\n      {props.icon && <div className="icon-container">{props.icon()}</div>}\r\n      <div className="text-container">{props.children}</div>\r\n    </button>\r\n  );\r\n};\r\n\r\nButton.propTypes = {\r\n  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])\r\n    .isRequired,\r\n  color: PropTypes.oneOf(["primary", "secondary"]),\r\n  type: PropTypes.oneOf(["primary", "secondary", "basic", "icon"]),\r\n  icon: PropTypes.oneOfType([PropTypes.func, PropTypes.element, PropTypes.object]),\r\n  size: PropTypes.oneOf(["mini", "small", "normal", "large"]),\r\n  onClick: PropTypes.func,\r\n  disabled: PropTypes.bool,\r\n};\r\n\r\nexport default Button;\r\n'
          }
        </SyntaxHighlighter>
      </div>
      <div className="code-entry">
        CSS Component
        <SyntaxHighlighter language="css" style={docco}>
          {
            "@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;800&display=swap');\r\n\r\n.makey-button-custom {\r\n    min-width: 130px;\r\n    min-height: 52px;\r\n    background-color: white;\r\n    border-radius: 100px;\r\n    opacity: 1;\r\n    padding: 0.2rem 1rem;\r\n    font-family: 'Poppins', sans-serif;\r\n    outline: none;\r\n    border: none;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    transition: all 0.3s;\r\n    color: black;\r\n    cursor: pointer;\r\n    .icon-container {\r\n        margin-right: 0.8rem;\r\n        height: 24px;\r\n    }\r\n}\r\n\r\n.makey-button-custom:hover {\r\n    color: #787B84;\r\n}\r\n\r\n.makey-button-custom.type-icon {\r\n    min-height: unset;\r\n    min-width: unset;\r\n    background-color: white;\r\n    box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12);\r\n    padding: 0.7rem;\r\n    .icon-container {\r\n        margin: 0;\r\n    }\r\n}\r\n\r\n.makey-button-custom.color-primary.type-primary {\r\n    background-color: #FFA245;\r\n    color: white;\r\n}\r\n\r\n.makey-button-custom.color-primary.type-primary:hover {\r\n    background-color: #FFAA5CB3;\r\n}\r\n\r\n.makey-button-custom.type-secondary {\r\n    .icon-container svg {\r\n        fill: #FFA245;\r\n    }\r\n}\r\n\r\n.makey-button-custom.type-secondary:hover {\r\n    .icon-container svg {\r\n        fill: #FFAA5C80;\r\n    }\r\n}\r\n\r\n.makey-button-custom.color-secondary {\r\n    background-color: white;\r\n    color: black;\r\n}\r\n\r\n.makey-button-custom.color-secondary:hover {\r\n    color: #787B84;\r\n}\r\n\r\n.makey-button-custom.type-secondary {\r\n    border: 1px solid #D5D9DC;\r\n}\r\n\r\n.makey-button-custom:disabled {\r\n    background-color: #F5F5F5 !important;\r\n    color: #D5D9DC !important;\r\n    border: none;\r\n    .icon-container svg {\r\n        fill: #D5D9DC;\r\n    }\r\n}"
          }
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
