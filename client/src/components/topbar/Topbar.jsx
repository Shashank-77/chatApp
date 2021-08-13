import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { logoutCall } from "../../apiCalls";
import { useHistory } from "react-router";
import { useContext, useRef, useState } from "react";

export default function Topbar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { dispatch } = useContext(AuthContext);
  const history = useHistory();
  const [newMessage, setNewMessage] = useState("");

  const handleClick = (e) => {
    console.log("HJJJJ")
    e.preventDefault();
    logoutCall(
      dispatch
    );
    history.push("/login");
  };

  const handleClick1 = (e) => {
    e.preventDefault();
    try{
      history.push(`/profile/${newMessage}`);
    }catch (err) {
      console.log(err);
    }
  };

 


  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">chatApp</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <form onSubmit={handleClick1}>
            <Search className="searchIcon" />
            <input
              placeholder="Search for People"
              className="searchInput"
              onChange={(e) => setNewMessage(e.target.value)}
              value={newMessage}
            />
          </form>
          
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <Link to={`/`}>
              <span className="topbarLink">Messenger</span>
           </Link>
           <Link to={`/profile/${user.username}`}>
            <span className="topbarLink">Profile</span>
           </Link>
          
        </div>
        {/* <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div> */}
        {/* <Link to={`/profile/${user.username}`}> */}
          {/* <button> */}
            {/* <img
              src={
                user.profilePicture
                  ? PF + user.profilePicture
                  : PF + "person/noAvatar.png"
              }
              alt=""
              className="topbarImg"
              onClick={handleClick}
            /> */}
             <span onClick={handleClick} className="topbarLogout">
               Logout
             </span>
          {/* </button> */}
          
        {/* </Link> */}
      </div>
    </div>
  );
}
