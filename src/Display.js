import React from "react";

const Display = ({ func,text  }) => {
  return (
  	<span>
  	<h4>{func}</h4><small>{text}</small>
    </span>
  );
};
export default Display;
