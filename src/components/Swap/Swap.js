import React from "react";
import { useState } from "react";
import "./styles.css";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import SwapVerticalCircleIcon from "@mui/icons-material/SwapVerticalCircle";

const Swap = () => {
  const [grfAllowance, setGRFAllowance] = useState(0);
  const [rhnAllowance, setRHNAllowance] = useState(0);

  const [swapState, setSwapState] = useState(true);

  const handleSwapChange = () => {
    setSwapState(!swapState);
  };

  return (
    <code className="introstyle">
      <div>
        First you need to add allowance if you dont have enough allowed tokens
      </div>
      <div>Your GRF Allowance: {grfAllowance}</div>
      <Button sx={{ margin: "auto", width: "300px" }} variant="contained">
        Allow GRF Tokens
      </Button>
      <div>Your RHN Allowance: {rhnAllowance}</div>
      <Button sx={{ margin: "auto", width: "300px" }} variant="contained">
        Allow RHN Tokens
      </Button>
      <div>Swap Between Tokens</div>
      {swapState ? (
        <>
          <TextField
            id="outlined-number"
            label="GRF amount"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ margin: "auto", width: "300px" }}
          />
          <SwapVerticalCircleIcon
            sx={{ margin: "auto", cursor: "pointer" }}
            color="primary"
            onClick={() => handleSwapChange()}
          />
          <TextField
            id="outlined-number"
            label="RHN expected amount"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ margin: "auto", width: "300px" }}
          />
        </>
      ) : (
        <>
          <TextField
            id="outlined-number"
            label="RHN amount"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ margin: "auto", width: "300px" }}
          />
          <SwapVerticalCircleIcon
            sx={{ margin: "auto", cursor: "pointer" }}
            color="primary"
            onClick={() => handleSwapChange()}
          />
          <TextField
            id="outlined-number"
            label="GRF expected amount"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ margin: "auto", width: "300px" }}
          />
        </>
      )}
      <Button sx={{ margin: "auto", width: "300px" }} variant="contained">
        Swap
      </Button>
    </code>
  );
};

export default Swap;
