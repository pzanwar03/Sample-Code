import React from "react";
import { createStyles, makeStyles, withStyles, Theme } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    input: {
      borderRadius: 10,
      position: "relative",
      border: "1px solid #4F4F4F",
      fontSize: 14,
      padding: "10px 26px 10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      backgroundColor: "#000000",
      color: "#fff",
      width: "120px",
      height: "24px",
      "&:focus": {
        borderRadius: 10,
        borderColor: "#4F4F4F",
        boxShadow: "0 0 0 0.1rem #4F4F4F",
      },
      formControl: {
        background: "#000000",
      },
    },
  })
)(InputBase);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
  })
);

export default function SortBy() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };
  return (
    <div>
      <FormControl className={classes.margin}>
        <NativeSelect id="demo-customized-select-native" value={age} onChange={handleChange} input={<BootstrapInput />}>
          <option value={"Last Listed"}>Last Listed</option>
          <option value={"Highest Price"}>Highest Price</option>
          <option value={"Lowest Price"}>Lowest Price</option>
        </NativeSelect>
      </FormControl>
    </div>
  );
}
