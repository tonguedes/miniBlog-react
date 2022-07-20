import React from "react";

import { AppHeader, AppFooter } from "../organisms";
import { DrawerMenu } from "../molecules";

export default function Default(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="wrapper">
      <DrawerMenu open={open} setOpen={setOpen} />
      <AppHeader setOpen={setOpen} />
      {props.children}
      <AppFooter />
    </div>
  );
}
