import { createContext } from "react";

//state อะไรก็ได้ แต่ในที่นี้จะเป็น object
const AuthContext = createContext({
  isLoggedIn: false,
});

export default AuthContext;
