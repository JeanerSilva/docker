import React, { useCallback, useState, useEffect } from "react";
import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/Inbox";
import { busca } from '../../api/api'

function Lista( { url } ) {
  const [value, setValue] = useState([]);
  const getAllNumbers = useCallback( () => {
    busca(url, setValue)
  }, [url]);

  useEffect(() => {
    getAllNumbers();
  }, [getAllNumbers]);

  
  return (
    <>
      <Typography variant="h3" component="h1" align="center">
        Lista teste 2
      </Typography>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          getAllNumbers();
        }}
      >
        <Button type="submit" variant="contained" color="primary">
          Lista Valores
        </Button>

        <div className="values">
          {value.map((value) => (
            <div key={value.id} className="value">
              <Link to ={`/api/values/${value.id}`}>
              <List component="nav">
                <ListItem button>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={value.number} />
                </ListItem>
              </List>
              </Link>
            </div>
          ))}
        </div>

          <Link to="/insere">Inserir</Link>

      </form>
    </>
  );
}

export default Lista;
