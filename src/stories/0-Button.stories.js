import React from "react";
import { Button } from "@material-ui/core";

export default {
  title: "Button",
  component: Button,
};

export const Default = () => <Button variant="contained">Default</Button>

export const Primary = () => (
  <Button variant="contained" color="primary">
    Primary
  </Button>
);
