import { useState } from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = (props) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const drawerToggle = () => {
    setOpenDrawer((prevState) => {
      setOpenDrawer(!openDrawer);
    });
  };
  return (
    <div>
      <Header drawerToggle={drawerToggle} />
      <Sidebar isOpen={openDrawer} drawerToggle={drawerToggle} />
      <div>
        <main>{props.children}</main>
      </div>
    </div>
  );
};

export default Layout;
