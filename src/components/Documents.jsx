import { IconButton, makeStyles, Button, Divider } from "@material-ui/core";
import { grey, red } from "@material-ui/core/colors";
import { Folder, MoreHoriz, Close } from "@material-ui/icons";
import React from "react";

const DocumentRow = ({ name, date, size, selected }) => {
  const { root, docName, docDate, docSize, icon } = makeStyles((theme) => ({
    root: {
      display: "flex",
      alignItems: "center",
      fontSize: 15,
      backgroundColor: selected ? red[50] : "inherit",
      color: selected ? red[500] : "inherit",
      padding: theme.spacing(0, 1),
      fontWeight: "500",
    },
    docName: {
      flex: 1,
      fontFamily: "Open Sans",
    },
    docDate: {
      width: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Open Sans",
    },
    docSize: {
      width: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Open Sans",
    },
    icon: {
      fontSize: 18,
      color: selected ? red[500] : "black",
    },
  }))();

  return (
    <div className={root}>
      <span className={docName}>{name}</span>
      <span className={docDate}>{date}</span>
      <span className={docSize}>{size}</span>
      <IconButton>
        <Close className={icon} />
      </IconButton>
    </div>
  );
};

const Documents = () => {
  const { root, header, title, iconButton, buttons } = makeStyles((theme) => ({
    root: {
      backgroundColor: "#fff",
      minWidth: 450,
      // minHeight: 450,
      boxShadow: theme.shadows[1],
      borderRadius: 8,
      padding: theme.spacing(2),
    },
    header: {
      display: "flex",
      justifyItems: "space-between",
      alignItems: "center",
      fontSize: "1.2rem",
      color: theme.palette.text.primary,
      marginBottom: theme.spacing(2),
    },
    title: {
      fontWeight: "500",
      display: "flex",
      justifyItems: "space-between",
      alignItems: "center",
      "& > *": {
        margin: theme.spacing(0, 1),
      },
    },
    iconButton: {
      marginLeft: "auto",
    },
    buttons: {
      display: "flex",
      alignItems: "center",
      "& > *": {
        flex: 1,
        margin: 4,
        textTransform: "capitalize",
        fontWeight: "400",
      },
      marginTop: theme.spacing(3),
    },
  }))();

  return (
    <div className={root}>
      <div className={header}>
        <div className={title}>
          <Folder />
          <span>Documents</span>
        </div>
        <IconButton className={iconButton}>
          <MoreHoriz />
        </IconButton>
      </div>
      <Divider />
      <DocumentRow
        name="filename.ext"
        date="12.04.2030"
        size="50MB"
        selected={false}
      />
      <Divider />
      <DocumentRow
        name="filename vdvvd.ext"
        date="12.04.2030"
        size="50MB"
        selected={true}
      />
      <Divider />
      <DocumentRow
        name="filee.ext"
        date="12.04.2030"
        size="50MB"
        selected={false}
      />
      <Divider />
      <DocumentRow
        name="fil   ename.ext"
        date="12.04.2030"
        size="50MB"
        selected={false}
      />
      <Divider />
      <DocumentRow
        name="fil   ename.ext"
        date="12.04.2030"
        size="50MB"
        selected={false}
      />
      <Divider />
      <DocumentRow
        name="fil   ename.ext"
        date="12.04.2030"
        size="50MB"
        selected={false}
      />
      <Divider />
      <DocumentRow
        name="fil   ename.ext"
        date="12.04.2030"
        size="50MB"
        selected={false}
      />
      <Divider />
      <DocumentRow
        name="fil   ename.ext"
        date="12.04.2030"
        size="50MB"
        selected={false}
      />
      <Divider />
      <DocumentRow
        name="fil   ename.ext"
        date="12.04.2030"
        size="50MB"
        selected={false}
      />
      <Divider />
      <div className={buttons}>
        <Button variant="outlined" color="primary" disableElevation>
          Upload
        </Button>
        <Button variant="contained" color="primary" disableElevation>
          Confirm
        </Button>
      </div>
    </div>
  );
};

export { Documents };
