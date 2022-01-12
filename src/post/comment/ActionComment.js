import React from "react";

const ActionComment = ({ actionDelete, commentId, setIsReply }) => {
  const [like, setLike] = React.useState(0);

  return (
    <div className="flex items-center justify-start pb-2 px-2">
      <p
        className="cursor-pointer pr-2"
        onClick={() => {
          setIsReply(true);
        }}
      >
        Reply
      </p>
      <button
        className="cursor-pointer pr-2"
        onClick={() => setLike((prev) => prev + 1)}
      >
        Like <span>{like}</span>
      </button>
      <p
        className="cursor-pointer pr-2"
        onClick={() => actionDelete(commentId)}
      >
        Delete
      </p>
    </div>
  );
};

export default ActionComment;
