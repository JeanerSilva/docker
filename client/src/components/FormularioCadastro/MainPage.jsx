import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OtherPage from "../../OtherPage";
import Lista from "./Lista";
import InsereItem from "./InsereItem";
import Page404 from "./Page404";
import Value from "./Value";
import Reducer from "./Reducer";

function MainPage() {
  return (
    <Container component="article" maxWidth="sm">   
      <Router>
        <Routes>
          <Route exact path="/"           element={<Lista       url={"/api/values/all"} />} />
          <Route exact path="/insere"     element={<InsereItem valor={"/api/values/all"} />} />
          <Route exact path="/reducer"    element={<Reducer />} />
          <Route path="/otherpage"        element={<OtherPage />} />
          <Route path="/api/values/:id"   element={<Value       url={"/api/values/"} />} />
          <Route                          element={<Page404 />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default MainPage;
