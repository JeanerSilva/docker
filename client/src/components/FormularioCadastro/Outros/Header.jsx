import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../Navbar";

function Header() {


    const useStyles = makeStyles(theme => ({
        menuButton: {
          marginRight: theme.spacing(2),
        },
        title: {
          flexGrow: 1,
        },
      }));
      
  return (
    <Navbar />
  );
}

/*


      <Router>
        <Route exact path="/" component={MainComponent} />
        <Route path="/otherpage" component={OtherPage} />
      </Router>

*/
export default Header;
