import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  NativeSelect,
  InputBase
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";

interface Props {
  selectedCity?: Function;
}

const BootstrapInput = withStyles(theme => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3)
    }
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  }
}))(InputBase);

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(2),
    width: "50%"
  }
}));

const Cities: React.FC<Props> = (props: Props) => {
  const [city, setCity] = useState("");
  const handleChange = (event: any) => {
    setCity(event.target.value);

    const { selectedCity } = props;

    selectedCity && selectedCity(event.target.value);
  };

  const classes = useStyles();
  return (
    <div>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="demo-customized-select-native">Cities</InputLabel>
        <NativeSelect
          id="demo-customized-select-native"
          value={city}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <option value={"Select"}>Select</option>
          <option value={"newyork"}>New York</option>
          <option value={"Washington"}>Washington</option>
          <option value={"Texas"}>Texas</option>
          <option value={"california"}>California</option>
          <option value={"sanfrancisco"}>San Francisco</option>
          <option value={"seattle"}>Seattle</option>
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default Cities;
