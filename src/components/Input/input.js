import React from "react";
import defaultClasses from "./input.module.css";
import mergeClasses from "../../helpers/mergeClasses";

const Input = (props) => {
  const {
    type,
    name,
    id,
    holder,
    value,
    onChange,
    onBlur,
    autoFocus,
    style,
  } = props;

  const classes = mergeClasses(defaultClasses, props.classes);

  return (
    <input
      className={classes.root}
      type={type}
      value={value}
      id={id}
      name={name}
      placeholder={holder}
      onChange={onChange}
      onBlur={onBlur}
      autoFocus={autoFocus}
      style={style}
    />
  );
};

export default Input;
