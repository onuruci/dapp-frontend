import React from "react";
import { useState } from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";

const Liquidity = () => {
  const [totalShares, setTotalShares] = useState(0);
  const [userShares, setUserShares] = useState(0);
  const [grfReserve, setGRFReserve] = useState(0);
  const [rhnReserve, setRHNReserve] = useState(0);

  return (
    <div className="introstyle">
      <div>Menage Liquidity</div>
      <div>
        If you didn't give allowance to dex for tokens yet. Go to the swap page
        and allow dex to manage your tokens first.
      </div>
      <div>Total shares: {totalShares}</div>
      <div>Your shares: {userShares}</div>
      <div>Reserve GRF: {grfReserve}</div>
      <div>Reserve RHN: {rhnReserve}</div>
      <div>Send Tokens and Add Liquidity</div>
      <TextField
        id="outlined-number"
        label="GRF amount"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        sx={{ margin: "auto", width: "200px" }}
      />
      <TextField
        id="outlined-number"
        label="RHN expected amount"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        sx={{ margin: "auto", width: "200px" }}
      />
      <Button sx={{ margin: "auto", width: "200px" }} variant="contained">
        Add Liquidity
      </Button>
      <div>Burn your shares & Gain interest</div>
      <Button sx={{ margin: "auto", width: "200px" }} variant="contained">
        Remove Liquidity
      </Button>
    </div>
  );
};

export default Liquidity;
