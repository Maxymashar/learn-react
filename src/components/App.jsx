import React from "react";
import { makeStyles } from "@material-ui/core";
import { Documents } from "./Documents";
import { blue } from "@material-ui/core/colors";
import { Form } from "./Form";

const App = () => {
  const { root } = makeStyles({
    root: {
      width: "100%",
      height: "100%",
      backgroundColor: blue[400],
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "& *": {
        fontFamily: "Open Sans",
      },
    },
  })();
  
  return (
    <div className={root}>
      <Form />
    </div>
  );
};

export { App };
