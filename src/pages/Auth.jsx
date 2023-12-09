import { useState, useEffect } from "react";
import {
  Navigate,
} from "react-router-dom";

function Auth() {
  const [login, setLogin] = useState(false);

  return <>{login ? <Navigate to="/login" /> : <Navigate to="/home" />}</>;
}

export default Auth;
