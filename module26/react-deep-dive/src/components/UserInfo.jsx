import { useContext } from "react";
import UserContext from "./UserContext";

export default function UserInfo() {
  const user = useContext(UserContext);

  return (
    <div className="userInfo" style={{fontSize: 'small', lineHeight: 0.3}}>
      {Object.entries(user).map(([prop,value]) => {
        if (prop == 'img') return
        return <p key={prop}><b>{prop}</b>: {value}</p>
      })}
    </div>
  );
}