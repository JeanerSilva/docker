import React, { useCallback, useState, useEffect } from "react";
import { TextField, Button } from "@material-ui/core";
import axios from "axios";

function InsereItem() {
  const [value, setValue] = useState("");

  const saveNumber = useCallback(
    async (event) => {
      event.preventDefault();
      await axios.post("/api/values", {
        value,
      });
      setValue("");
    },
    [value]
  );

  useEffect(() => {
    //getAllNumbers();
  }, []);

  return (
    <form className="form" onSubmit={saveNumber}>
     
      <TextField
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
        id="value"
        name="value"
        label="Insira o número:"
        type="number"
        margin="normal"
      />
      <br />
      <Button type="submit" variant="contained" color="primary" >
        Inserir
      </Button>
    </form>
  );
}

export default InsereItem;
