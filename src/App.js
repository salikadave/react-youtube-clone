import { Switch, Route } from "react-router-dom";
import { useState } from "react";

import VideoPage from "./pages/VideoPage";
import HomeSidebar from "./components/layout/HomeSidebar";
import Layout from "./components/layout/Layout";

function App() {
  const [openHomeDrawer, setHomeDrawer] = useState(true);
  const drawerHomeToggle = () => {
    setHomeDrawer((prevState) => {
      return !prevState;
    });
  };

  return (
    <div>
      <Layout drawerHomeToggle={drawerHomeToggle}>
        <Switch>
          <Route path="/" exact>
            <HomeSidebar
              isOpen={openHomeDrawer}
              drawerToggle={drawerHomeToggle}
            />
          </Route>
          <Route path="/watch/:id">
            <VideoPage />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
