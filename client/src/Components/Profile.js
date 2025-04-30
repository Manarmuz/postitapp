
import { useSelector } from "react-redux";
import userimg from "../Images/user.png";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const {user,isLogin} = useSelector((state) => state.users)
  const navigate = useNavigate();

  useEffect(() => {
    console.log("home component")
    if (!isLogin) navigate("/login")
  },{}) 

  return (
    <div>
      <img src={userimg} className="userImagee" alt=""/> 
      <h1>Profile</h1>
      <h6>{user?.name}</h6>
      <h6>{user?.email}</h6>
    </div>
  );
};



export default Profile;


