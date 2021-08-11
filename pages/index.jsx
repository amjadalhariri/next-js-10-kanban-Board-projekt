import { Link } from 'components';
import React from "react";
import App from "./app.jsx";
import Loadable from "react-loadable";
import store from "../components/store";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";
import Logo from "../components/Logo/Logo.jsx";
import { Switch, Route } from "react-router-dom";
import Header from "../components/Header/Header.jsx";

import Basic from "../components/Routes/Basic/Basic.jsx";
import Manage from "../components/Routes/Manage/Manage.jsx";
import Reports from "../components/Routes/Reports/Reports.jsx";
import Schedule from "../components/Routes/Schedule/Schedule.jsx";
import Settings from "../components/Routes/Settings/Settings.jsx";
export default Home;

function Home() {
    
    return (
      <div>
        <h1>Kanban Board</h1>
        <p></p>
        <Provider store={store}>
          <StaticRouter>
            <div className="kanban-wrapper">
              <div className="kanban">
                <Logo />
                <Header />
                <Sidebar />
                <Switch>
                  {/* <Link href="/users">&gt;&gt; Manage Users</Link> */}
                  <Route exact path="/" component={Basic} />
                  <Route path="/manage" component={Manage} />
                  <Route path="/schedule" component={Schedule} />
                  <Route path="/reports" component={Reports} />
                  <Route path="/settings" component={Settings} />
                </Switch>
              </div>
            </div>
          </StaticRouter>
        </Provider>
        <p>
          <Link href="/users">&gt;&gt; Manage Users</Link>
        </p>
      </div>
    );
}
const Loading = () => <div className="loading">Loading...</div>;

const Sidebar = Loadable({
  loader: () => import("../components/Sidebar/Sidebar.jsx"),
  loading: Loading,
});