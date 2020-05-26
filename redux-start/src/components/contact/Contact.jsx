import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
  useParams,
  useHistory,
  Link,
} from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import NotFound from "../notFound";

export default function Contact() {
  const match = useRouteMatch();
  const params = useParams();
  const history = useHistory();
  console.log(history);
  console.log(params);
  console.log(match);
  const handleClick = () => {
    history.push("/");
  };

  return (
    <>
      <button type="button" onClick={() => handleClick()}>
        Go home
      </button>
      <Router>
        <ul>
          <li>
            <Link to={`${match.url}/page1`}>page 1</Link>
          </li>
          <li>
            <Link to={`${match.url}/page2`}>page 2</Link>
          </li>
          <li>
            <Link to={`${match.url}/page3`}>page 3</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path={`${match.url}/page1`} component={Page1} />
          <Route path={`${match.url}/page2`} component={Page2} />
          <Route path={`${match.url}/page3`} component={Page3} />
          <Route path={`${match.url}/*`} component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}
