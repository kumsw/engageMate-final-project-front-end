import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import FeaturedMenu from "../../pages/featureMenu";
import useRoleContext from "../../context/roleContext";
import { config } from "../../config";
import { useColorModeValue } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from "../../pages/admin";
import Quiz from "../../pages/quiz";
import Deck from "../../pages/dj-deck";
import Thumbometer from "../thumb-o-meter";

import RaiseHand from "../../pages/raise-hand";

const envUrl = config.url;
const Authorised = () => {
  const bg = useColorModeValue("white", "#110042");
  const color = useColorModeValue("#110042", "white");
  const data = useRoleContext();
  const role = data[0];
  const setRole = data[1];
  const setLoggedUser = data[3];

  const { user } = useAuth0();

  let url = `${envUrl}/users/${user.email}`;

  useEffect(() => {
    async function getUsers() {
      setLoggedUser(user);
      const data = await fetch(url);
      const result = await data.json();
      result.success === false
        ? setRole("bootcamper")
        : setRole(result.data.role);
    }

    getUsers();
  }, []);
  return (
    <>
      <Router>
        <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/raisehand">
            <RaiseHand bg={bg} color={color} />
          </Route>
          <Route path="/quiz">
            <Quiz bg={bg} color={color} />
          </Route>
          <Route path="/deck">
            <Deck bg={bg} color={color} />
          </Route>
          <Route path="/thumb">
            <Thumbometer guest={"bootcamper"} />
          </Route>
          <Route exact path="/">
            {role === "bootcamper" ? (
              <FeaturedMenu guest={"bootcamper"} />
            ) : (
              <FeaturedMenu role={role} />
            )}
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Authorised;
