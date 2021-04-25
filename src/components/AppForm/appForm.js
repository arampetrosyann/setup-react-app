import React, { useState, useCallback } from "react";
import defaultClasses from "./appForm.module.css";
import mergeClasses from "../../helpers/mergeClasses";
import Input from "../Input";
import Button from "../Button";
import reactImg from "../../assets/images/react.png";

const AppForm = (props) => {
  const { action, method, onSubmit, style, children } = props;

  const [value, setValue] = useState("");

  const classes = mergeClasses(defaultClasses, props.classes);

  const handleInput = useCallback((event) => {
    setValue(event.target.value);
  }, []);

  return (
    <div className={classes.root}>
      <img
        className={classes.img}
        src={reactImg}
        alt="React image"
        title="React"
        width={360}
      />
      <form
        className={classes.form}
        action={action}
        method={method}
        style={style}
        onSubmit={(event) => {
          event.preventDefault();

          onSubmit({ value });
        }}
      >
        <div className={classes.inputBox}>
          <span className={classes.iconCircle} />
          <Input value={value} onChange={handleInput} />
        </div>
        <Button classes={{ root: classes.btn }}>Submit</Button>
        {children}
      </form>
    </div>
  );
};

export default AppForm;
