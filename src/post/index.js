import React from "react";
import Comment from "./comment";

const Post = ({ posts }) => {
  const [isComment, setIsComment] = React.useState(false);

  return (
    <div className="border border-gray-400 rounded-md mb-3">
      <div
        className="p-4 cursor-pointer"
        onClick={() => setIsComment(!isComment)}
      >
        <h1 className="text-red-900">{posts.content}</h1>
      </div>
      {isComment && <Comment comment={posts.comments} />}
    </div>
  );
};

export default Post;
