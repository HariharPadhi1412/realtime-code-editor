import React, { useState } from "react";
import Clients from "../components/Clients";
import Editor from "../components//Editor";

const EditorPage = () => {
  const [clients, useClients] = useState([
    {
      socketid: 1,
      username: "123",
    },
    {
      socketid: 2,
      username: "1234",
    },
  ]);

  return (
    <div className="MainWrapper">
      <div className="aside">
        <div className="asideInner">
          <div className="logo">
            <img className="logoImg" src="/code-sync.png" alt="logo"></img>
          </div>
          <h3>Connected</h3>
          <div className="clientsList">
            {clients.map((client) => (
              <Clients key={client.socketid} username={client.username} />
            ))}
          </div>
        </div>
        <button className="btn copyBtn">Copy ROOM ID</button>
        <button className="btn leaveBtn">Leave</button>
      </div>

      <div className="editorWrap">
        <Editor />
      </div>
    </div>
  );
};

export default EditorPage;
