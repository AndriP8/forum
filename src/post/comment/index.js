import React from "react";
import { nanoid } from "nanoid";
import Reply from "../reply";
import ActionComment from "./ActionComment";

const Comment = ({ comment }) => {
  const [valueComment, setValueComment] = React.useState("");
  const [newComment, setNewComment] = React.useState(comment);
  const [isReply, setIsReply] = React.useState(false);

  const handleComment = (e) => {
    e.preventDefault();
    const comment = {
      id: nanoid(),
      content: valueComment,
      likeCount: 0,
      replies: [],
    };

    setNewComment((prev) => [...prev, comment]);
    setValueComment("");
  };

  const actionDelete = (id) => {
    const allComment = newComment.filter((comment) => comment.id !== id);
    setNewComment(allComment);
  };

  return (
    <div className="p-4 border-t border-gray-400">
      {newComment.map((item) => (
        <div key={item.id} className="my-2 border-2 rounded-md border-gray-400">
          <div className="mb-2 border-b-4 border-gray-400">
            <p className="text-2xl p-2">{item.content}</p>
            <ActionComment
              actionDelete={actionDelete}
              commentId={item.id}
              setIsReply={setIsReply}
            />
          </div>
          {isReply && <Reply replies={item.replies} />}
        </div>
      ))}
      <h1 className="text-3xl my-2">Comments : </h1>
      <form action="" onSubmit={handleComment} className="flex flex-col">
        <input
          className="p-2 bg-transparent outline-none"
          type="text"
          placeholder="Masukan balasan anda"
          value={valueComment}
          onChange={(e) => setValueComment(e.target.value)}
        />
        <button
          type="submit"
          className="border bg-blue-500 text-white rounded-md p-1 my-3"
        >
          Submit comment
        </button>
      </form>
    </div>
  );
};

export default Comment;
