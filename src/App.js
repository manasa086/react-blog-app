import React from 'react';
import routes from "./routes";
import {Route,Switch,Link} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import PostPage from "./Pages/PostPage.js"





function App() {
  return (
    <>
    <Header></Header>
      {/* <header>
        <ul>
          <li><Link to={routes.home}>Home</Link>
          </li>
          <li><Link to={routes.posts}>Posts</Link>
          </li>
          <li><Link to={routes.authors}>Autors</Link>
          </li>
        </ul>
      </header> */}
      <Switch>
      <Route  exact path={routes.home}>
      <Home/>
      </Route>
      <Route path={routes.post}>
        <PostPage></PostPage>
      </Route>
      <Route path={routes.posts}>
      <h2>Posts Page</h2>
      </Route>
      <Route path={routes.home}>
      <h2>Authors Page</h2>
      </Route>
      </Switch>
    </>
  );
}

export default App;
