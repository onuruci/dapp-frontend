import React from "react";
import { useState } from "react";

import "./styles.css"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Vendor = () => {
  const [valueInserted, setValueInserted] = useState(0);

  const handleChange = (e) => {
    if(e.target.value >= 0) {
          setValueInserted(e.target.value);

    }
  };

  return(
    <div className="introstyle">
      <div>
        GRF Tokens for 0.1 Fuji Avax
      </div>
       <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={valueInserted}
          onChange={e => handleChange(e)}
          sx={{margin:"auto", width:"300px"}}
        />
        <div style={{margin:"auto", width:"300px"}}>
          Cost without gas: {valueInserted * 0.1} Avax
        </div>
      <Button sx={{margin:"auto", width:"300px"}} variant="contained">Buy</Button>
    </div>
  );
};

export default Vendor;

