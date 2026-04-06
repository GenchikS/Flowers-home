import { useDispatch, useSelector } from "react-redux";
import { selectItem } from "../../redux/user/usersSlice.js";
import { logoutUser } from "../../redux/user/operations.js";

export default function Logout() {
  const dispatch = useDispatch();
  const userIsLogin = useSelector(selectItem);
  
  if (userIsLogin) {
    // console.log("userIsLogin", userIsLogin);
    const sessionId = userIsLogin.data.sessionId;
    dispatch(logoutUser({ sessionId: sessionId }));
    // dispatch(selectItemLogin([]));
  }
    
  return;
}