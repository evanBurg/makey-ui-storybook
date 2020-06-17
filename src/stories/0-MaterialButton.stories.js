import React from "react";
import { MaterialButton as Button, CenterStory } from "../components/index";
import Add from "@material-ui/icons/Add";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { action } from "@storybook/addon-actions";
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs/react";
import SyntaxHighlighter from 'react-syntax-highlighter';
export default {
  title: "Material Button",
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
  if(iconName === 'Add') return <Add/>
  if(iconName === 'ArrowBackIcon') return <ArrowBackIcon/>
  if(iconName === 'AutorenewIcon') return <AutorenewIcon/>
  if(iconName === 'BookmarkBorderIcon') return <BookmarkBorderIcon/>
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
      icon={<Add />}
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
      icon={<Add />}
    >
      Secondary Button
    </Button>
  </CenterStory>
);

export const Text = () => (
  <CenterStory>
    <Button onClick={actionsData.onClick} type="basic" icon={<Add />}>
      Text Button
    </Button>
  </CenterStory>
);

export const Icon = () => (
  <CenterStory>
    <Button onClick={actionsData.onClick} type="icon">
      <Add />
    </Button>
  </CenterStory>
);

export const Code = () => {
  return (
    <div className="code-container">
      <div className="code-entry">
        JS Component
        <SyntaxHighlighter language="javascript" style={docco}>
          {
            'import React from \"react\";\r\nimport {\r\n  Button as MaterialButton,\r\n  IconButton,\r\n  ThemeProvider,\r\n} from \"@material-ui\/core\";\r\nimport PropTypes from \"prop-types\";\r\nimport theme from \".\/theme\";\r\nimport \".\/Button.scss\";\r\n\r\nconst sizeMap = {\r\n  mini: \"small\",\r\n  small: \"small\",\r\n  normal: \"medium\",\r\n  large: \"large\",\r\n};\r\n\r\nconst generateClassname = props => {\r\n    let className = \'makey-button\';\r\n    if(props.type) className += ` type-${props.type}`\r\n    if(props.color) className += ` color-${props.color}`\r\n    if(props.size) className += ` size-${props.size}`\r\n    return className;\r\n}\r\n\r\nconst getVariant = props => {\r\n    let variant = \"contained\";\r\n    if (props.type === \"secondary\") variant = \"outlined\";\r\n    if (props.type === \"secondary\" && props.disabled) variant = \"contained\";\r\n    if (props.type === \"basic\") variant = undefined;\r\n    return variant;\r\n}\r\n\r\nconst Button = (props) => {\r\n  let size = undefined;\r\n  if (props.size) {\r\n    size = sizeMap[props.size];\r\n  }\r\n\r\n  const className = generateClassname(props);\r\n  const variant = getVariant(props);\r\n\r\n  if (props.type === \"icon\") {\r\n    return (\r\n      <IconButton\r\n        {...props}\r\n        size={size}\r\n        className={className}\r\n      >\r\n        {props.children}\r\n      <\/IconButton>\r\n    );\r\n  }\r\n\r\n  return (\r\n    <MaterialButton\r\n      variant={variant}\r\n      {...props}\r\n      size={size}\r\n      startIcon={props.icon}\r\n      className={className}\r\n    >\r\n      {props.children}\r\n    <\/MaterialButton>\r\n  );\r\n};\r\n\r\nButton.propTypes = {\r\n  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,\r\n  color: PropTypes.oneOf([\"primary\", \"secondary\"]),\r\n  type: PropTypes.oneOf([\"primary\", \"secondary\", \"basic\", \"icon\"]),\r\n  icon: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),\r\n  size: PropTypes.oneOf([\"mini\", \"small\", \"normal\", \"large\"]),\r\n  onClick: PropTypes.func,\r\n  disabled: PropTypes.bool\r\n};\r\n\r\nexport default (props) => (\r\n  <ThemeProvider theme={theme}>\r\n    <Button {...props} \/>\r\n  <\/ThemeProvider>\r\n);\r\n'
          }
        </SyntaxHighlighter>
      </div>
      <div className="code-entry">
        CSS Component
        <SyntaxHighlighter language="css" style={docco}>
          {
            '.MuiButtonBase-root.MuiButton-root {\r\n    border-radius: 100px;\r\n    box-shadow: unset !important;\r\n}\r\n\r\n.MuiButtonBase-root.MuiButton-root.MuiButton-contained.makey-button.type-primary.color-primary.MuiButton-containedPrimary {\r\n    color: white;\r\n    .MuiTouchRipple-root.span {\r\n        background-color: #FFA245;\r\n        opacity: .3;\r\n    }\r\n}\r\n\r\n.MuiButtonBase-root.MuiButton-root.MuiButton-contained.makey-button.type-primary.color-primary.MuiButton-containedPrimary:hover {\r\n    background-color: #FFAA5CB3;\r\n    box-shadow: unset;\r\n}\r\n\r\n.MuiButtonBase-root.MuiButton-root.MuiButton-outlined.makey-button.type-secondary.color-secondary.MuiButton-outlinedSecondary {\r\n    color: black;\r\n    border: 1px solid black;\r\n    transition: color 0.3s;\r\n    .MuiTouchRipple-root.span {\r\n        background-color: #FFF1E5 !important;\r\n        opacity: .3;\r\n    }\r\n    .MuiSvgIcon-root {\r\n        fill:#FFA245;\r\n    }\r\n}\r\n.MuiButtonBase-root.MuiButton-root.MuiButton-outlined.makey-button.type-secondary.color-secondary.MuiButton-outlinedSecondary:hover {\r\n    color: #787B84;\r\n}\r\n\r\n.MuiButtonBase-root.MuiIconButton-root.makey-button.type-icon {\r\n    background-color: white;\r\n    box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12);\r\n}'
          }
        </SyntaxHighlighter>
      </div>
      <div className="code-entry">
        Theme Component
        <SyntaxHighlighter language="javascript" style={docco}>
          {
            'import { createMuiTheme } from \"@material-ui\/core\/styles\";\r\n\r\nconst theme = createMuiTheme({\r\n  palette: {\r\n    primary: {\r\n      main: \"#FFA245\", \/\/Deep safron\r\n    },\r\n    secondary: {\r\n      main: \"#FCFCFC\",\r\n    },\r\n  },\r\n});\r\n\r\nexport const Colours = {\r\n  primary: \"#FFA245\",\r\n  secondary: \"#FCFCFC\",\r\n};\r\n\r\nexport default theme;\r\n'
          }
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
