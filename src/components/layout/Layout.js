import { useState } from "react";
import { useLocation } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = (props) => {
  const [openDrawer, setOpenDrawer] = useState(false); // Video Sidebar
  const drawerToggle = () => {
    setOpenDrawer((prevState) => {
      setOpenDrawer(!prevState);
    });
  };
  const location = useLocation();
  let sidebarType = "";
  let toggleFunction = "";
  if (location.pathname === "/watch") {
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
