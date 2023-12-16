import { useState, useEffect } from "react";
import {
  Navigate,
} from "react-router-dom";


const Auth = ({}) => {

  return <>{login ? <Navigate to="/login" /> : <Navigate to="/home" />}</>;
}

export default Auth;
