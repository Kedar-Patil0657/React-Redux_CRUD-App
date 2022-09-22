import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../Action/action";
import { useState } from "react";
import { Link } from "react-router-dom";

const Add = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="addpost-main-wrapper pb-4">
      <div className="addpost d-flex justify-content-center">
        <h2 className="m-5"> Add Post</h2>
      </div>
      <div className="container mb-4 main-wrapper-for-addpost p-5">
        <div className="form-group">
          <label htmlFor="usr" className="user">
            Title :
          </label>
          <input
            type="text"
            className="form-control"
            id="usr"
            placeholder="Enter the title"
            onChange={(e) => {
              setFname(e.target.value);
            }}
            value={fname}
          />
        </div>
        <div className="form-group">
          <label htmlFor="comment" className="comment">
            Body :
          </label>
          <textarea
            className="form-control"
            rows={4}
            id="comment"
            placeholder="Enter the body"
            onChange={(e) => {
              setLname(e.target.value);
            }}
            value={lname}
          ></textarea>
        </div>
        <div className="input-group-append">
          <button
            className="btn btn-success"
            type="submit"
            onClick={() => {
              if (fname === "" || lname === "") {
                alert("Cannot be empty string");
              } else {
                dispatch(add({ name: fname, surname: lname }));
                setFname("");
                setLname("");
                window.history.back();
              }
            }}
          >
            Add
          </button>
          <Link to="/" className="btn btn-danger ml-2">
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Add;
