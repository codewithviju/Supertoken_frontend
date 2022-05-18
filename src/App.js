//my-demo-app/src/App.js

import ThirdPartyEmailPassword, {
  Google,
  ThirdPartyEmailPasswordAuth,
} from "supertokens-auth-react/recipe/thirdpartyemailpassword";
import Session from "supertokens-auth-react/recipe/session";

// import react-router-dom components

import { Routes, BrowserRouter as Router, Route } from "react-router-dom";

// import SuperTokens Auth routes

import SuperTokens, {
  getSuperTokensRoutesForReactRouterDom,
} from "supertokens-auth-react";

import Home from "./Home";

SuperTokens.init({
  appInfo: {
    appName: "Demo",
    apiDomain:
      "https://b27c-106-222-64-170.in.ngrok.io" || "http://localhost:3001",
    websiteDomain:
      "https://0158-106-222-64-170.in.ngrok.io" || "http://localhost:3000",
  },
  recipeList: [
    ThirdPartyEmailPassword.init({
      signInAndUpFeature: {
        providers: [Google.init()],
      },
    }),
    Session.init(),
  ],
});

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/*This renders the login UI on the /auth route*/}
          {getSuperTokensRoutesForReactRouterDom(require("react-router-dom"))}
          <Route
            path="/"
            element={
              <ThirdPartyEmailPasswordAuth>
                <Home />
              </ThirdPartyEmailPasswordAuth>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
