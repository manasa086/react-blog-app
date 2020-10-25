import React,{useReducer} from 'react';
import routes from "./routes";
import {Route,Switch,Link} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import PostPage from "./Pages/PostPage.js"
import NewPost from "./Pages/NewPost.js";
import Authors from "./Pages/Authors.js";

import PageErrorBoundary from "./ErrorBoundary/PageErrorBoundary.js";


const countReducer=(prevState,action)=>{
  switch(action)
  {
    case "increment":
      return prevState+1;
    case "decrement":
      return prevState-1;
    default:
      return prevState;
  }
}


function App() {
  const [counterState,counterDispatch]=useReducer(countReducer,0);

  const subtract=()=>{
    counterDispatch("decrement");
  }
  const add=()=>{
    counterDispatch("increment");
  }


  return (
    <>
    {/* <button onClick={subtract}>-</button>
    <h1>{counterState}</h1>
    <button onClick={add}>+</button> */}
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
      
      
      
      <Route path={routes.post}>
      <PageErrorBoundary>
        <PostPage></PostPage>
        </PageErrorBoundary>
      </Route>
      <Route path={routes.authors}>
      <PageErrorBoundary>
        <Authors></Authors>
        </PageErrorBoundary>
      </Route>
      <Route path={routes.addPost}>
      <NewPost/>
      </Route>
      <Route path={routes.home}>
      <PageErrorBoundary>
      <Home/>
      </PageErrorBoundary>
      </Route>
      
      </Switch>
    </>
  );
}

export default App;
