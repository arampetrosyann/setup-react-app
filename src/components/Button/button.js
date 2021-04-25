import React from "react";
import defaultClasses from "./button.module.css";
import mergeClasses from "../../helpers/mergeClasses";

const Button = (props) => {
  const { type, onClick, onBlur, autoFocus, style, children } = props;

  const classes = mergeClasses(defaultClasses, props.classes);

  return (
    <button
      className={classes.root}
      type={type}
      onClick={onClick}
      onBlur={onBlur}
      autoFocus={autoFocus}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
