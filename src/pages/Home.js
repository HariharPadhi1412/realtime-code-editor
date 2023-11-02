import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";

const Home = () => {
  const [roomId, setRoomID] = useState("");
  const [userName, setUserName] = useState("");

  const createNewRoom = (e) => {
    e.preventDefault();

    const id = uuidv4();
    setRoomID(id);

    toast.success("Created a new room");
  };

  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img className="homePageLogo" src="/code-sync.png" alt="logo"></img>
        <h4 className="mainLabel"> Paste Invitation ROOM ID</h4>
        <div className="inputGroup">
          <input
            className="inputBox"
            type="text"
            placeholder="ROOM ID"
            onChange={(e) => setRoomID(e.target.value)}
            value={roomId}
          ></input>
          <input
            className="inputBox"
            type="text"
            placeholder="USERNAME"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
          ></input>
          <button className="btn joinBtn">Join</button>
          <span className="createInfo">
            If you don't have an invite then &nbsp;
            <a onClick={createNewRoom} href="/" className="newRoom">
              new room
            </a>
          </span>
        </div>
      </div>

      <footer>
        <h4>
          {" "}
          Built with ❤ &nbsp; by <a href="/">Hari</a>
        </h4>
      </footer>
    </div>
  );
};

export default Home;
