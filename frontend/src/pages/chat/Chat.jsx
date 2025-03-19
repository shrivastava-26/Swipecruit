import React from "react";
import { MdOutlineAttachment } from "react-icons/md";
import { VscSend } from "react-icons/vsc";
import { Button } from "../../components/common/Button";
import useStatus from "@shrivastava/usestatus";


const Chat = () => {

    let isOnline = useStatus();


  return (
    <div className="flex justify-center w-screen">
      <div className="w-[80%] ml-[10%] h-screen p-4 border rounded-lg">
        <div className="flex items-center gap-3 p-4  bg-gradient-to-l from-purple-300 to-rose-500 font-medium text-white rounded-t-lg">
          <img src="" alt="profile" className="w-10 h-10 rounded-full cursor-pointer" />
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold">Username</h2>
            <span className="text-sm">{isOnline?"online":"offline"}</span>
          </div>
        </div>

        <div className="flex-1 h-[70%] p-4 bg-white rounded-md">
          <h1 className="text-center">Start a conversation</h1>
        </div>

        <div className="flex items-center gap-2 p-4 rounded-b-lg">
          <Button className="p-2 text-white  bg-gradient-to-l from-purple-300 to-rose-500 font-medium text-white rounded-lg cursor-pointer">
            <MdOutlineAttachment size={24} />
          </Button>
          <input
            type="text"
            placeholder="send a message"
            className="flex-1 p-2 rounded-lg border-1"
          />
          <Button className="p-2  bg-gradient-to-l from-purple-300 to-rose-500 font-medium text-white rounded-lg cursor-pointer">
            <VscSend size={24} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
