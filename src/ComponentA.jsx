import React, { useState, createContext } from "react";
import ComponentB from "./ComponentB";
export const UserContext= createContext()
function ComponentA() {
  const [user, setUser] = useState("mohammed");
  

  return (
    <div className="box">
      <h1>ComponetA</h1>
      <h2>
        {`hello ${user}`}
        <h2>
          <> ComponentB user={user}</>
        </h2>
      </h2>
      <UserContext.provider value={user}>
        <ComponentB user={user} />
      </UserContext.provider>
    </div>
  );
}
export default ComponentA;
