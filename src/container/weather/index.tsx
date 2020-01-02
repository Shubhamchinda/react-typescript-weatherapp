import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Cities from "./../../component/cities";
import Request from "./../../request";

interface Props {}

const useStyles = makeStyles(theme => ({
  button: {
    width: "50%"
  },
  tempButton: {
    margin: "5px 5px 5px 5px"
  }
}));

const Weather: React.FC<Props> = () => {
  const [selCity, setSelCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [enable, setEnable] = useState(false);
  const [temp, setTemp] = useState<any>(null);
  const [showTemp, setShowTemp] = useState<any>(null);
  const [farButton, setFarButton] = useState<any>(true);

  const city = (value: any) => {
    setSelCity(value);
    if (value !== "Select") {
      setEnable(true);
    } else {
      setEnable(false);
      setShowTemp(null);
    }
  };

  const handleButton = async () => {
    setTemp(null);
    setShowTemp(null);
    if (selCity !== "Select") {
      setLoading(true);

      const data: any = await Request.getWeather({ city: selCity });
      let currentTemp =
        data &&
        data.current_observation.condition &&
        data.current_observation.condition.temperature;
      setLoading(false);
      setTemp(currentTemp);
      setShowTemp(currentTemp);
    }
  };

  const classes = useStyles();

  const convertCel = () => {
    if (temp !== null) {
      const x: any = (temp - 32) * (5 / 9);
      setShowTemp(Math.round(x));
      setFarButton(false);
    }
  };
  const convertFar = () => {
    setShowTemp(temp);
    setFarButton(true);
  };

  return (
    <div>
      <Cities selectedCity={city} />
      <Button
        variant="contained"
        color="primary"
        onClick={handleButton}
        className={classes.button}
        disabled={!enable}
      >
        Get Weather
      </Button>
      <br />
      <br />
      {loading && <h2>Fetching...</h2>}
      {showTemp && (
        <>
          <h2>
            <strong>{showTemp}° </strong>
            <Button
              onClick={convertFar}
              variant="outlined"
              color="primary"
              disabled={farButton}
              className={classes.tempButton}
            >
              {farButton ? (
                <>
                  <u>
                    <strong>
                      <b>F</b>
                    </strong>
                  </u>{" "}
                  *
                </>
              ) : (
                "F"
              )}
            </Button>
            /
            <Button
              onClick={convertCel}
              variant="outlined"
              color="primary"
              disabled={!farButton}
              className={classes.tempButton}
            >
              {!farButton ? (
                <>
                  <u>
                    <strong>
                      <b>C</b>
                    </strong>
                  </u>{" "}
                  *
                </>
              ) : (
                "C"
              )}
            </Button>
          </h2>
        </>
      )}
    </div>
  );
};

export default Weather;
