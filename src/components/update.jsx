import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { update } from "../Action/action";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const UpdatePost = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const stateVal = useSelector((state) => state.counter);
  const { name, surname } = stateVal[id];
  const [lname, setLname] = useState(surname);
  const [fname, setFname] = useState(name);

  return (
    <div className="addpost-main-wrapper pb-4">
      <div className="addpost d-flex justify-content-center">
        <h2 className="m-5"> Edit Post</h2>
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
            onClick={(e) => {
              if (fname === "" || lname === "") {
                alert("Cannot be empty string");
              } else {
                dispatch(update({ name: fname, surname: lname, id: id }));
                setFname("");
                setLname("");
                window.history.back();
                console.log("executed");
              }
            }}
          >
            Edit Post
          </button>
          <Link to="/" className="btn btn-danger ml-2">
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpdatePost;
