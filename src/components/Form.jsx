import { Button, makeStyles, TextField, withStyles } from "@material-ui/core";
import { blue, grey } from "@material-ui/core/colors";
import React from "react";

const LabeledTextField = withStyles((theme) => ({
  root: {
    "& .MuiInput-root": {
      border: `1px solid ${grey[500]}`,
      borderRadius: 4,
      padding: 8,
      top: 5,
      "&:focus-within": {
        border: `1px solid ${blue[500]}`,
      },
    },
    margin: theme.spacing(1.5, 0),
    "& .MuiInputLabel-root": {
      fontWeight: "200",
      color: grey[800],
      fontSize: 18,
    },
  },
}))(({ children, label, ...props }) => (
  <TextField
    {...props}
    InputLabelProps={{ shrink: true }}
    InputProps={{ disableUnderline: true }}
    fullWidth
    label={label}
  >
    {children}
  </TextField>
));

const Form = () => {
  const { root, form, buttons } = makeStyles((theme) => ({
    root: {
      width: 400,
      fontFamily: "Inter",
      backgroundColor: theme.palette.common.white,
      padding: theme.spacing(2),
      borderRadius: theme.shape.borderRadius,
      boxShadow: theme.shadows[18],
      "& h1": {
        fontWeight: "500",
        fontSize: "1.5rem",
        color: grey[800],
      },
      "& h5": {
        fontSize: 14,
        fontWeight: "400",
        marginTop: 8,
        color: grey[900],
      },
    },
    form: {
      marginTop: theme.spacing(3),
    },
    buttons: {
      marginTop: theme.spacing(2),
      display: "flex",
      "& button": {
        flex: 1,
        fontFamily: "Open Sans",
        fontWeight: 400,
        "& .MuiButton-label": {
          textTransform: "capitalize",
        },
      },
      "& button:nth-child(1)": {
        marginRight: theme.spacing(1),
      },
      "& button:nth-child(2)": {
        marginLeft: theme.spacing(1),
      },
    },
  }))();

  return (
    <div className={root}>
      <h1>Create event</h1>
      <h5>Add some information for the event you want to create</h5>
      <form className={form}>
        <LabeledTextField label="Event title" />
        <LabeledTextField label="Event subtitle" />
        <LabeledTextField multiline rows={4} label="Event subtitle" />
        <div className={buttons}>
          <Button color="primary" variant="outlined">
            Cancel
          </Button>
          <Button color="primary" variant="contained">
            Create
          </Button>
        </div>
      </form>
    </div>
  );
};

export { Form };
