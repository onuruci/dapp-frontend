import React from "react";
import { useState } from "react";
import "./styles.css";

import Button from "@mui/material/Button";

const Faucet = () => {
  const [grfBalance, setGRFBalance] = useState(0);
  const [rhnBalance, setRHNBalance] = useState(0);

  return (
    <div className="introstyle">
      <div>Faucet</div>
      <div>GRF Token</div>
      <div>Your GRF Balance: {grfBalance}</div>
      <Button sx={{ margin: "auto", width: "300px" }} variant="contained">
        Get 100 Token
      </Button>
      <div>RHN Token</div>
      <div>Your RHN Balance: {rhnBalance}</div>
      <Button sx={{ margin: "auto", width: "300px" }} variant="contained">
        Get 100 Token
      </Button>
    </div>
  );
};

export default Faucet;
