import React from "react";

const ProgressBar = ({ progress }) => {
return (
<div className="progress-bar">
    <div style={{ width: `${progress}%`, backgroundColor: "green" }}></div>
</div>
);
};

export default ProgressBar;
