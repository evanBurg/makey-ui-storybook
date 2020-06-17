import React from "react";
import "./CenterStory.scss";

const CenterStory = (props) => <div className="center-story">
    <div className="inner">{props.children}</div>
</div>

export default CenterStory;