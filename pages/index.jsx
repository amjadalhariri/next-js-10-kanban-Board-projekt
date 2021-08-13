import { Link } from "components";
import React from "react";
import App from "./app.jsx";
import store from "../components/store";
import { Provider } from "react-redux";
import {  BrowserRouter } from "react-router-dom";

export default Home;

function Home() {
  return (
    <div>
      <h1>Kanban Board</h1>
      <p></p>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
      
      {/* <p>
        <Link href="/users">&gt;&gt; Manage Users</Link>
      </p> */}
    </div>
    
  );
}

