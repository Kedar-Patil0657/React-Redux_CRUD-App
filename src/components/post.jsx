import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { subtract } from "../Action/action";

const Post = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="container container-fluid">
      <div className="main-wrapper pt-5 pb-5 pl-5 mb-4">
        <div className="row">
          <div className="col-md-8">
            <div className="content-wrap">
              <h4 className="head-title">Title </h4>
              <p className="title-data">{props.n}</p>
            </div>
            <div className="hr"></div>
            <div className="wrapper-for-body">
              <h5 className="body-title">Body</h5>
              <p className="body-data">{props.s}</p>
            </div>
            <div className="wrap-for-id-uid mt-5">
              <span className="id-data">Id : {props.id}</span>

              <Link to={`/edit/${props.id}`} className="btn btn-warning edit">
                Edit
              </Link>
              <button
                className="delete-button btn btn-danger"
                onClick={() => {
                  dispatch(subtract(props.id));
                }}
              >
                Delete
              </button>
            </div>
          </div>
          <div className="col-md-4 img-wrapped">
            <img src={props.src} alt="Some img here" className="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
