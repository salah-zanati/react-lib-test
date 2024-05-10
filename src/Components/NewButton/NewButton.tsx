import React from "react";
import PropTypes from "prop-types";

type propsTypes = { label: string };

const NewButton = (props: propsTypes) => {
  return (
    <button
      style={{
        padding: "10px 15px",
        backgroundColor: "blue",
        borderRadius: "10px",
      }}
    >
      {props.label}
    </button>
  );
};

export default NewButton;
