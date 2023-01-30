import React from "react";
import { useState, useEffect } from "react";

import Button from "@mui/material/Button";

import d_green from "../../common/dog_green.svg";
import d_red from "../../common/dog_red.svg";
import d_blue from "../../common/dog_blue.svg";

const MintSVGNFT = () => {
  return(
    <code className="introstyle">
      <div>
        Mint your DoGGo NFT
      </div>
      <div className="dogimage">
        <img  src={d_green} alt="" srcset="" className="dogimage"/>
        <Button
        sx={{ margin: "auto", width:"200px" }}
        variant="contained"
      >
        Mint Green
      </Button>
      </div>

      <div className="dogimage">
        <img  src={d_red} alt="" srcset="" className="dogimage"/>
        <Button
        sx={{ margin: "auto", width:"200px" }}
        variant="contained"
      >
        Mint Red
      </Button>
      </div>

      <div className="dogimage">
        <img  src={d_blue} alt="" srcset="" className="dogimage"/>
        <Button
        sx={{ margin: "auto", width:"200px" }}
        variant="contained"
      >
        Mint Blue
      </Button>
      </div>

      <div>
        Your DoGGo NFT's
      </div>
      
    </code>
  );
};

export default MintSVGNFT;
