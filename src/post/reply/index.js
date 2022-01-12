import React from "react";
import { nanoid } from "nanoid";
import ActionReply from "./ActionReply";

const Reply = ({ replies }) => {
  const [newReplies, setNewReplies] = React.useState(replies);
  const [valueReply, setValueReply] = React.useState("");

  const handleReply = (e) => {
    e.preventDefault();
    const reply = {
      id: nanoid(),
      content: valueReply,
      likeCount: 0,
    };

    setNewReplies((prev) => [...prev, reply]);
    setValueReply("");
  };

  const actionDelete = (id) => {
    const replies = newReplies.filter((comment) => comment.id !== id);
    setNewReplies(replies);
  };

  return (
    <div className="ml-4 my-2 p-2 border-2 rounded-md border-gray-400">
      {newReplies.map((item) => (
        <div
          key={item.id}
          className="my-2 p-2 border-2 rounded-md border-gray-400"
        >
          <p className="text-xl">{item.content}</p>
          <ActionReply actionDelete={actionDelete} replyId={item.id} />
        </div>
      ))}
      <h1 className="text-2xl my-2">Replies : </h1>
      <form action="" onSubmit={handleReply} className="flex flex-col">
        <input
          className="p-2 bg-transparent outline-none"
          type="text"
          placeholder="Masukan balasan anda"
          value={valueReply}
          onChange={(e) => setValueReply(e.target.value)}
        />
        <button
          type="submit"
          className="border bg-blue-500 text-white rounded-md p-1 my-3"
        >
          Submit reply
        </button>
      </form>
    </div>
  );
};

export default Reply;
