import React from "react";
import './Default.css'

const Default = (props) => {
  return (
    <>
      <div className="default">
        <h1>error</h1>
        <h1 >404</h1>
        <h2>page not found</h2>
        <h3>
          the requested URL
          <span className="text-danger">{props.location.pathname}</span>
          {""}
          was not found
        </h3>
      </div>
    </>
  );
};
export default Default;
