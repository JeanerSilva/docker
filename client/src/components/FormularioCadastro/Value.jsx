import React, { useCallback, useEffect, useState } from "react";
import { busca } from "../../api/api";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";

function Value({ url }) {
  const { id } = useParams();
  let navigate = useNavigate();
  const [value, setValue] = useState([]);
  const [url_, setUrl_] = useState([url + id])

  const getValue = useCallback(() => {
    busca(url + id , setValue).catch(() => {
        navigate.push("/404");
    });
  }, [url, id, navigate]);

  useEffect(() => {
    getValue();
  }, [url_, getValue]);

  function alteraUrl () {
    setUrl_("/api/values/2");
    console.log(url_)
    //getValue();
  };

  return (
    <div className="values">
      {value.map((value) => (
        <div key={value.id}>{value.number}</div>
      ))}
      <Button
        variant="contained"
        color="primary"
        type="button"
        onClick={
            // se colocar alteraUrl direto, ele já executa. Com a arrow function só executa quando clicar
            () => {
            alteraUrl()
        }}
      >
        Altera url
      </Button>
    </div>
  );
}

export default Value;
