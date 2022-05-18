//my-demo-app/src/Home/index.js

import React from "react";

import { useSessionContext } from "supertokens-auth-react/recipe/session";
import { useNavigate } from "react-router-dom";
import { signOut } from "supertokens-auth-react/recipe/thirdpartyemailpassword";

export default function Home() {
  const { userId } = useSessionContext();
  const navigate = useNavigate();

  async function Logout() {
    await signOut();
    navigate("/auth");
  }

  return (
    <div className="fill">
      <h1>Welcome To Home Page</h1>
      {userId}
      <button onClick={Logout}>Logout</button>
    </div>
  );
}
