import React, { useEffect, useState } from "react";

import axios from "axios";
function App() {
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setMyData(res.data));
  }, []);
  return (
    <>
      <h1 className="text-center font-bold font text-4xl p-3 text-orange-600 shadow mb-3 ">
        Data with Axios
      </h1>
      <div className="grid grid-cols-4 gap-4 p-3">
        {myData.map((post) => {
          const {
            id,
            name,
            username,
            email,
            address,
            company,
            website,
            phone,
          } = post;
          return (
            <div
              key={id}
              className=" max-w-xs rounded-lg text-center  p-3  shadow-lg border-2  brder-orange-700 bg-orange-500 "
            >
              <h2 className="text-lg font-bold">Name: {name}</h2>
              <h2 className="text-lg font-bold">UserName: {username}</h2>
              <p className="text-lg ">Email: {email}</p>
              <p className="text-lg ">City: {address.city}</p>
              <p className="text-lg ">Zipcode: {address.zipcode}</p>
              <p className="text-lg ">Email: {email}</p>
              <p className="text-lg ">Company: {company.name}</p>
              <p className="text-lg ">Phone: {phone}</p>
              <p className="text-lg ">Website: {website}</p>
              console.log(Hello);
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
