import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import VideoPage from "./pages/VideoPage";

import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/watch">
            <VideoPage />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
