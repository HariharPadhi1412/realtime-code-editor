import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [roomId, setRoomID] = useState("");
  const [userName, setUserName] = useState("");

  const createNewRoom = (e) => {
    e.preventDefault();

    const id = uuidv4();
    setRoomID(id);

    toast.success("Created a new room");
  };

  const joinRoom = (e) => {
    if (!roomId || !userName) {
      toast.error("Room id and username is not valid");
      return;
    }

    navigate(`/editor/${roomId}`, {
      state: {
        userName,
      },
    });
  };

  const handleKeyUp = (e) => {
    if (e.code === "Enter") {
      joinRoom();
    }
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
            onKeyUp={handleKeyUp}
          ></input>
          <input
            className="inputBox"
            type="text"
            placeholder="USERNAME"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            onKeyUp={handleKeyUp}
          ></input>
          <button className="btn joinBtn" onClick={joinRoom}>
            Join
          </button>
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
