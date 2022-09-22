import "./App.css";
import React from "react";
import { useSelector } from "react-redux";
import Post from "./components/post";
import { Link } from "react-router-dom";

function App() {
  const stateVal = useSelector((state) => state.counter);
  return (
    <div className="container">
      <div className="container d-flex justify-content-between">
        <div className="my-post-wrap d-flex justify-content-between align-items-center text-white container m-3">
          <h2 className="Post text-white p-2">Posts</h2>
          <Link className=" btn btn-primary" to="/add">
            Add Post
          </Link>
        </div>
      </div>
      <div className="container">
        {stateVal.map((val, index) => {
          return (
            <Post
              n={val.name}
              s={val.surname}
              key={index}
              id={index}
              src={
                "https://qph.cf2.quoracdn.net/main-qimg-0c221aed06feb2a7bc9947a6dcb7ec1f-lq"
              }
            />
          );
        })}
      </div>
      <br></br>
    </div>
  );
}

export default App;
