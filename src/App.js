import React from "react";
import { nanoid } from "nanoid";
import Post from "./post";

const posts = [
  {
    id: "u38qgh3hg3",
    content: "Start 2022 with JS Algorithm & Data Structures",
    likeCount: 0,
    comments: [
      {
        id: "tey78ayt7a8eyga",
        content: "Kalau sudah siap berkabar aja ya",
        likeCount: 0,
        replies: [
          {
            id: "gye7a8gy7e8a",
            content: "Oyisam wkwk",
            likeCount: 0,
          },
        ],
      },
    ],
  },
  {
    id: "99999999",
    content: "Start 2022 with TS",
    likeCount: 0,
    comments: [
      {
        id: "12121212121",
        content: "Kalau sudah tidak siap berkabar aja ya",
        likeCount: 0,
        replies: [
          {
            id: "a5a5a5a5a5a5a5a5",
            content: "Tidak Oyisam wkwk",
            likeCount: 0,
          },
        ],
      },
    ],
  },
];

const App = () => {
  const [allPosts, setAllPosts] = React.useState(posts);
  const [valuePost, setValuePost] = React.useState("");

  const actionPost = (e) => {
    e.preventDefault();

    const newPost = {
      id: nanoid(),
      content: valuePost,
      likeCount: 0,
      comments: [],
    };

    setAllPosts((prev) => [...prev, newPost]);
  };

  return (
    <div className="bg-gray-50 h-auto">
      <div className="flex items-start justify-between p-4">
        <div className="border border-gray-400 h-auto">
          <form onSubmit={actionPost} className="flex flex-col p-2">
            <textarea
              name="post"
              id="post"
              cols="50"
              rows="10"
              value={valuePost}
              onChange={(e) => setValuePost(e.target.value)}
            />

            <button
              type="submit"
              className="border bg-blue-500 text-white rounded-md p-1 my-3"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="h-auto p-2 w-full">
          {allPosts.map((item) => (
            <Post key={item.id} posts={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
