import React from "react";
import { ChakraButton as Button, CenterStory } from "../components/index";
import Add from "@material-ui/icons/Add";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs/react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
export default {
  title: "Chakra Button",
  decorators: [withKnobs],
  component: Button,
};

const actionsData = {
  onClick: action("onClick"),
};

const types = { None: undefined, primary: "primary", secondary: "secondary", basic: "basic" };
const sizes = {
  small: "small",
  normal: "normal",
  large: "large",
};
const colors = { None: undefined, primary: "primary", secondary: "secondary" };
const icons = {None: undefined, Add: 'Add', ArrowBack: 'ArrowBackIcon', Refresh: 'AutorenewIcon', Bookmark: 'BookmarkBorderIcon'}
const getIcon = iconName => {
  if(iconName === 'Add') return Add
  if(iconName === 'ArrowBackIcon') return ArrowBackIcon
  if(iconName === 'AutorenewIcon') return AutorenewIcon
  if(iconName === 'BookmarkBorderIcon') return BookmarkBorderIcon
  return undefined
}

export const Playground = () => {
  const iconName = select('icon', icons, 'Add')

  return <CenterStory>
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
};

export const Primary = () => (
  <CenterStory>
    <Button
      onClick={actionsData.onClick}
      type="primary"
      color="primary"
      icon={Add}
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
      icon={Add}
    >
      Secondary Button
    </Button>
  </CenterStory>
);

export const Text = () => (
  <CenterStory>
    <Button color="secondary" onClick={actionsData.onClick} type="basic" icon={Add}>
      Text Button
    </Button>
  </CenterStory>
);

export const Icon = () => (
  <CenterStory>
    <Button color="secondary" onClick={actionsData.onClick} type="icon" icon={Add}/>
  </CenterStory>
);

export const Code = () => {
  return (
    <div className="code-container">
      <div className="code-entry">
        JS Component
        <SyntaxHighlighter language="javascript" style={docco}>
          {
            'import React from \"react\";\r\nimport {\r\n  Button as ChakraButton,\r\n  IconButton,\r\n  ThemeProvider,\r\n  CSSReset,\r\n} from \"@chakra-ui\/core\";\r\nimport PropTypes from \"prop-types\";\r\nimport \".\/Button.scss\";\r\nimport theme from \".\/theme\";\r\n\r\nconst sizeMap = {\r\n  mini: \"xs\",\r\n  small: \"sm\",\r\n  normal: \"md\",\r\n  large: \"lg\",\r\n};\r\n\r\nconst colorMap = {\r\n  primary: \"makey-orange\",\r\n  secondary: \"gray\"\r\n}\r\n\r\nconst generateClassname = (props) => {\r\n  let className = \"makey-button\";\r\n  if (props.type) className += ` type-${props.type}`;\r\n  if (props.color) className += ` color-${props.color}`;\r\n  if (props.size) className += ` size-${props.size}`;\r\n  return className;\r\n};\r\n\r\nconst getVariant = (props) => {\r\n  let variant = \"solid\";\r\n  if (props.type === \"secondary\") variant = \"outline\";\r\n  if (props.type === \"secondary\" && props.disabled) variant = \"solid\";\r\n  if (props.type === \"basic\") variant = \"ghost\";\r\n  return variant;\r\n};\r\n\r\nconst Button = (props) => {\r\n  let size = undefined;\r\n  if (props.size) {\r\n    size = sizeMap[props.size];\r\n  }\r\n\r\n  let color = undefined;\r\n  if (props.color) {\r\n    color = colorMap[props.color];\r\n  }\r\n\r\n  const className = generateClassname(props);\r\n  const variant = getVariant(props);\r\n\r\n  if (props.type === \"icon\") {\r\n    return (\r\n      <IconButton\r\n        {...props}\r\n        size={size}\r\n        variantColor={color}\r\n        className={className}\r\n        icon={props.icon}\r\n      \/>\r\n    );\r\n  }\r\n\r\n  return (\r\n    <ChakraButton\r\n      variant={variant}\r\n      {...props}\r\n      size={size}\r\n      leftIcon={props.icon}\r\n      variantColor={color}\r\n      \r\n      className={className}\r\n    >\r\n      {props.children}\r\n    <\/ChakraButton>\r\n  );\r\n};\r\n\r\nButton.propTypes = {\r\n  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])\r\n    .isRequired,\r\n  color: PropTypes.oneOf([\"primary\", \"secondary\"]),\r\n  type: PropTypes.oneOf([\"primary\", \"secondary\", \"basic\", \"icon\"]),\r\n  icon: PropTypes.oneOfType([PropTypes.func, PropTypes.element, PropTypes.object]),\r\n  size: PropTypes.oneOf([\"mini\", \"small\", \"normal\", \"large\"]),\r\n  onClick: PropTypes.func,\r\n  disabled: PropTypes.bool,\r\n};\r\n\r\nexport default (props) => (\r\n  <ThemeProvider theme={theme}>\r\n    <CSSReset\/>\r\n    <Button {...props} \/>\r\n  <\/ThemeProvider>\r\n);\r\n'
          }
        </SyntaxHighlighter>
      </div>
      <div className="code-entry">
        CSS Component
        <SyntaxHighlighter language="css" style={docco}>
          {
            '.makey-button {\r\n    border-radius: 100px !important;\r\n}\r\n.makey-button.type-primary.color-primary {\r\n    color: white !important;\r\n}\r\n.makey-button.type-secondary {\r\n    .MuiSvgIcon-root {\r\n        fill: #FFA245;\r\n    }\r\n}\r\n.makey-button.type-icon {\r\n    background-color: white;\r\n    box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12);\r\n}'
          }
        </SyntaxHighlighter>
      </div>
      <div className="code-entry">
        Theme Component
        <SyntaxHighlighter language="javascript" style={docco}>
          {
            'import { theme } from \"@chakra-ui\/core\";\r\n\r\nexport default {\r\n  ...theme,\r\n  colors: {\r\n    ...theme.colors,\r\n    \"makey-orange\": \r\n    {\r\n      50: \'#fff1dc\',\r\n      100: \'#ffd8af\',\r\n      200: \'#ffbf7f\',\r\n      300: \'#ffa64d\',\r\n      400: \'#fe8c1c\',\r\n      500: \'#ffa64d\',\r\n      600: \'#ffbf7f\',\r\n      700: \'#e57303\',\r\n      800: \'#b35900\',\r\n      900: \'#804000\',\r\n    },\r\n  },\r\n};\r\n'
          }
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

