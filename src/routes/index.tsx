import { useState } from "react";

import { Dashboard } from "../screens/Dashboard";
import { SignIn } from "../screens/SignIn";

export function Routes() {
  const [ auth, setAuth ] = useState<boolean>(false);
  
  return (
    <>
      {auth ? <Dashboard /> : <SignIn />}
    </>
  );
}