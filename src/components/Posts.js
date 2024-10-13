import React, { useEffect, useState } from "react";
import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/posts";
function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setIsloading] = useState(true);
  const [error, setError] = useState();
  // use useEffect to get the API
  useEffect(() => {
    // make HTTP request
    axios
      .get(URL)
      .then((post) => {
        // set loading state here
        setIsloading(false);
        // update the post state
        setPosts(post.data);
      })
      .catch((error) => {
        setError(error);
        setIsloading(false);
      });
  }, [error, loading]);
  // display loading
  if (loading) return <div>Loading...</div>;
  // display error
  if (error) return <div>{error.message}</div>;
  return (
    <div>
      <h2>Network Request (REST-FULL API)</h2>
      <div>
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <h2>ID: {post.id}</h2>
              <h2>Title: {post.title}</h2>
              <p>Details: {post.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
