import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../assets/css/posts.css";

export const User = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        // handle success
        console.log(response.data);
        setPosts(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  // const creatPost = async () => {
  //   try {
  //     await axios({
  //       method: "Post",
  //       url: "https://jsonplaceholder.typicode.com/posts",
  //       data: JSON.stringify({
  //         title: "fooo",
  //         body: "bar",
  //         userId: 1,
  //       }),
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  console.log("posts data", posts);
  return (
    <div>
      <div className="post-cards-container">
      {posts.map((items) => {
        return (
            <div className="cards-container">
              <h4>{items.title}</h4>
              <p>{items.body}</p>
              {/* <button onClick={creatPost}>Create Post</button>; */}
            </div>
        );
      })}
      </div>
    </div>
  );
};

export default User;
