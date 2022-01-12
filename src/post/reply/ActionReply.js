import React from "react";

const ActionReply = ({ actionDelete, replyId }) => {
  const [like, setLike] = React.useState(0);

  return (
    <div className="flex justify-start items-center my-1">
      <button
        className="cursor-pointer pr-2"
        onClick={() => setLike((prev) => prev + 1)}
      >
        Like {like}
      </button>
      <p className="cursor-pointer pr-2" onClick={() => actionDelete(replyId)}>
        Delete
      </p>
    </div>
  );
};

export default ActionReply;
