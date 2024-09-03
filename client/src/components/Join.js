import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { default as socket } from "./ws";

function Join() {
  const [nickname, setNickname] = useState();
  const history = useHistory();
  const handleOnClick = () => history.push(`/chat/${nickname}`);

  useEffect(() => {
    localStorage.setItem("chatConnected", "true");
  }, []);

  const submitNickname = () => {
    if(nickname !== undefined && nickname !== "") {
      socket.emit("user nickname", nickname);
      handleOnClick();
    }
  };

  return (
    <div className="relative">
      <h1 className="absolute top-10 left-10 font-bold text-5xl text-gray-900">Chat App 🦜 </h1>
      <div className="flex flex-col justify-center h-screen bg-gray-100">
        <div className="grid place-items-center">
          <form className="flex w-full max-w-sm justify-center">
            <div className="relative">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <div className="flex space-x-5">
                <input
                  type="text"
                  onChange={(e) => setNickname(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  placeholder="Username"
                />
                <button
                  className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                  onClick={() => {
                    submitNickname();
                  }}
                  type="submit"
                >
                  Join
                </button>
              </div>
            </div>
          </form>
          <p className="mt-5 text-gray-500">Please enter your nickname to join a chat</p>
        </div>
      </div>
    </div>
  );
}

export default Join;
