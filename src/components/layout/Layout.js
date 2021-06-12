import { useState } from "react";
import { useRouteMatch } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = (props) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const drawerToggle = () => {
    setOpenDrawer((prevState) => {
      return !prevState;
    });
  };

  let sidebarType = "";
  let toggleFunction = "";
  const route = useRouteMatch({
    path: ["/watch/:id"],
    exact: true,
  });
  if (route) {
    toggleFunction = drawerToggle;
    sidebarType = <Sidebar isOpen={openDrawer} drawerToggle={drawerToggle} />;
  } else {
    toggleFunction = props.drawerHomeToggle;
  }
  return (
    <div>
      <Header drawerToggle={toggleFunction} />
      {sidebarType}
      <div>
        <main>{props.children}</main>
      </div>
    </div>
  );
};

export default Layout;
