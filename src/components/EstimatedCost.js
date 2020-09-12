import "./HomeTypes.css";
import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const PrettoSlider = withStyles({
  root: {
    color: "#02afef",
  },

  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },

  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },

  track: {
    height: 8,
    borderRadius: 4,
  },

  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const marks = [
  {
    value: 0,
    label: "$100K",
  },
  {
    value: 25,
    label: "$250K",
  },
  {
    value: 50,
    label: "$750K",
  },
  {
    value: 75,
    label: "$1M",
  },
  {
    value: 100,
    label: "$5M+",
  },
];

function EstimatedCost() {
  const [amount, setAmount] = useState("");

  const valueLabelFormat = (value) => {
    const index = marks.findIndex((mark) => mark.value === value) + 1;
    setAmount(marks[index - 1].label);
    return index;
  };

  const valuetext = (value) => {
    return `${value}`;
  };

  return (
    <div className="hometype mx-auto col-xl-12 col-md-12 col-sm-11">
      <div className="head mt-3 mb-5">
        <a className="ques mx-auto m-3 col-12">
          What is your estimated <strong>Home</strong> ?
        </a>
      </div>
      <div className="row estimate  col-10 mx-auto">
        <h3 className="req_font mx-auto">{amount}</h3>

        <PrettoSlider
          className="col-12 mb-5"
          defaultValue={50}
          valueLabelFormat={valueLabelFormat}
          getAriaValueText={valuetext}
          step={25}
          marks={marks}
          aria-label="pretto slider"
        />
      </div>
      <div className="m-2 mb-3 mx-auto row col-12">
        <button className="mt-4 mb-2 btn-outline mx-auto btn btn_">
          Continue
        </button>
        <a className="col-12 others">
          <u>
            <strong>Others</strong>
          </u>
        </a>
      </div>
    </div>
  );
}

export default EstimatedCost;
