import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Reducers/store.js";
import UpdatePost from "./components/update";
import Add from "./components/Add";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/edit/:id" element={<UpdatePost />}></Route>
          <Route path="/add" element={<Add />}></Route>
          <Route path="/" element={<App />}></Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </>
);
