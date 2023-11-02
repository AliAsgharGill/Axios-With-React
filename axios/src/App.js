import React, { useEffect, useState } from "react";

import axios from "axios";
function App() {
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setMyData(res.data));
  }, []);
  return (
    <>
      <h1 className="">Data with Axios</h1>
      {myData.map((post) => {
        const { id, title, body } = post;
        return (
          <div className="" id={id}>
            <h2>{title}</h2>
            <h2>{body}</h2>
          </div>
        );
      })}
    </>
  );
}

export default App;
